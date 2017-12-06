import * as React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './index.scss';

const { Component } = React;

export class Footer extends Component<{}, {}> {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg="4">lg-4</Col>
                        <Col lg="4">lg-8</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}