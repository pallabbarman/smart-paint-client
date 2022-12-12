import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://smart-paint.onrender.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(err));
    }, [services]);

    const deleteService = (_id) => {
        fetch(`https://smart-paint.onrender.com/delete/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert('Service deleted successfully.');
            })
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
                        <h1 className="text-center">Manage Services</h1>
                        <br />
                        <Container>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <div
                                            className="text-center"
                                            style={{ marginLeft: '300px' }}
                                        >
                                            {services.length === 0 && (
                                                <Spinner animation="grow" variant="primary" />
                                            )}
                                        </div>
                                    }
                                    {services.map((service) => (
                                        <tr key={service._id}>
                                            <td>{service.title}</td>
                                            <td>$ {service.amount}</td>
                                            <td>
                                                <Button
                                                    variant="outline-primary"
                                                    onClick={() => deleteService(service._id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </Button>
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

export default ManageService;
