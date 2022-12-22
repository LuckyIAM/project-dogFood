import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Favourit from "./pages/Favourit";
import AddProduct from "./pages/AddProduct";
import Single from "./pages/Single";
import Basket from "./pages/Basket";
import AddComment from "./pages/AddComment";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterMini from "./components/FooterMini";
import Modal from "./components/Modal";
import HeaderMini from "./components/HeaderMini";
import UpdatePage from "./components/UpdatePage";

import Api from "./Api.js";
import Local from "./Local";





const Context = React.createContext({});


const App = () =>{
    const [goods,setGoods] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket-product") ? JSON.parse(localStorage.getItem("basket-product")) : []);
    const [idProduct, setIdProduct] = useState(localStorage.getItem("id-product") ? JSON.parse(localStorage.getItem("id-product")) : []);
    const [_id, set_Id] = useState("");
    const [idParams, setIdParams] = useState(localStorage.getItem("id-params") || "")
    const [token, setToken] = useState(Local.getItem("token-user") || "");
    const [user, setUser] = useState(Local.getItem("user", true))
    const [userId, setUserId] = useState({}) ;
    const [popupActive, changePopupActive]=useState(false)
    const [api, setApi] = useState(new Api(token));
    const [fav, setFav] = useState([]);
    const defaultToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhYTJiOGZkOTcyNTA2OTFhZGU5M2YiLCJpYXQiOjE2Njk2NDU2NjIsImV4cCI6MTcwMTE4MTY2Mn0.w5k0o5hA1dE7Ew2A6MoyWaG7C4pUpgnw8dA5SFR-DaY";
    const api2 = new Api(defaultToken);
    const [products, setProducts] = useState([]);
    const [searchText, search] = useState("");
    const [succes, setSucces] = useState(false);
    const [textContent, setTextContent] = useState('');
    const [widthScreen, setWidthScreen] = useState();
    const [product, setProduct]= useState({});
    const [allComment, setAllComment] = useState(JSON.parse(localStorage.getItem("comment")) || []);
    const [basketLen, setBasketLen] =useState(parseFloat(basketLen) > 0 ? basketLen : 0); 
    const [updPage, setUpdPage] = useState(false)
    
    useEffect(()=>{
        if (innerWidth < 340){
            setWidthScreen(1);
        }else if (innerWidth >= 500 && innerWidth < 780){
            setWidthScreen(2);
        }else if (innerWidth >= 780 && innerWidth < 1050){
            setWidthScreen(3);
        }else if (innerWidth >= 1050){
            setWidthScreen(4);
        }
    }, []) 

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
            })
            api.showProfile()
                .then(result => result)
                .then(data => {
                    console.log("user", data);
                })
        }else{
            localStorage.removeItem("token-user");
            localStorage.removeItem("user");
            api2.getProducts()
            .then(res =>res.json())
            .then(data =>{
                setUserId("627aa2b8fd97250691ade93f")
                setGoods(data.products);
            })
        }
    
    }, [api])
    
    useEffect(()=>{
        if (token){
            let f = goods.filter(el => el.likes.includes(user._id))
            setFav(f);
        }
        setProducts(goods)
    }, [goods])

    useEffect(()=> {
        let bLen = basket.length
        setBasketLen(bLen);
    }, [basket])

    return <Context.Provider value={{
        widthScreen: widthScreen,
        goods: goods,
        setGoods: setGoods,
        products:products, //филтрация поиска
        searchText: searchText,
        setProducts: setProducts,
        search: search,
        api: api, 
        setApi: setApi,
        api2: api2, 
        token: token, 
        basket: basket,
        setBasket: setBasket,
        idProduct: idProduct,
        setIdProduct:setIdProduct, 
        idParams: idParams,
        setIdParams: setIdParams,
        product: product, 
        setProduct: setProduct,
        allComment: allComment, 
        setAllComment: setAllComment,
        popupActive: popupActive, 
        changePopupActive: changePopupActive,
        user: user,
        setUserId: setUserId,
        userId: userId,
        updPage: updPage,
        setUpdPage: setUpdPage
        }}>
        <div className="wrapper"> 
            { screen.width < 768 ? <HeaderMini products={goods} update={setGoods} openPopup =
            {changePopupActive} user={!!token} setToken={setToken} setUser={setUser}/>
            : <Header openPopup =
            {changePopupActive} user={!!token} setToken={setToken} setUser={setUser}
            like = {fav.length} basketLen={basketLen} />
            }
            <Routes>
                <Route path="/" element={<Main setFav={setFav} api2={api2} goods={goods} />}/>
                <Route path="/add" element={<AddProduct />} />
                <Route path="/favourites" element={<Favourit goods = {fav} setFav={setFav} api={api}/>} />
                <Route path="/catalog" element={<Catalog setFav={setFav} api2={api2} products={products}/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/productchange/:id" element={<Single/>}/>
                <Route path="/profile" element={<Profile user={user}/>}/>
                <Route path="/basket" element ={<Basket  basket={basket} setBasket={setBasket}/>}/>
                <Route path="/message-form" element={<AddComment/>}/>                
            </Routes>
           {screen.width < 768 ? <FooterMini user={user} like = {fav.length} basketLen={basketLen}/> :<Footer user={user} like = {fav.length}/>}
        </div>
        {!token && <Modal isActive={popupActive}
        changeActive={changePopupActive} 
        setToken={setToken} 
        api={api} 
        setUser={setUser}
        setSucces={setSucces} 
        textContent={textContent}
        setTextContent={setTextContent} />}
        {token && <UpdatePage/>}
    </Context.Provider>
}

export  {App, Context};