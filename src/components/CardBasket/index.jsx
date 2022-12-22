import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import {Context} from "../../App";
import ButtonQuantity from "../ButtonQuantity";
import "./style.css"

import Local from "../../Local";
import { localStore } from "../../Function";

/*  как передать count в баскет для каждого???*/

const CardBasket =({name, wight, price, price_old, pictures, _id, likes, discount}) => {
    const {token, basket, setBasket, idProduct, setIdProduct} = useContext(Context);
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(localStorage.getItem("basket-product") ? count : 1);
    useEffect(()=>{
       basket.map(el => {
        if(el._id === _id){
            setCount(el.count);
            return count;
        }
       }) 
    }, [count])
    const st = {
        position: "absolute",
        right: "5px",
        top: "0px",
        fontSize: "30px",
        fontWeight: 700,
        margin: "2px"
    }
    const cardStyle = {
        background: "no-repeat center/contain",
        backgroundImage: `url(${pictures})`,
        width: "220px",
        height: "200px",
        marginTop: "30px"
    }
    const stId ={
        display: "none"
    }
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    }

    useEffect(() =>{
        if(token){
            let id = Local.getItem("user", true)._id;
            if(likes.includes(id)){
                setLike(true)
            }   
        }
    }, [token])
    
    const delToBasket = (e) => {  
        e.stopPropagation(); 
        e.preventDefault();
        basket.forEach(element => { 
            if(element._id === _id){
                let index = basket.indexOf(element);
                console.log("index", index);
                basket.splice(index, 1);
                setBasket(() => {return [...basket]})
                localStore("basket-product", basket)
                idProduct.splice(index,1);
                setIdProduct(() => {return [...idProduct]});
                localStore("id-product", idProduct)
                console.log("basket del", basket, "\n idProduct del", idProduct);
          }  
          return basket;
        })        
    }
    return(
        <Table>
            <tbody>
            <tr>
                <td>
                <Link to={`/product/${_id}`}>
                        {innerWidth >= 780 ?
                        <div className="card-basket">
                            <div className="card__img p" style = {cardStyle}/>
                            <div className="col-direction p">
                                <div className="description">{name}</div>
                                <div className="wight">{wight}</div>
                            </div>
                            <ButtonQuantity count={count} setCount={setCount} _id={_id}/>               
                            <div className="col-direction col-direction-width">
                                <div className="old_price" style={{color: "red"}}>
                                    <small className={discount ? "text-danger": "opacity-0 position-absolute top--20" }>
                                        <del>{price_old}₽</del>
                                    </small> 
                                </div>
                                <div>{price}₽</div>
                            </div>
                            <button className="del-btn bg-transparent border-0" type="submit" onClick={delToBasket}>
                                <Trash style={{fontSize: "30px", margin: "10px 0px"}} />
                                </button>
                        </div>
                        :
                        <div className="card-basket-mini">
                            <div className="card__img p" style = {cardStyle}></div>
                            <div className="col-direction p">
                                <div className="description">{name}</div>
                                <div className="wight">{wight}</div>
                            </div>
                            <ButtonQuantity count={count} setCount={setCount} _id={_id}/>               
                            <div className="col-direction p">
                                <div className="old_price" style={{color: "red"}}>
                                    <small className={discount ? "text-danger": "opacity-0 position-absolute top--20" }>
                                        <del>{price_old}₽</del>
                                    </small> 
                                </div>
                            </div>
                            <div className="row-direction d-flex justify-content-between align-items-center">
                                <div>{price}₽</div>
                                <button className="del-btn bg-transparent border-0" type="submit" onClick={delToBasket}><Trash style={{fontSize: "30px", margin: "10px 0px"}} /></button>
                            </div>
                        </div>
                        }
                    </Link>
                </td>
            </tr>
            </tbody>
        </Table>
        
        
    )
}

export default CardBasket;