import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import img from "./img/img_good.png"

export default () =>{
    const st2 = {
        background: `#ff9027 url(${img}) no-repeat center/contain`,
        height: "200px",
        gap: "8px",
        borderRadius: "30px"
    }
    const st1 = {
        padding: "20px 40px",
        color: "#fff"
    }

    return(
    <Container style={{borderRadius: "30px", backgroundColor: "#ff9027"}}>
        <Row style={{height:"200px"}}>
            <Col md={6} xs={12} style={st1}>
                <h1>Подарок за<br/>первый заказ! </h1>
                <p>Легкое говяжье - пластины</p>
            </Col>
            <Col md={6} xs={12} style={st2} />
        </Row>
    </Container>      
    )
}
