import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderList = () => {
    const [ordersList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/servicesOrder')
            .then((res) => res.json())
            .then((data) => setOrderList(data));
    }, []);

    return (
        <section>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0">
                        <Sidebar />
                    </Col>
                    <Col md={10} style={{ marginTop: '50px' }}>
                        <h1 className="text-center">Order List</h1>
                        <br />
                        <Container>
                            {' '}
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Service</th>
                                        <th>Pay With</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <div
                                            className="text-center"
                                            style={{ marginLeft: '300px' }}
                                        >
                                            {ordersList.length === 0 && (
                                                <Spinner animation="grow" variant="primary" />
                                            )}
                                        </div>
                                    }
                                    {ordersList.map((list) => (
                                        <tr key={list._id}>
                                            <td>{list.name}</td>
                                            <td>{list.email}</td>
                                            <td>{list.title}</td>
                                            <td>Credit Card</td>
                                            <td>pending</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OrderList;
