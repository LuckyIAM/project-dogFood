import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";


export default ({img,text1, text2, text3, color}) =>{
    const st2 = {
        background: `url(${img}) no-repeat center/cover`,
        padding: "20px 40px",
        borderRadius: "30px"
    }
    const st1 = {
        padding: "20px 40px",
        color: "#fff"
    }
    return(
    <Container style={{borderRadius: "30px", backgroundColor : `${color}`}}>
        <Row style={{height:"200px"}}>
            <Col md={6} xs={6} style={st1}>
                <h2>{text1}</h2>
                <p>{text2}</p>
                <h2>{text3}</h2>
            </Col>
            <Col md={6} xs={6} style={st2} />
        </Row>
    </Container>      
    )
}
