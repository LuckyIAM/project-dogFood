import React from "react";
import "./style.css"
import {Link} from "react-router-dom";

const Card =({text, price, img, id}) => {
    const imgStyle = {
        backgroundImage: `url(${img})`
    };
    return(
        <Link to={`/product/${id}`}>
            <div className="card">
                <div className="card__img" style = {imgStyle}></div>
                <div className="card__price">{price}₽</div>
                <div className="card__text">{text}</div>
                <button className="btn">В корзину</button>
            </div>
        </Link>
        
    )
}

export default Card;