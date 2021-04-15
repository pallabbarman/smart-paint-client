import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => (
    <section>
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    </section>
);

export default Dashboard;
