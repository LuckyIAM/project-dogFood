import React from "react"
import {Container, Row, Col, Figure} from "react-bootstrap"

export default ({user}) => {
    return <Container>
       {user.name && <Row>
            <Col md={6}>
                <h1>Профиль</h1>
                <h2>{user.name}</h2>
                <a hraf={`mailto:${user.email}`}>{user.email}</a>
                <p>{user.about}</p>
            </Col>
            <Col md={6}>
                <Figure>
                    <Figure.Image src={user.avatar}/>
                </Figure>
            </Col>
        </Row>}
        
    </Container>
}