
import React, {useState, useEffect, useContext} from "react";
import {Context} from "../App";
import Card from "../components/Card";

export default ({api, setFav, api2}) => {
    const {searchText, products ,goods } = useContext(Context);
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
        console.log(quantityProd);

    const st = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
     const  stCardsContainer = {
        padding: "30px 10px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: `repeat(${quantityProd}, 1fr)`,
        alignText: "center",
        gap: "20px"
    }
    const stWarningLike = {
         width: "100vw"

    }
    
    return <div className="cards-container" style={st}>
        
        {goods.length > 0 ? 
        <div className="cards" style={stCardsContainer}>
            {goods.map((d,i) =><Card 
            key = {i}
            {...d}
            api={api}
            setFav={setFav}
            />)} 
        </div>
        :
        <div className="wrapper">
            <h2> Без регистрации, лайки не учитываются. Пожайлуста регистрируитесь!</h2>
            <div className="cards" style={stCardsContainer}>
                {products.map((d,i) => <Card 
                key = {i}
                {...d}
                api2={api2}/>)}
            </div>
        </div>

        }
    </div>
}
