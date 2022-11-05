
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container,Row} from "react-bootstrap";


const App = () =>{
    const st = {
        height: "50px",
        backgroundColor: "silver",
        border: "1px solid white"
    }
    return <Container style = {{height: "900px", backgroundColor: "darkorchid"}}>
            <Row>
                <Col style={st}/>
                <Col style={st}/>
                <Col style={st}/>
            </Row>
        </Container>
}

export default App;