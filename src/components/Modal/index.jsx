import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {XCircle} from "react-bootstrap-icons"
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Local from "../../Local";

export default ({isActive, changeActive, api, setToken, setUser}) =>{
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("")
    const handler = e =>{
        e.preventDefault();
        api.logIn({"email": email, "password": pwd})
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                Local.setItem("shop-user", data.token)
                Local.setItem("u", data.data, true)
                setToken(data.token)
                setUser(data.data);
                setEmail("");
                setPwd("")
                changeActive(false)
            })
    }
    return <div className={isActive ? "popup-box active": "popup-box"}>
        <div className="popup">
            <XCircle className="popup-close" onClick={e => {changeActive(false)}}/>
            <Form onSubmit={handler}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" type="submit">Войти</Button>
            </Form>
        </div>
    </div>
}
