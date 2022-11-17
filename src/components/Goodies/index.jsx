import React, {useState} from "react";
import CardHome from "../CardHome";



export default ({bests,transform}) =>{
    

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
            {bests.map((good,i) => 
                    <CardHome  
                    detail={""}
                    img={good.pictures}
                    price_new={good.price}
                    name={good.name}
                    key={i}
                    />
            )}
        </div>
 
    )
}