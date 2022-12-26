import React, {useState, useContext} from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import {XCircle} from "react-bootstrap-icons"
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Local from "../../Local";


export default ({isActive, changeActive, setToken, setUser, setSucces, setTextContent}) =>{
    const {api, setUpdPage, updPage}=useContext(Context); 
    const [changeForm, setChangeForm] = useState(false);
    const [group, setGroup] = useState("")
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("")


    const btnLogIn = {
        width: "240px",
        margin: "10px"
    }
    
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
                    changeActive(false);
                    if(window.location.href === `http://localhost:3000/product/${localStorage.getItem("id-params")}`){
                        setUpdPage(true);
                    }
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

    const handler2 = e =>{
        e.preventDefault();
        api.signUp({"email": email, "group": group, "password": pwd})
            .then(res => res.json())
            .then(data =>{
                console.log("data", data);
                if (data.token){
                    setEmail("");
                    setGroup("");
                    setPwd("");
                }else if (data.message !== "ok"){
                   alert(data.message)
                }
            })
    }

    return <div className={isActive ? "popup-box active": "popup-box"}>
         {!changeForm ? 
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
                <Button variant="warning" 
                type="submit" 
                style={btnLogIn}>
                    Войти
                </Button>
            </Form>
            <Button variant="secondary" 
                type="submit" 
                style={btnLogIn} 
                onClick={() =>{
                    setChangeForm(true);
                }}>
                    Зарегистрироваться
            </Button>
        </div>
        :
        <div className="popup">
            <XCircle className="form-close" onClick={e => {changeActive(false);}}/>
             <Form onSubmit={handler2}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Group</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={group}
                    placeholder="group-7"
                    onChange={e => setGroup(e.target.value)}
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
                <Button variant="warning" type="submit" style={btnLogIn} >Зарегистрироваться</Button>
            </Form>
            <Button 
                variant="warning"
                type="submit" 
                style={btnLogIn} 
                onClick={() =>{
                setChangeForm(false);
            }}>Войти</Button>
        </div>}
    </div>
}
