import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import img from "./img/img_good.png"

export default () =>{
    const st2 = {
        background: `#ff9027 url(${img}) no-repeat center/contain`,
        padding: "20px",
        gap: "30px"
    }
    const st1 = {
        "background": "#ff9027",
        padding: "20px 40px",
        color: "#fff"
    }
    const st3 = {
        borderRadius:"15px", 
        backgroundColor: "#ff9027", 
        padding: "10px", 
        marginBottom: "10px"}
    return(
    <Container>
        <Row style={st3}>
            <Col md={6} xs={6} style={st1}>
                <h1>Подарок за<br/>первый заказ! </h1>
                <p>Легкое говяжье - пластины</p>
            </Col>
            <Col md={6} xs={6} style={st2} />
        </Row>
    </Container>      
    )
}
