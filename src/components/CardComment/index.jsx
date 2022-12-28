import React,{useContext} from "react";
import Api from "../../Api";
import { Context } from "../../App";


export default ({author, created_at, rating, text, button_del, rewiev}) => {
    const {api, idParams} = useContext(Context);
    const dateSt = {
        fontSize: "12px",
        color: "#888",
        fontWeight: "700"
    }
    const cardFeedback = {
        boxShadow: "0px -2px 1px -2px #888, 0px -2px 1px -2px #888"
    }
    console.log(idParams, rewiev);
    const delComment = () => {
        console.log(rewiev, idParams, api);
        api.delMessage(idParams, rewiev)
            .then(res => res.json())
            .then(data => {
            })
        window.location.reload()
    }

    return <div className="card-feedback p-4" style={cardFeedback}>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="name-of-feedback dysplay-4 fw-bold ">{author}</div>
                <div className="date p-2" style={dateSt}>{created_at}</div>
            </div>
            <div className="rating">{rating}</div>
            <div className="text">{text}</div>
            <div className="del-button badge text-bg-danger" onClick={delComment}>{button_del}</div>
        </div>    
}