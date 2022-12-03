import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterMini from "./components/FooterMini";
import Modal from "./components/Modal";
import Api from "./Api.js";
import Local from "./Local";
import Deleted from "./pages/Deleted"
import HeaderMini from "./components/HeaderMini";
import Favourit from "./pages/Favourit";
import AddProduct from "./pages/AddProduct";
import Single from "./pages/Single";

const Context = React.createContext({});


const App = () =>{
    const [goods,setGoods] = useState([]);
    const [data, setData] = useState([]);
    const [del, setDel] = useState([]);
    const [token, setToken] = useState(Local.getItem("shop-user"));
    const [user, setUser] = useState(Local.getItem("u", true))
    const [popupActive, changePopupActive]=useState(false)
    const [api, setApi] = useState(new Api(token));
    const [fav, setFav] = useState([])
    const defaultToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhYTJiOGZkOTcyNTA2OTFhZGU5M2YiLCJpYXQiOjE2Njk2NDU2NjIsImV4cCI6MTcwMTE4MTY2Mn0.w5k0o5hA1dE7Ew2A6MoyWaG7C4pUpgnw8dA5SFR-DaY";
    const api2 = new Api(defaultToken);
    console.log("api2",api2);
    const [products, setProducts] = useState([]);
    const [searchText, search] = useState("")
    
    useEffect(()=>{
        console.log("user is changed");
        setApi(new Api(token));
    }, [token])


    useEffect( () =>{
        if(token){
            api.getProducts()
            .then(res =>res.json())
            .then(data =>{
                setGoods(data.products);
                setData(data.products)
            })
            api.showProfile()
                .then(result => result)
                .then(data => {
                    console.log("user", data);
                })
        }else{
            setGoods([]);
            setData([])
        }
        
    }, [api])
    
    useEffect(()=>{
        let f = goods.filter(el => el.likes.includes(user._id))
        setFav(f);
        setProducts(goods)
    }, [goods])

    useEffect(()=>{
        let d = goods.filter(prod => prod.likes.length === 0);
        setDel(d)
    }, [goods])

    console.log("fav",fav, "\n del", del);

    return <Context.Provider value={{
        goods: goods,
        setGoods: setGoods,
        products:products, //филтрация поиска
        searchText: searchText,
        setProducts: setProducts,
        search: search,
        api: api, 
        setApi: setApi

        }}>
        <div className="wrapper"> 
            { screen.width < 768 ? <HeaderMini products={data} update={setGoods} openPopup =
            {changePopupActive} user={!!token} setToken={setToken} setUser={setUser}/>
            : <Header openPopup =
            {changePopupActive} user={!!token} setToken={setToken} setUser={setUser}
            like = {fav.length}/>
            }
            <Routes>
                <Route path="/" element={<Main setFav={setFav} api2={api2} user={user} data={data}/>}/>
                <Route path="/add" element={<AddProduct />} />
                <Route path="/favourites" element={<Favourit goods = {fav} setFav={setFav} api={api}/>} />
                <Route path="/catalog" element={<Catalog setFav={setFav} api2={api2} products={products}/>}/>
                {/* <Route path="/product/:id" element={<Product/>}/> */}
                <Route path="/product/:id" element={<Single/>}/>
                <Route path="/profile" element={<Profile user={user}/>}/>
                <Route path="/deleted" element ={<Deleted  del={del}/>}/>
            </Routes>
           {screen.width < 768 ? <FooterMini user={user} like = {fav.length}/> :<Footer/>}
        </div>
        {!token &&<Modal isActive={popupActive}
        changeActive={changePopupActive} 
        setToken={setToken} 
        api={api} 
        setUser={setUser} />}
    </Context.Provider>
}

export  {App, Context};