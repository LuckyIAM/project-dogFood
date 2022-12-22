// {
//     "rating": 3,
//     "_id": "6395bdd259b98b038f779e7d",
//     "text": "Ещё один тест.",
//     "author": {
//         "name": "Максим",
//         "about": "Ментор",
//         "avatar": "https://react-learning.ru/image-compressed/default-image.jpg",
//         "_id": "622f9992ae5c40c10c11dfe4",
//         "email": "admin@react-learning.ru",
//         "__v": 0
//     },
//     "product": "622c779c77d63f6e70967d1c",
//     "created_at": "2022-12-11T11:24:02.392Z",
//     "updated_at": "2022-12-11T11:24:02.392Z",
//     "__v": 0
// },
import React, {useState, useContext, useEffect} from "react";
import { Context } from "../App";
import Api from "../Api";


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