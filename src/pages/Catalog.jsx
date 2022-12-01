
import React, {useState, useEffect, useContext} from "react";
import {Context} from "../App";
import Card from "../components/Card";

export default ({setFav}) => {
    const {searchText, products ,goods} = useContext(Context);
    const [quantityProd, setQuantity] = useState(0);

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
        console.log(quantityProd);

    const st = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
     const  stCardsContainer = {
        display: "grid",
        gridTemplateColumns: `repeat(${quantityProd}, 1fr)`,
        gap: "20px"
    }
    const stWarningLike = {
        gridColumnEnd: `span ${quantityProd}`,  
        width: "100vw"
    }
    
    return <div className="cards-container" style={st}>
            <div className="cards" style={stCardsContainer}>
                { !searchText && goods.length > 0 && goods.map((d,i) =><Card 
                key = {i}
                {...d}
                setFav={setFav}
                />)} 
            </div>
            {searchText && <div className="show-length" style={stWarningLike}>
                {products.length ?
                <>По запросу <b>{searchText}</b> наидено {products.length} позиции</>
                : <>По запросу <b>{searchText}</b> ничего не найдено</>}
            </div>}
            <div className="cards" style={stCardsContainer}>
                {searchText && products.map((d,i) => <Card 
                key = {i}
                {...d}
                setFav={setFav}/>)}
            </div>
            
        </div>
}
