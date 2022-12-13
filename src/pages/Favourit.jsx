import React, {useState, useEffect, useContext} from "react";
import { Context } from "../App"; 
import Alternative from "../components/Alternative";
import Card from "../components/Card";




export default ({goods, setFav,api}) => {
    const {widthScreen, token} = useContext(Context);

    const  stCards = {
        padding: "30px 10px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: `repeat(${widthScreen}, 1fr)`,
        alignText: "center",
        gap: "20px"
    }
    

    return<>
        <div className="card__favourits" style={stCards}>
            {goods.length>0 && token ?  
                goods.map((good) => <Card
                    {...good}
                    discount={good.discount}
                    name={good.name.length > 23 ? good.name.slice(0,23) + "..." : good.name}
                    price_old={good.discount ? Math.floor(good.price - (good.discount *(good.price / 100))) : ""}
                    key={good._id}
                    api={api}
                    setFav={setFav}
                />):      
                <Alternative/>
        }
        </div>
    </>
}