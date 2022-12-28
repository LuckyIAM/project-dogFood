import React, {useState, useEffect, useContext} from "react";
import {Context} from "../../App";
import "./style.css"
import {Link, useParams} from "react-router-dom";
import { Heart, HeartFill, PersonX } from "react-bootstrap-icons";
import Local from "../../Local";
import {addToBasket} from "../../Function";




const Card =({name, price, price_old, pictures, _id, likes, discount, setFav}) => {
    const [like, setLike] = useState(false);
    let params = useParams()
    const {api, token,  goods, basket, setBasket, idProduct, setIdProduct} = useContext(Context);

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

    const likeHandler = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setLike(!like)
        api.setLikes(_id, !like)
            .then(rest =>rest.json())
            .then(data => {
                if(!like){
                    setFav(prev => {return [...prev, data]})
                }else{
                    setFav(prev => {return prev.filter(el => el._id !==_id)})
                }
            })     
    }
    
    
    return(
        <Link to={`/product/${_id}`}>
            <div className="card">
                <div className="addlike"  style={st} onClick={likeHandler}>
                    {like && token ? <span style={{color: "red"}}><HeartFill/></span> : <Heart/>}
                    {!token && <span style={{color: "#888"}}><PersonX/></span>}
                </div>
                <div className="show-detail">
                    <span className={ discount ? "badge bg-danger rounded-pill" : " opacity-0 "}>
                    {discount}%</span></div>
                <div className="card__img" style = {cardStyle}></div>
                <div className="old_price">
                    <small className={ discount ? "badge bg-danger rounded-pill" : " opacity-0 bg-transparent"}>
                        <del>{price_old}₽</del>
                    </small> 
                </div>
                <div className={ discount ? "text-success" : "text-dark"}>{price} ₽</div>
                <div className="description">{name}</div>
                <div className="likes" style={stId}>{likes}</div>
                <div className="id" style={stId}>{_id}</div>
                <button className="btn" 
                onClick={(e) => {
                    e.stopPropagation();    
                    e.preventDefault();
                    addToBasket(goods, _id, idProduct, setIdProduct, basket, setBasket)
                    }
                }>
                    {idProduct.includes(_id)?
                      "Уже в корзине"
                     :
                      "В корзину"}
                </button>
            </div>
        </Link>
        
    )
}

export default Card;