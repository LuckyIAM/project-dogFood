import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {XCircle} from "react-bootstrap-icons"
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default ({isActive, changeActive}) =>{
    return <div className={isActive ? "popup-box active": "popup-box"}>
        <div className="popup">
            <XCircle className="popup-close" onClick={e => {changeActive(false)}}/>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Button variant="warning" type="submit">Войти</Button>
            </Form>
        </div>
    </div>
}
