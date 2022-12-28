import React from "react";
import { useNavigate } from "react-router-dom";


export default () => {
    const navigateToMain = useNavigate();
    const navigateToCatalog = useNavigate(); 
    const pageChoise1 = {
        display : "flex",
        justifyContent: "space-around",
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
    }
    const pageChoise2 = {
        display : "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
    }
    const btnChoise = {
        width: window.innerWidth > 575 ? "250px" : "80vw",
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
        backgroundColor: "var(--main-color)",
        border: "none",
        padding: "4px 30px",
        borderRadius: "20px",
        margin: "15px"
    }
    console.log(window.innerWidth);
    return <div style={{ textAlign: "center", height: "70vh"}}>
        <h1>
            Для отображение данных необходимо регистрация
        </h1>
        <h2>Без регистраций можете переходить в разделах:</h2>
        <div className="page-choise" style= {window.innerWidth > 575 ? pageChoise1 : pageChoise2}>
            <button 
            style={btnChoise} 
            onClick={() => {
                navigateToMain("/");
            }}>Главная</button>
            <button 
            style={btnChoise}
            onClick={() => {
                navigateToCatalog("/catalog");
            }}>Каталог</button>
        </div>
    </div>
}