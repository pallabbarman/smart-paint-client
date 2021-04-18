import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Services from '../../Home/Services/Services';

const Booking = () => (
    <section>
        <Container fluid>
            <Row>
                <Col md={2} className="p-0">
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <Services />
                </Col>
            </Row>
        </Container>
    </section>
);

export default Booking;
