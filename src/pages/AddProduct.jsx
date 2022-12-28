import React, {useState, useContext} from "react";
import {Container, Row, Col, Form, Button, Image} from "react-bootstrap";
import {Context} from "../App";
import Alternative from "../components/Alternative";


export default () =>{
    const {api, token, setGoods} = useContext(Context);
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [inp3, setInp3] = useState("");
    const [inp4, setInp4] = useState("");
    const [inp5, setInp5] = useState("");
    const [inp6, setInp6] = useState("");

    const handler = e => {
        e.preventDefault();
        const body ={
            pictures :inp2,
            name: inp1,
            price: +inp3,
            discount: +inp4,
            wight: inp5,
            description: inp6
        }
        console.log(body);
    
    api.addProduct(body)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            //TODO: Popup => Товар успешно добавлен
            if(data){
                setInp1("");
                setInp2("");
                setInp3("0");
                setInp4("0");
                setInp5("");
                setInp6("");
                setGoods(prev => [...prev, data]);
            }
        })
    }
    return <Container>
        { token ?
        <Row className="py-5">
            <Col xs={12}>
                <h2>Добавить товар</h2>
            </Col>
            <Col xs={12} md={6}>
                <Form onSubmit={handler}>
                    <Form.Group>
                        <Form.Label>Название товара</Form.Label>
                        <Form.Control type="text" value={inp1} onChange={e => setInp1(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ссылка на изображенте</Form.Label>
                        <Form.Control type="link" value={inp2} onChange={e => setInp2(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Цена товара</Form.Label>
                        <Form.Control type="number" value={inp3} onChange={e => setInp3(e.target.value)}></Form.Control>
                    </Form.Group>
                        <Form.Label>Процент скидки</Form.Label>
                        <Form.Select value={inp4} onChange={e => setInp4(e.target.value)}>
                            <option value="0">Без скидки</option>
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                            <option value="15">15%</option>
                            <option value="20">20%</option>
                        </Form.Select>
                    <Form.Group>
                        <Form.Label>Вес</Form.Label>
                        <Form.Control type="text" value={inp5} onChange={e => setInp5(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" value={inp6} onChange={e => setInp6(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="btn-warning"> Добавить</Button>
                </Form>
            </Col>
            <Col xs={6}>
                {inp2 && <Image src={inp2} className="w-100"/>}
            </Col>
        </Row>
        :
        <Alternative/>}
        
    </Container>

}

