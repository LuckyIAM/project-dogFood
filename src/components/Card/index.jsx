import React from "react";
import "./style.css"
import {Link} from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Card =({name, price, pictures, _id}) => {
    const[like, setLike] = useState(false)
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    };
    return(
        <Link to={`/product/${_id}`}>
            <div className="card">
                <div className="card__img" style = {imgStyle}></div>
                <div className="card__price">{price}₽</div>
                <div className="card__text">{name}</div>
                <button className="btn">В корзину</button>
                <span className="card__like">
                    {like ? <HeartFill/> : <Heart/>}
                </span>
            </div>
        </Link>
        
    )
}

export default Card;