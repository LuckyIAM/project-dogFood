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
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";


export default() => {
    const navigateToMessageForm = useNavigate();


    return<>
    <Container>
        <Row>
            <Col xs = {12}>
                <h2>Отзывы</h2>
            </Col>
            <Col xs = {12}>
                <Button className="bg-light text-dark" type="submit" onClick={() => {
                    navigateToMessageForm("/message-form")
                }}>Написать отзыв</Button>
            </Col>
        </Row>
    </Container>
    </>
}