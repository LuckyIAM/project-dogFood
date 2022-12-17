import React,{useState, useEffect, useContext} from "react";
import { Context } from "../App";
import {useParams} from "react-router-dom";
import { Container, Row, Col, Figure, Table, ButtonGroup, Button, Alert } from "react-bootstrap";
import {Truck} from "react-bootstrap-icons";
import { addToBasket } from "../Function";
import Comment from "../components/Comment";

export default() => {
    const {api, api2, token, goods, idProduct, setIdProduct, basket, setBasket} = useContext(Context);
    const[product, setProduct]= useState({});
    const [cnt, setCnt] = useState(0);
    const [_id, set_Id] = useState("");
    let params = useParams();
    useEffect(()=>{
        set_Id(params.id)
    },[basket])

    useEffect(()=>{
        if(token){
            api.getProduct(params.id)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
        }else{
            api2.getProduct(params.id)
            .then(res => res.json())
            .then(data => {
                setProduct(data) 
            })    
        }
    },[api, api2])


    return <><Container>
        {product._id &&
        <Row>
            <Col xs={12}>
            <h1>{product.name}</h1>
            </Col>
            <Col xs={12} md={8}>
                <Figure>
                    <Figure.Image src={product.pictures}/>
                </Figure>
            </Col>
            <Col xs={12} md={4}>
                {product.discount && <small><del>{product.price} руб.</del></small>}
                <div><strong className={product.discount ? "text-danger" : "text-dark"}>
                    {Math.ceil((product.price*(100 - product.discount))/100)}</strong>
                </div>
                    <Row>
                    <Col md={6}>
                        <ButtonGroup>
                            <Button size = "sm" variant="light"disabled={!cnt} onClick =
                            {e => setCnt(cnt - 1)}>-</Button>
                            <Button size = "sm" variant="light" disabled>{cnt}</Button>
                            <Button size = "sm" variant="light" onClick ={e => setCnt(cnt + 1)}>+</Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={6}>
                        <Button size = "sm" variant="warning" 
                        onClick={e =>{
                            e.stopPropagation();
                            e.preventDefault();
                            addToBasket(goods, _id, idProduct, setIdProduct, basket, setBasket)
                            }}>В корзину</Button>
                    </Col>
                    </Row>
                    <Alert variant="secondary" className="mt-3">
                        <Row>
                            <Col md={1}><Truck/></Col>
                             <Col><small>Доставка по всему миру!</small></Col>
                        </Row> 
                    </Alert>
            </Col>
            <Col xs = {12}>
                <h2>Описание</h2>
                <p>{product.description}</p>
            </Col>
            <Col xs = {12}>
                <h2>Характеристики</h2>
                <Table hover>
                    <tbody>
                        <tr>
                            <th>Вес</th>
                            <td>{product.wight}</td>
                        </tr>
                        <tr>
                            <th>Цена</th>
                            <td>{product.price}₽ за {product.wight}</td>
                        </tr>
                        <tr>
                            <th>Польза</th>
                            <td> {product.description}</td>
                        </tr>
                    </tbody>
                </Table>
                
            </Col>
            
        </Row>
    }
    </Container>
    <Comment/>
    </>
}