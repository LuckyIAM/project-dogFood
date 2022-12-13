import React, {useState, useEffect, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Context } from "../../App";
import "./style.css";
import Logo from "../Logo";
import {BoxArrowInRight, BoxArrowLeft, PlusCircle} from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg";



export default({ openPopup, user, setToken, setUser, like, basketLen}) => {
    // const nav = useNavigate();
    const {searchText, search, setProducts, goods} = useContext(Context)
    
    const handler = e=>{
        search(e.target.value);
        const result = goods.filter(el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        setProducts(result);
        
    }

    const logout = e =>{
        e.preventDefault();
        localStorage.removeItem("token-user");
        localStorage.removeItem("user");
        setToken("");
        setUser({});
        // nav("/")
    }
    return <>
        <header>
            <Logo/>
            <input type="search" value={searchText} onChange={handler}/>
            <nav>
                {user &&< Link to="/favourites"><FavIcon /><sup className="badge bg-success rounded-pill ">{like}</sup></Link>}
                {user && <Link to="add"><PlusCircle style={{fontSize: "23px"}}/></Link>}
                {user && <Link to="/basket"><CartIcon/>
                <sup className="badge bg-success rounded-pill ">{basketLen}</sup></Link>}
                {user && <Link to="/profile"><ProfileIcon/></Link>} 
                {user && <a href=""onClick={logout}><BoxArrowLeft/></a>}
                {!user && <a href=""
                onClick={e => {
                    e.preventDefault(); 
                    openPopup(true);
                    }}><BoxArrowInRight style={{fontSize:"1.6rem"}}/></a>}
            </nav>
        </header>
    </>
}