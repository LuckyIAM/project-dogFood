import React from "react";
import {Link} from "react-router-dom"
import { House, Stack } from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "../Header/img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "../Header/img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "../Header/img/ic-profile.svg";
import Logo from "../Logo";
import "./style.css";

export default({user, like})=>{
    return(
        
        <div className="wrapper_footer">
            <div className="contact">
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
                <span><br/>© "Интернет магазин натуральных лакомств для собак HotDog.ru"</span>
                <nav className="footer-nav">
                    <Link to="/" className="colum-direction">
                        <House/>
                        <span>Гавная</span>
                    </Link>
                    <Link to="/catalog" className="colum-direction">
                        <Stack style={{transform: "rotate(90deg)"}}/>
                        <span>Каталог</span>
                    </Link>
                    {user && <Link to="/deleted" className="colum-direction">
                        <CartIcon/>
                        <span>Корзина</span>
                    </Link>}
                    {user && <Link to="/favourites" className="colum-direction">
                        <FavIcon />
                        <span>Избранное</span>
                    </Link>}
                    <small className="tiket">{like}</small>
                    {user && <Link to="/profile" className="colum-direction clouse">
                        <ProfileIcon/>
                        <span>Профиль</span>
                    </Link>}
                    
                </nav>
            </div>
            
        </div>
        
    )
}