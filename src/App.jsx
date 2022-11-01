
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

import data from "./assets/data.json"
class App extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <Header/>
                <div className="cards-container">
                    {/* <Card/> */}
                    {data.map((d,i) =><Card 
                    key = {i}
                    img = {d.picture}
                    text = {d.name}
                    price = {d.price}
                    />)}
                </div>
            </div>
        )
    }
}
export default App;