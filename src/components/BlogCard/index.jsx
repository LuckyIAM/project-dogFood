import React, {useState} from "react";
import "./style.css";


const BlogCard = ({img, created_at, title}) =>{

    const cardStyle = {backgroundImage: `url(${img})`}
    

    return<>
    <div className="card">
        <div className="card_img" style={cardStyle}></div>
        <div className="data_create"><span>{created_at}</span></div>
        <div className="title">{title}</div>
    </div>
    </> 
}
export default BlogCard;