import React from "react";
import Logo from "../Logo";
import "./style.css";

export default()=>{
    return(
        <div className="wrapper_footer">
            <div className="logo">
                <Logo/>
            </div>
            <div className="menu">
                <a href="">Каталог</a>
                <a href="">Акции</a>
                <a href="">Новости</a>
                <a href="">Отзывы</a>
            </div>
            <div className="more_menu">
                <a href="">Оплата и Доставка</a>
                <a href="">Часто спрашивают</a>
                <a href="">Обратная связь</a>
                <a href="">Контакты</a>
            </div>
            <div className="contact">
                <h2>Мы на связи</h2>
                <h3>8 (999) 00-00-00</h3>
                <a href="">godfood.ru@gmail.com</a>
                <div className="icon_contact">
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-viber"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-vk"></i>

                </div>
            </div>
        </div>
    )
}