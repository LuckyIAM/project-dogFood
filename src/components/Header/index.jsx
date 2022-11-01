import React, {useState} from "react";
import "./style.css";
import Logo from "../Logo";
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg";
import { set } from "core-js/core/dict";

export default({products}) => {
    const [text,changeText] =useState('Рога');
    const [cnt, setCnt] = useState(0);
    const handler = e=>{
        changeText(e.target.value);
        const result = products.filter(el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        console.log(result);
        setCnt(result.length)
    }
    return <>
        <header>
            <Logo/>
            <input type="search" value={text} onChange={handler}/>
            <nav>
                <a href=""><FavIcon/></a>
                <a href=""><CartIcon/></a>
                <a href=""><ProfileIcon/></a>
            </nav>
        </header>
        <div>
            {text ? `По запросу ${text} наидено ${cnt} позиции` : `Пойск ...`}
        </div>
    </>
}