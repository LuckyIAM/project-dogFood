import React from "react";
import "./style.css";
import logo from "./img/logo.svg";
import {Link} from "react-router-dom";

export default() =>{
    return <Link className="logo" to="/">
        <img src={logo} alt="Dog Food"/>
        {/* <span>DogFood</span> */}
    </Link>
}
