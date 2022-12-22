import React from "react"
import {Container, Row, Col, Figure} from "react-bootstrap"
import Alternative from "../components/Alternative"

export default ({user}) => {
    return <Container>
       {user.name ? <Row>
            <Col md={6}>
                <h1>Профиль</h1>
                <h2>{user.name}</h2>
                <a hraf={`mailto:${user.email}`}>{user.email}</a>
                <h3>{user.about}</h3>
            </Col>
            <Col md={6}>
                <Figure>
                    <Figure.Image src={user.avatar}/>
                </Figure>
            </Col>
        </Row>:
        <Row>
            <Col md={12} xs={12}>
                <Alternative/>
            </Col>
        </Row>
        }
    </Container>
}