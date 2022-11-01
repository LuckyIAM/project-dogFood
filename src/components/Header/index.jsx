import React from "react";
import "./style.css";
import Logo from "../Logo";


export default() => {
    return <header>
        <div className="logo"/>
        <input type="search"/>
        <nav>
            <a href="">Favorite</a>
            <a href="">Cart</a>
            <a href="">Profile</a>
        </nav>
    </header>
}