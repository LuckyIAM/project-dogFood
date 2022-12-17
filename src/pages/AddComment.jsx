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


export default() => {
    const {api} = useContext(Context);
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");



    return<>
     <div className="comment-box d-flex flex-column">
        <label for="rating">Оцените продукт по шкале от 0-5</label>
        <select id="rating" value={rating} 
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
        <label for="message">Вводите текст отзыва</label>
        <textarea value={comment} onChange={ e => {
            e.preventDefault();
            setComment(e.target.value)
        }}></textarea>
        <button type="submit">Оставить отзыв</button>
     </div>
    </>
}