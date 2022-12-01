import React, {useState, useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../../App";
import "./style.css";
import Logo from "../Logo";
import {BoxArrowInRight, BoxArrowLeft, PlusCircle} from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg";
import Card from "../Card";



export default({ openPopup, user, setToken, setUser, like}) => {
    const {searchText, search, setProducts, goods} = useContext(Context)
    const handler = e=>{
        search(e.target.value);
        const result = goods.filter(el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        console.log(result);
        setProducts(result);
        
    }

    const logout = e =>{
        e.preventDefault();
        localStorage.removeItem("shop-user");
        localStorage.removeItem("u");
        setToken("");
        setUser({});
    }
    return <>
        <header>
            <Logo/>
            <input type="search" value={searchText} onChange={handler}/>
            <nav>
                {user &&< Link to="/favourites"><FavIcon /><span>{like}</span></Link>}
                {user && <Link to="add"><PlusCircle style={{fontSize: "23px"}}/></Link>}
                {user && <Link to="/deleted"><CartIcon/></Link>}
                {user && <Link to="/profile"><ProfileIcon/></Link>} 
                {user && <a href=""onClick={logout}><BoxArrowLeft/></a>}
                {!user && <a href=""onClick={e => {e.preventDefault(); 
                    openPopup(true)}}><BoxArrowInRight style={{fontSize:"1.6rem"}}/></a>}
            </nav>
        </header>
    </>
}