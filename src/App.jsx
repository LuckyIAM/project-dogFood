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
import Api from "./Api.js"
import Local from "./Local"

// import {Col, Container, Row} from "react-bootstrap";


const App = () =>{
    const [goods,setGoods] = useState([]);
    const [data, setData] = useState([]);
    const [token, setToken] = useState(Local.getItem("shop-user"));
    const [user, setUser] = useState(Local.getItem("u", true))
    const [popupActive, changePopupActive]=useState(false)
    const [api, setApi] = useState(new Api(token));
    
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

    return <>
        <div className="wrapper"> 
    
            <Header products={data} update={setGoods} openPopup =
            {changePopupActive} user={!!token} setToken={setToken} setUser={setUser}/>
            {/*  */}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/catalog" element={<Catalog goods={goods}/>}/>
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