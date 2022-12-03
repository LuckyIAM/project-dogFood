import React,{useState, useEffect, useContext} from "react";
import { Context } from "../App";
import {useParams} from "react-router-dom";
import { XCircle, CheckCircle, PencilSquare} from "react-bootstrap-icons";

export default() => {
    const {api} = useContext(Context);
    const[product, setProduct]= useState({});
    const [nameFlag,setNameFlag] = useState(false);
    const [name, setName] = useState(product.name || "");
    // const [pictures, setPictures] = use(product.pictures || "");
    // const [price, setPrice] = useState(product.price || "");
    // const [discount, setDiscount] = useState(product.discount || "");
    // const [wight, setWight] = useState(product.wight || "");
    // const [description, setDescription] = useState(product.description || "");
    const [cnt, setCnt] = useState(0);
    let params = useParams();
    useEffect(()=>{
        api.getProduct(params.id)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setProduct(data);
            setName(data.name);
            setPictures(data.pictures);
            setPrice(data.price);
            setDiscount(data.discount);
            setWight(data.setWight);
            setDescription(data.discount);

        })
    }, [])

    const changeName = (e) => {
        e.preventDefault();
        api.updProduct(params.id, {name: name})
            .then(rest => rest.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                setName(data.name);
                setNameFlag(false)
            })
    }

    return <>
    <div className="product__row">
    {nameFlag ?
    <>
        <input className="product_inp" value={name} onChange={e => setName(e.target.value)}/>
        <input className="product_inp" value={pictures} onChange={e => setPictures(e.target.value)}/>
        <input className="product_inp" value={price} onChange={e => setPrice(e.target.value)}/>
        <input className="product_inp" value={discount} onChange={e => setDiscount(e.target.value)}/>
        <input className="product_inp" value={wight} onChange={e => setWight(e.target.value)}/>
        <input className="product_inp" value={description} onChange={e => setDescription(e.target.value)}/>
        <a href="" onClick={changeName}><CheckCircle/></a>
        <a href="" className="product__btn" 
        onClick={ e => {
            e.preventDefault();
            setNameFlag(false);
            setName(product.name)
        }}><XCircle/></a>
    </>
    :
    <>
    <h1>{product.name}</h1>
    <a href="" className="product__btn" 
    onClick={(e)=> {
        e.preventDefault(); 
        setNameFlag(true)
        }}>
            <PencilSquare/></a>
    </>
    }
    </div>
    </>
}