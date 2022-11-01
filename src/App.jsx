
import React, {useState} from "react";
import Card from "./components/Card";
import Header from "./components/Header";

import data from "./assets/data.json"
const App = () => {
    const [goods,setGoods] = useState(data);

    return(
        <div className="wrapper">
            <Header products={data} update={setGoods}/>
            <div className="cards-container">
                {/* <Card/> */}
                {goods.map((d,i) =><Card 
                key = {i}
                img = {d.picture}
                text = {d.name}
                price = {d.price}
                />)}
            </div>
        </div>
    )
}
export default App;