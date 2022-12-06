
import React, {useState, useEffect, useContext} from "react";
import {Context} from "../App";
import Card from "../components/Card";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default ({setFav}) => {
    const {searchText, products ,goods, widthScreen} = useContext(Context);
    const paginate = usePagination(products, 4)

    
    const st = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
     const  stCardsContainer = {
        display: "grid",
        gridTemplateColumns: `repeat(${widthScreen}, 1fr)`,
        gap: "20px"
    }
    const stWarningLike = {
        gridColumnEnd: `span ${widthScreen}`,  
        width: "100vw"
    }
    
    return <><div className="cards-container" style={st}>
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
        <div>
            <button onClick={() => {paginate.prev()}}>&lt;</button>
            <button onClick={() => {paginate.next()}}>&gt;</button>
        </div>
        <Pagination hook={paginate}/>
        </>
}
