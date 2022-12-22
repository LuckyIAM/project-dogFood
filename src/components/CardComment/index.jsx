import React from "react";


export default ({author, created_at, rating, text}) => {
    const dateSt = {
        fontSize: "12px",
        color: "#888",
        fontWeight: "700"
    }
    const cardFeedback = {
        boxShadow: "0px -2px 1px -2px #888, 0px -2px 1px -2px #888"
    }

    return <div className="card-feedback p-4" style={cardFeedback}>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="name-of-feedback dysplay-4 fw-bold ">{author}</div>
                <div className="date p-2" style={dateSt}>{created_at}</div>
            </div>
            <div className="rating">{rating}</div>
            <div className="text">{text}</div>
        </div>    
}