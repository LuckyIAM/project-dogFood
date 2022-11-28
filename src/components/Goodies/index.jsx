import React, {useState} from "react";
import Card from "../Card";



export default ({bests,transform, api2, setFav}) =>{
    

    const st={
        width: `${bests.length * 280}px`,
        height: "400px",
        display: "flex",
        gap: "30px",
        position: "relative",
        transition: "2s transform ease-out",
        transform: `translateX(${transform}px)`
    }
    console.log(st.width);
    

    return(
                  
        <div className="bestseller-box" style={st}>
            {bests.map((good) => 
                    <Card  
                    {...good}
                    discount={good.discount}
                    name={good.name.length > 23 ? good.name.slice(0,23) + "..." : good.name}
                    price_old={good.discount ? Math.floor(good.price - (good.discount *(good.price / 100))) : ""}
                    key={good._id}
                    api2={api2}
                    setFav={setFav}
                    />
            )}
        </div>
 
    )
}