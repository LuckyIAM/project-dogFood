import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Product from "./pages/Product";
import Catalog from "./pages/Catalog"
import Header from "./components/Header";
import Footer from "./components/Footer";

// import {Col, Container, Row} from "react-bootstrap";


const App = () =>{
    const [goods,setGoods] = useState(data);
    return <>
        <Header products={data} update={setGoods}/>
        <Catalog goods={goods}/>
        <Footer/>
    </>
}

export default App;