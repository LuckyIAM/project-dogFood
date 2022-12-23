import React, { useContext } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";


export default () => {
    const {widthScreen} = useContext(Context);
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
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
    }
    const btnChoise = {
        width: "70vw",
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
        backgroundColor: "var(--main-color)",
        border: "none",
        padding: "7px 30px",
        borderRadius: "20px",
        margin: "15px"
    }

    return <div style={{ textAlign: "center"}}>
        <h1>
            Для отображение данных необходимо регистрация
        </h1>
        <h2>Без регистраций можете переходить в разделах:</h2>
        <div className="page-choise" style= {widthScreen > 575 ? pageChoise1 : pageChoise2}>
            <button className="btn" 
            style={btnChoise} 
            onClick={() => {
                navigateToMain("/");
            }}>Главная</button>
            <button className="btn" 
            style={btnChoise}
            onClick={() => {
                navigateToCatalog("/catalog");
            }}>Каталог</button>
        </div>
    </div>
}