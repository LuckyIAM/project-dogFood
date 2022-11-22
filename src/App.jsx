import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Api from "./Api.js";
import Local from "./Local";
import HeaderMini from "./components/HeaderMini";
import Favourit from "./pages/Favourit";

// import {Col, Container, Row} from "react-bootstrap";


const App = () =>{
    const [goods,setGoods] = useState([]);
    const [data, setData] = useState([]);
    const [token, setToken] = useState(Local.getItem("shop-user"));
    const [user, setUser] = useState(Local.getItem("u", true))
    const [popupActive, changePopupActive]=useState(false)
    const [api, setApi] = useState(new Api(token));
    const [fav, setFav] = useState([])
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
    // console.log(goods);
    useEffect(()=>{
        let f = goods.filter(el => el.likes.includes(user._id))
        setFav(f);
    }, [goods])

    console.log("fav",fav);

    return <>
        <div className="wrapper"> 
            { screen.width < 768 ? <HeaderMini products={data} update={setGoods} openPopup =
            {changePopupActive} user={!!token} setToken={setToken} setUser={setUser}/>
            : <Header products={data} update={setGoods} openPopup =
            {changePopupActive} user={!!token} setToken={setToken} setUser={setUser}
            like = {fav.length}/>
            }
            <Routes>
                <Route path="/" element={<Main setFav={setFav} api={api}/>}/>
                <Route path="/favourites" element={<Favourit favourites={fav} api={api}/>} />
                <Route path="/catalog" element={<Catalog goods={goods} setFav={setFav} api={api}/>}/>
                <Route path="/product/:id" element={<Product api={api}/>}/>
                <Route path="/profile" element={<Profile user={user}/>}/>
            </Routes>
            <Footer/>
        </div>
        {!token &&<Modal isActive={popupActive}
        changeActive={changePopupActive} 
        setToken={setToken} 
        api={api} 
        setUser={setUser} />}
    </>
}

export default App;