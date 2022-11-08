
import React, {useState} from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";


import data from "../assets/data.json"
export default ({goods}) => {

    return <div className="cards-container">
        {goods.map((d,i) =><Card 
        key = {i}
        img = {d.picture}
        text = {d.name}
        price = {d.price}
        />)}
    </div>
}
