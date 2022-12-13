import React from "react";
import {XCircle, SignStopFill} from "react-bootstrap-icons"
import "./style.css";


export default ({textContent, succes, setSucces}) => {
    return<div className={succes ? "popup-container active":"popup-container"}>
        
        <div className="popup">
            <XCircle className="popup-close" onClick={e => {setSucces(false)}}/>
            <h2><span><SignStopFill/></span></h2>
            <h2>{textContent}</h2>
            
        </div>
    </div>
}