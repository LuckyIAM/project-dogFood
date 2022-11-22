import React, {useState, useEffect} from "react";
import "./style.css"
import {Link} from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Local from "../../Local";


const Card =({name, price, price_old, pictures, _id, likes, discount, api, setFav}) => {
    const[like, setLike] = useState(false);

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
    };
    useEffect(() =>{
        let id = Local.getItem("u", true)._id;
        console.log(likes);
        if(likes.includes(id)){
            setLike(true)
        }
    }, [])
    const likeHandler = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setLike(!like)
        console.log(like);
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
                    {like ? <span style={{color: "red"}}><HeartFill/></span> : <Heart/>}
                </div>
                <div className="show-detail"><span className={ discount ? "badge bg-danger rounded-pill" : "badge bg-transparent"}>
                    {discount}</span></div>
                <div className="card__img" style = {cardStyle}></div>
                <div className="old_price" style={{color: "red"}}>
                    <small><del>{price_old}</del></small> 
                </div>
                <div className="new_price">{price} ₽</div>
                <div className="description">{name}</div>
                <div className="likes" style={stId}>{likes}</div>
                <div className="id" style={stId}>{_id}</div>
                <button className="btn">В корзину</button>
            </div>
        </Link>
        
    )
}

export default Card;