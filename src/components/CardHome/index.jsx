import React, {useState, useEffect} from "react";
import "./style.css";
import { Heart, HeartFill} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import Local from "../../Local";
import Api from "../../Api";

const CardHome = ({discount, pictures, price_old, price, name, _id, likes, api}) =>{
    
    const [like, setLike] = useState(false);
    const [fav, setFav] = useState([]);
    
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

   

    useEffect(() =>{
        let idUser = Local.getItem("u", true)._id;
        console.log("likes", likes);
        if([likes].includes(idUser)){
            setLike(true)
        }
    }, [])
    
    
    const addlike = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setLike(!like)
        console.log(_id);
        api.setLikes(_id, !like)
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
                <div className="addlike"  style={st} onClick={addlike}>
                    {like ? <span style={{color: "red"}}><HeartFill/></span> : <Heart/>}
                </div>
                <div className="show-detail"><span className="badge bg-danger rounded-pill">{discount}</span></div>
                <div className="card_img" style={cardStyle}></div>
                <div className="old_price" style={{color: "red"}}><small><del>{price_old}</del></small> </div>
                <div className="new_price">{price} ₽</div>
                <div className="description">{name}</div>
                <div className="likes" style={stId}>{likes}</div>
                <div className="id" style={stId}>{_id}</div>
                <button className="btn">В корзину</button>
            </div>
        </Link>
    )
}
export default CardHome;
