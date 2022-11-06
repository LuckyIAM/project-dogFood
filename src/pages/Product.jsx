import React,{useState} from "react";
import data from "../assets/data.json";
import { Container, Row, Col, Figure, Table, ButtonGroup, Button, Alert } from "react-bootstrap";
import {Truck} from "react-bootstrap-icons";
export default() => {
    let p = data[0];
    const [cnt, setCnt] = useState(0);
    return <Container>
        <Row>
            <Col xs={12}>
            <h1>{p.name}</h1>
            </Col>
            <Col xs={12} md={8}>
                <Figure>
                    <Figure.Image src={p.picture}/>
                </Figure>
            </Col>
            <Col xs={12} md={4}>
                {p.discount && <small><del>{p.price} руб.</del></small>}
                <div><strong className={p.discount ? "text-danger" : "text-dark"}>
                    {Math.ceil((p.price*(100 - p.discount))/100)}</strong></div>
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
                        <Button size = "sm" variant="warning">В корзину</Button>
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
                <p>{p.description}</p>
            </Col>
            <Col xs = {12}>
                <h2>Характеристики</h2>
                <Table hover>
                    <tbody>
                        <tr>
                            <th>Вес</th>
                            <td>{p.wight} грамм</td>
                        </tr>
                        <tr>
                            <th>Цена</th>
                            <td>{p.price}₽ за 100 грамм</td>
                        </tr>
                        <tr>
                            <th>Польза</th>
                            <td> {p.description}</td>
                        </tr>
                    </tbody>
                </Table>
                
            </Col>
            <Col xs = {12}>
                <h2>Отзывы</h2>
            </Col>
        </Row>
    </Container>
}