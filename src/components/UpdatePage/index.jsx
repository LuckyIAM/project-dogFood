import React , {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import "./style.css"

export default () => {
        const {updPage, setUpdPage, widthScreen} = useContext(Context)
    const navigateToCatalog = useNavigate();

    const btnReload = {
        minWidth: "60vw", 
        margin: "10px"
    }
    
    return<div className={updPage ? "popup-reload active" : "popup-reload" }>
        <div className="popup2">
            <h2 className="qastion d-flex justify-content-center align-items-center">Остаться на странице?</h2>
            <div className={widthScreen >= 575 ? 
            "buttons-position d-flex justify-content-around align-items-center"
            :
            "buttons-position d-flex flex-column justify-content-center align-items-center"}>
                <button className="btn" style={btnReload} onClick={() => { 
                    window.location.reload();
                    setUpdPage(false);
                    }}>Да. Остаться</button>
                <button className="btn" style={btnReload} onClick={() => {
                    navigateToCatalog("/catalog");
                    setUpdPage(false);
                    }}>Перейти в Каталог</button>
            </div>
        </div>
    </div>
}