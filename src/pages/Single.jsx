import React,{useState, useEffect, useContext} from "react";
import { Context } from "../App";
import {useParams} from "react-router-dom";

import ProductCell from "../components/ProductCell";

export default() => {
    const {api} = useContext(Context);
    const[product, setProduct]= useState({});
    
    let params = useParams();
    useEffect(()=>{
        api.getProduct(params.id)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setProduct(data)
            setName(data.name)
        })
    }, [])

    
    return <div style={{display: "grid", gap: "20px"}}>
        {product.name && <ProductCell value={product.name} setProduct={setProduct} id={params.id} type="name" tagMain="h1" tagInp="input"/>}
        {product.pictures && <ProductCell value={product.pictures} setProduct={setProduct} id={params.id} type="img" tagMain="h1" tagInp="input"/>}
        {product.id && <ProductCell value={product.id} setProduct={setProduct} id={params.id} type="id" tagMain="div" tagInp="input"/>}
        {product.price && <ProductCell value={product.price} setProduct={setProduct} id={params.id} type="price" tagMain="div" tagInp="input"/>}
        {product.discount && <ProductCell value={product.discount} setProduct={setProduct} id={params.id} type="discount" tagMain="div" tagInp="input"/>}
        {product.wight && <ProductCell value={product.wight} setProduct={setProduct} id={params.id} type="wight" tagMain="div" tagInp="input"/>}
        {product.description && <ProductCell value={product.description} setProduct={setProduct} id={params.id} type="description" tagMain="p" tagInp="textarea"/>}
        
    </div>
}