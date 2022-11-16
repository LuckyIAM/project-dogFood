import React, {useState} from "react";
import CardHome from "../CardHome";



export default ({goods,transform}) =>{
    

    const st={
        width: `${goods.length * 280}px`,
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
            {goods.map((good,i) => 
                    <CardHome  
                    detail={good.discount ? good.discount + "%": ""}
                    img={good.pictures}
                    price_old={good.discount ? good.price - (good.discount *(good.price / 100)): ""}
                    price_new={good.price}
                    description={good.name}
                    key={i}
                    />
            )}
        </div>
 
    )
}