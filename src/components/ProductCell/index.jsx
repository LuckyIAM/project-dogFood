import React,{useState, useEffect, useContext} from "react";
import { Context } from "../../App";
import { XCircle, CheckCircle, PencilSquare} from "react-bootstrap-icons"

export default({product, setProduct, id, value}) => {
    const {api} = useContext(Context);
    const [flag,setFlag] = useState(false)
    const [content, setContent] = useState(value);
 

    const change = (e) => {
        e.preventDefault();
        api.updProduct(id, {name: content})
            .then(rest => rest.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                setContent(data.name);
                setFlag(false)
            })
    }

    const cancel = (e) => {
        e.preventDefault();
        setFlag(false);
        setContent(value);
    }
    return <>
    <div className="product__row">
    {nameFlag ?
    <>
        <input className="product_inp" value={content} onChange={e => setContent(e.target.value)}/>
        <a href="" onClick={change}><CheckCircle/></a>
        <a href="" className="product__btn" 
        onClick={ cancel}><XCircle/></a>
    </>
    :
    <>
    <h1>{value}</h1>
    <a href="" className="product__btn" 
    onClick={(e)=> {
        e.preventDefault(); 
        setFlag(true)
        }}>
            <PencilSquare/></a>
    </>
    }
    </div>
    </>
}