import * as React from 'react';
import { Row, Col, Container } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';
import './index.scss';

const { Component } = React;

export class Footer extends Component<{}, {}> {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg="2">
                            <p className="footer-text">
                                <FontAwesome.FaPhone /> 903-505-8036
                            </p>
                        </Col>
                        <Col lg="3">
                            <p className="footer-text mail-to">
                                <a href="mailto:contact@swarajp.me">
                                    <FontAwesome.FaEnvelope /> contact@swarajp.me 
                                </a>
                            </p>
                        </Col>
                        <Col lg="7">
                            <p className="footer-text float-right">Swaraj Panigrahi &mdash; GUI, JS and Web</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}