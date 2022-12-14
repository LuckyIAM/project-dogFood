import React,{ useState, useEffect, useContext } from "react";
import { Context } from "../App";
import { useParams } from "react-router-dom";
import ProductCell from "../components/ProductCell";
import Product from "./Product";


export default() => {
    const {token, userId, user, product, setProduct} = useContext(Context);
    let params = useParams();
  
console.log("single", user === userId, user._id , userId  );
    return  <>{token ? <div style={{display: "grid", gap: "20px", gridTemplateColums: "repeat(2, 1fr)", width: "600px", padding: "10px 30px"}}>
            {product.name && <ProductCell value={product.name} setProduct={setProduct} id={params.id} type="name" tagMain="h1" tagInp="input"/>}
            {product.pictures && <ProductCell value={product.pictures} setProduct={setProduct} id={params.id} type="pictures" tagMain="img" tagInp="input"/>}
            {product.price>=0 && <ProductCell value={product.price} setProduct={setProduct} id={params.id} type="price" tagMain="div" tagInp="input"/>}
            {product.discount>=0 && <ProductCell value={product.discount} setProduct={setProduct} id={params.id} type="discount" tagMain="div" tagInp="input"/>}
            {product.wight && <ProductCell value={product.wight} setProduct={setProduct} id={params.id} type="wight" tagMain="div" tagInp="input"/>}
            {product.description && <ProductCell value={product.description} setProduct={setProduct} id={params.id} type="description" tagMain="p" tagInp="textarea"/>}
        </div> 
        :
        <Product/>}</>  
}