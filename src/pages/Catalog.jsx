
import React, {useState, useEffect} from "react";
import Card from "../components/Card";

export default ({goods, api, setFav}) => {
     const [quantityProd, setQuantity] = useState(0)

    useEffect(()=>{
        if (innerWidth < 340){
            setQuantity(1);
        }else if (innerWidth >= 500 && innerWidth < 780){
            setQuantity(2);
        }else if (innerWidth >= 780 && innerWidth < 1050){
            setQuantity(3);
        }else if (innerWidth >= 1050){
            setQuantity(4);
        }
    }, [])   
        
     const  stCardsContainer = {
        padding: "30px 10px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: `repeat(${quantityProd}, 1fr)`,
        alignText: "center",
        gap: "20px"
    }
    return <div className="cards-container" style={stCardsContainer}>
        {
        goods.length > 0 ? 
        goods.map((d,i) =><Card 
        key = {i}
        {...d}
        api={api}
        setFav={setFav}
        />):
        <h1 style={{gridColumnEnd: `soan ${quantityProd}`, textAlign: "center"}}>
            Для отображение данных необходимо зайти</h1>}
    </div>
}
