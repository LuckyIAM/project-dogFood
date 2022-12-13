import React from "react";
import { useNavigate } from "react-router-dom";


export default () => {
    const navigateToMain = useNavigate();
    const navigateToCatalog = useNavigate(); 
    const pageChoise = {
        display : "flex",
        justifyContent: "space-around",
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
    }
    const btnChoise = {
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
        backgroundColor: "var(--main-color)",
        border: "none",
        padding: "7px 30px",
        borderRadius: "10px"
    }

    return <div style={{ textAlign: "center"}}>
        <h1>Для отображение данных необходимо зайти</h1>
        <h2>Вы можете переходить в разделы:</h2>
        <div className="page-choise" style={pageChoise}>
            <button style={btnChoise} 
            onClick={() => {
                navigateToMain("/");
            }}>Главная</button>
            <button style={btnChoise}
            onClick={() => {
                navigateToCatalog("/catalog");
            }}>Каталог</button>
        </div>
    </div>
}