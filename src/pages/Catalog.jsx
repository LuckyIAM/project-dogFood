
import React, {useState} from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default ({goods}) => {

    return <div className="cards-container">
        {goods.length > 0 ? 
        goods.map((d,i) =><Card 
        key = {i}
        img = {d.pictures}
        text = {d.name}
        price = {d.price}
        id={d._id}
        />):
        <h1 style={{gridColumnEnd: "soan 4", textAlign: "center"}}>
            Для отображение данных необходимо зайти</h1>}
    </div>
}
