import React, {useState, useEffect} from "react";
import "./style.css"
import {Link} from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Local from "../../Local";

const Card =({name, price, pictures, _id, likes, api}) => {
    const[like, setLike] = useState(false);
    const [fav, setFav] = useState([]);
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    };
    useEffect(() =>{
        let id = Local.getItem("u", true)._id;
        if(likes.includes(id)){
            setLike(true)
        }
    }, [])
    const likeHandler = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setLike(!like)
        console.log(like);
        api.setLike(_id, !like)
            .then(rest =>rest.json())
            .then(data => {
                if(!like){
                    setFav(prev => {return [...prev, data]})
                }else{
                    setFav(prev => prev.filter(el => el._id !==_id))
                }
            })
                
        }
    return(
        <Link to={`/product/${_id}`}>
            <div className="card">
                <div className="card__img" style = {imgStyle}></div>
                <div className="card__price">{price}₽</div>
                <div className="card__text">{name}</div>
                <button className="btn">В корзину</button>
                <span className="card__like" 
                    onClick={likeHandler}
                >
                    {like ? <span style={{color: "red"}}><HeartFill/></span> : <Heart/>}
                </span>
            </div>
        </Link>
        
    )
}

export default Card;