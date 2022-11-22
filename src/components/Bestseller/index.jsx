import React from "react";
import CardHome from "../CardHome";



export default ({goods,transform, api, setFav}) =>{

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
                    discount={good.discount ? good.discount + "%": ""}
                    pictures={good.pictures}
                    price_old={good.discount ? Math.floor(good.price - (good.discount *(good.price / 100))) : ""}
                    price={good.price}
                    name={good.name}
                    likes ={good.likes}
                    _id={good._id}
                    key={i}
                    api={api}
                    setFav={setFav}
                    />
            )}
        </div>
 
    )
}