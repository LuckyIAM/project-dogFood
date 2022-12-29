import React from "react";
import {Link} from "react-router-dom"
import { House, Stack } from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "../Header/img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "../Header/img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "../Header/img/ic-profile.svg";
import "./style.css";


export default({user, like, basketLen})=>{
    const badgeSt = {
        height: "20px", 
        position: "relative",
        top: "0px",
        left: "-22px"
    }
    return(
        
        <div className="wrapper_footer-mini">
            <div className="contact" >
                <h2>Мы всегда на связи</h2>
                <h3>8 (999) 00-00-00</h3>
                <a href="">godfood.ru@gmail.com</a>
                <div className="icon_contact">
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-viber"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-vk"></i>
                    
                </div>
                <span style={{marginBottom: "60px"}}><br/>© "Интернет магазин натуральных лакомств для собак HotDog.ru"</span>
            </div>
            <nav className="footer-nav">
                <Link to="/project-dogFood/" className="colum-direction">
                    <House/>
                    <span>Гавная</span>
                </Link>
                <Link to="/catalog" className="colum-direction">
                    <Stack style={{transform: "rotate(90deg)"}}/>
                    <span>Каталог</span>
                </Link>
                {user && <div className="row-direction" >
                <Link to="/basket" className="colum-direction">
                    <CartIcon/>
                    <span>Корзина</span>
                </Link>
                <sup className="badge bg-success rounded-pill" style={badgeSt}>{basketLen}</sup>
                </div>}
                {user && <div className="row-direction" style={{position: "relative", top: 0, right: "3vh"}}>
                <Link to="/favourites" className="colum-direction">
                    <FavIcon />
                    <span>Избранное</span>
                </Link>
                <sup className="badge bg-success rounded-pill " style={badgeSt}>{like}</sup>
                </div>}
                {user && <Link to="/profile" className="colum-direction clouse">
                    <ProfileIcon/>
                    <span>Профиль</span>
                </Link>}
                
            </nav>
            
            
        </div>
        
    )
}