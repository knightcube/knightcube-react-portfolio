import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Footer extends Component {

    render(){
        return (
            <footer className="mt-5">
                <Container>
                    <Row>
                        <Col className = "p-0" md={3} sm={12}>
                            Rajat Kumar Gupta
                        </Col>
                    </Row>
                </Container>
            </footer>

        )
    }
}