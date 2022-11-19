
import React, {useState} from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default ({goods, q}) => {
     const [quantityProd, setQuantity] = useState(0)

    // const quantity = ()=>{
    //     if (screen.width < 500){
    //         setQuantity(1);
    //     }else if (screen.width >= 540 && screen.width < 850){
    //         setQuantity(2);
    //     }else if (screen.width >= 850 && screen.width < 1200){
    //         setQuantity(3);
    //     }else if (screen.width >= 1200){
    //         setQuantity(4);
    //     }
    // }    
     
     console.log(screen.width, quantityProd);
     const  stCardsContainer = {
        width: "1200px",
        margin: "auto",
        padding: "30px 0",
        display: "grid",
        gridTemplateColumns: `repeat(4, 1fr)`,
        gap: "30px"
    }
    return <div className="cards-container" style={stCardsContainer}>
        {
        goods.length > 0 ? 
        goods.map((d,i) =><Card 
        key = {i}
        img = {d.pictures}
        text = {d.name}
        price = {d.price}
        id={d._id}
        />):
        <h1 style={{gridColumnEnd: `soan 4`, textAlign: "center"}}>
            Для отображение данных необходимо зайти</h1>}
    </div>
}
