import React, {useState} from "react";
import "./style.css";


const BlogCard = ({img, data_publication, title}) =>{
    const[data, setData] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token"));
    let [cnt, setCnt] = useState(0);
     

    const cardStyle = {backgroundImage: `url(${img})`}
    

    return<>
    <div className="card">
        <div className="card_img" style={cardStyle}></div>
        <div className="data_publication"><small>{data_publication}</small></div>
        <div className="title">{title}</div>
    </div>
    </> 
}
export default BlogCard;