import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner, Table } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderList = () => {
    const [ordersList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://smart-paint.herokuapp.com/servicesOrder')
            .then((res) => res.json())
            .then((data) => setOrderList(data));
    }, [ordersList]);

    const handleChange = (_id, event) => {
        const updateStatus = {
            status: event.target.value,
            _id,
        };
        fetch(`https://smart-paint.herokuapp.com/update/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStatus),
        })
            .then((result) => result.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };

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
                                            <td>
                                                <Form.Group>
                                                    <Form.Control
                                                        as="select"
                                                        onChange={(event) =>
                                                            handleChange(list._id, event)
                                                        }
                                                    >
                                                        <option>{list.status}</option>
                                                        <option>Pending</option>
                                                        <option>On going</option>
                                                        <option>Done</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </td>
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
