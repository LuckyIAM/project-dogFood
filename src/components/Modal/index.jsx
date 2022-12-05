import React, {useState, useContext} from "react";
import { Context } from "../../App";
import {Form, Button} from "react-bootstrap";
import {XCircle} from "react-bootstrap-icons"
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Local from "../../Local";
import Warning from "../Warning";

export default ({isActive, changeActive, setToken, setUser, setSucces, setTextContent}) =>{
    const {api}=useContext(Context); 
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("")
    
    const handler = e =>{
        e.preventDefault();
        api.logIn({"email": email, "password": pwd})
            .then(res => res.json())
            .then(data =>{
                console.log("data", data);
                if (data.token){
                    Local.setItem("token-user", data.token)
                    Local.setItem("user", data.data, true)
                    setToken(data.token)
                    setUser(data.data);
                    setEmail("");
                    setPwd("")
                    changeActive(false)
                }else if (data.message !== "ok"){
                   localStorage.removeItem("token-user");
                   localStorage.removeItem("user");
                   setSucces(true); 
                   changeActive(false);
                   setTextContent(data.message);
                   changeActive(false);
                }
            })
    }
    return <div className={isActive ? "popup-box active": "popup-box"}>
         <div className="popup">
            <XCircle className="popup-close" onClick={e => {changeActive(false);}}/>
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
