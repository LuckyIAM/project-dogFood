import React from "react";
import Card from "../components/Card";


export default ({favourites, api}) => {
    let wdth ;

    if (innerWidth < 340){
        wdth=1;
    }else if (innerWidth >= 500 && innerWidth < 780){
        wdth=2;
    }else if (innerWidth >= 780 && innerWidth < 1050){
        wdth=3;
    }else if (innerWidth >= 1050){
        wdth=4;
    }

    const  stCards = {
        padding: "30px 10px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: `repeat(${wdth}, 1fr)`,
        alignText: "center",
        gap: "20px"
    }

    return<>
        <div className="card__favourits" style={stCards}>
            {favourites.length>0 ?  
            favourites.map((fv,i) => <Card
                key={i}
                {...fv}
                api = {api}
                />):
            <h1 style={{gridColumnEnd: `soan ${wdth}`, textAlign: "center"}}>
                Для отображение данных необходимо зайти</h1>
        }
        </div>
    </>
}