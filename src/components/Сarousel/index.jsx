import React from "react";
import Card from "../Card";



export default ({goods, transform, setFav}) =>{
    const st={
        width: `${goods.length * 280}px`,
        height: "400px",
        display: "flex",
        gap: "30px",
        position: "relative",
        transition: "1s transform ease-out",
        transform: `translateX(${transform}px)`
    }
    
    const stDiscount = {
        display: "none"
    }


    return(
                  
        <div className="bestseller-box" style={st}>
            {goods.map((good,i) => 
                    <Card  
                    {...good}
                    discount={good.discount}
                    name={good.name.length > 23 ? good.name.slice(0,23) + "..." : good.name}
                    price_old={good.discount ? Math.floor(good.price - (good.discount *(good.price / 100))) : ""}
                    key={good._id}
                    setFav={setFav}
                    />
            )}
        </div>
 
    )
}