import React, {useState} from "react";
import "./style.css";
import Logo from "../Logo";
import {BoxArrowInRight, BoxArrowLeft} from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg";


export default({products, update, openPopup, user, setToken}) => {
    const [text,changeText] =useState('Рога');
    const [cnt, setCnt] = useState(0);
    const handler = e=>{
        changeText(e.target.value);
        const result = products.filter(el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        console.log(result);
        setCnt(result.length);
        if(!text){
            update(products);
        }else{
            update(result)
        }
    }

    const logout = e =>{
        e.preventDefault();
        localStorage.removeItem("shop-user");
        setToken(false);
    }
    return <>
        <header>
            <Logo/>
            <input type="search" value={text} onChange={handler}/>
            <nav>
                {user &&< a href=""><FavIcon/></a>}
                {user && <a href=""><CartIcon/></a>}
                {user && <a href=""><ProfileIcon/></a>} 
                {user && <a href=""onClick={logout}><BoxArrowLeft/></a>}
                {!user && <a href=""onClick={e => {e.preventDefault(); 
                    openPopup(true)}}><BoxArrowInRight style={{fontSize:"1.6rem"}}/></a>}
            </nav>
        </header>
        <div>
            {text ? `По запросу ${text} наидено ${cnt} позиции` : `Пойск ...`}
        </div>
    </>
}