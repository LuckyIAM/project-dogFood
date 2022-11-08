import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Product from "./pages/Product";
import Catalog from "./pages/Catalog"
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "../assets/data.json"
// import {Col, Container, Row} from "react-bootstrap";


const App = () =>{
    const [goods,setGoods] = useState([]);
    return <>
        <Header products={goods} update={setGoods}/>
        <Catalog goods={goods}/>
        <Footer/>
    </>
}

export default App;