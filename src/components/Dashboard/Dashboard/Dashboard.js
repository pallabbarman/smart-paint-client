import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => (
    <section>
        <Container fluid>
            <Row>
                <Col className="p-0" md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} className="mt-5">
                    <h1 className="text-center">Welcome sir</h1>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Dashboard;
