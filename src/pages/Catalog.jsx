
import React, { useContext } from "react";
import {Context} from "../App";
import Card from "../components/Card";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default ({setFav}) => {
    const {searchText, products , widthScreen} = useContext(Context);
    const paginate = usePagination(products, 8)

    
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
                { !searchText && products.length > 0 && paginate.pageData().map((d,i) =><Card 
                key = {i}
                {...d}
                price_old={d.price}
                price={Math.round(d.price / 100 * (100 - d.discount))}
                setFav={setFav}
                />)} 
            </div>
            {searchText && <div className="show-length" style={stWarningLike}>
                {products.length ?
                <>По запросу <b>{searchText}</b> наидено {products.length} позиции</>
                : <>По запросу <b>{searchText}</b> ничего не найдено</>}
            </div>}
            <div className="cards" style={stCardsContainer}>
                {searchText && paginate.pageData().map((d,i) => <Card 
                key = {i}
                price_old={d.price}
                price={Math.round(d.price / 100 * (100 - d.discount))}
                {...d}
                setFav={setFav}/>)}
            </div>
            
        </div>
        <Pagination hook={paginate} />
        </>
}
