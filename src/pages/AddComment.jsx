
import React, { useState, useContext } from "react";
import { Context } from "../App";


export default() => {
    const {api, token} = useContext(Context);
    const [rating, setRating] = useState("5");
    const [comment, setComment] = useState("");

    const btnAddComment = {
        margin: "10px",
        padding: "10px",
        backgroundColor: "var(--main-color)",
        borderRadius: "20px"
    }
    const textareaSt ={
        width: innerWidth>500 ? "50vw" : "90vw"
    }
    const sendRequest = () => {
        if(token){
            api.addMessage(localStorage.getItem("id-params"),{"rating": rating, "text": comment})
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            setComment("")
        }
        
    }

    return<>
    <div className="comment-box p-3 ">
        <div className="row-align d-flex direction-row  align-items-center">
            <label className="fw-bolder fs-5 p-3" for="rating">Оцените продукт по шкале от 0-5</label>
            <select id="rating" value={rating} className="select-box" style={{height: "30px"}}
            onChange={e => {
                e.preventDefault();
                setRating(e.target.value)
            }}>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                <option>0</option>
            </select>
        </div>
        <div className="text_add d-flex flex-column p-3">
            <label className="fw-bolder fs-5"  rows="10" cols="40" for="message">Вводите текст отзыва</label>
            <textarea id="message" value={comment} style={textareaSt} onChange={ e => {
                e.preventDefault();
                setComment(e.target.value)
            }}/>
        </div>
        <button style={btnAddComment} type="submit" onClick={sendRequest}>Оставить отзыв</button>
        
     </div>
    </>
}