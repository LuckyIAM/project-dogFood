
import React, {useState} from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default ({goods}) => {

    return <div className="cards-container">
        {goods.map((d,i) =><Card 
        key = {i}
        img = {d.pictures}
        text = {d.name}
        price = {d.price}
        />)}
    </div>
}
