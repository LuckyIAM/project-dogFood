import React,{ useState, useContext} from "react";
import { Context } from "../../App";
import { ButtonGroup, Button } from "react-bootstrap"

export default ({count, setCount, _id}) => {
    const {basket, setBasket} = useContext(Context);
    const addQuantity = e => {
        e.stopPropagation();
        e.preventDefault();
        setCount(count + 1);
        setBasket(() =>{
            basket.map(el => {
                console.log("id", _id);
                if(el._id === _id){
                    el.count = count + 1; 
                    return el;
                }
                console.log("element", el, "count",count, "id", _id);
            })
            localStorage.removeItem("basket-product");
            localStorage.setItem("basket-product", JSON.stringify(basket)); 
            console.log("basket in ButtonQuantity", basket);
            return basket;
        }) 
        
    }

    const subtractQuantity = e => {
        e.stopPropagation();
        e.preventDefault();
        if(count > 1){
            setCount(count - 1);
            setBasket(() =>{
                basket.map(el => {
                    console.log("id", _id);
                    if(el._id === _id){
                        el.count = count - 1; 
                        return el;
                    }
                    console.log("element", el, "count",count, "id", _id);
                })
                localStorage.removeItem("basket-product");
                localStorage.setItem("basket-product", JSON.stringify(basket)); 
                console.log("basket in ButtonQuantity", basket);
                return basket;
            })
            
        }
        return count;
    }

    return<ButtonGroup style={{margin: "10px 20px"}}>
    <Button onClick={subtractQuantity}>-</Button>
    <Button>{count}</Button>
    <Button onClick={addQuantity}>+</Button>
</ButtonGroup> 
}