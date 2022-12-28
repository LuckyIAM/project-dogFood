import React,{ useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardComment from "../CardComment";

export default () => {
    const { allComment, token, changePopupActive, user, setIdReview } = useContext(Context);
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
    const navigateToMessageForm = useNavigate();
    

    const styleStars ={
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    }

    const fontSizeFill = {
        fontSize : "35px"
    }

    const fontSizeSt = {
        fontSize : "21px",
        color: "#888"
    }
    console.log("feedback", allComment, "user",user);
 
    return <Container>
        <Row>
        <Col xs = {12}>
                <h2>Отзывы</h2>
            </Col>
            <Col xs = {12}>
                {token 
                ?
                <Button className="bg-light text-dark p-4" type="submit" onClick={() => {
                    navigateToMessageForm("/message-form")
                }}>Написать отзыв</Button>
                : 
                <><div className="comment-warning fw-normal" style={fontSizeSt}>Для того чтобы оставить отзыв &nbsp;
                    <span className="singUp text-dark fw-bold" 
                    style={{cursor: "pointer"}} 
                    onClick={() => {
                        changePopupActive(true)
                    }}>
                        проидите авторизацию
                    </span>
                </div>
                <Button className="bg-light text-dark p-4" 
                onClick={() => {
                    changePopupActive(true)
                }}>Авторизация</Button>
                </>
                }
            </Col>
            <Col xs={12} md={12}>
                <div>
                {allComment.map((comment, i) => <CardComment
                    key={i}
                    author={comment.author.name} 
                    created_at = {`${new Date(comment.created_at).getDate()} ${months[new Date(comment.created_at).getMonth()]}  ${new Date(comment.created_at).getFullYear()}`}
                    rating={comment.rating!==5 
                        ?
                        <div style={styleStars}>
                            <span className="text-warning" style={fontSizeFill}>{"٭".repeat(comment.rating)}</span> 
                            <span style={fontSizeSt}>{"☆".repeat(5 - comment.rating)}</span>
                        </div> 
                        :
                        <span className="text-warning"style={fontSizeFill}>{"٭".repeat(5)}</span>}
                    text={comment.text}
                    button_del={comment.author._id === user._id ?  "удалить отзыв"  : null}
                    rewiev={comment._id}
                    />)}
                </div>
            </Col>
        </Row>
    </Container>
}