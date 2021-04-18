import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);

    useEffect(() => {
        fetch(`https://smart-paint.herokuapp.com/servicesOrderByEmail?email=${loggedInUser.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(err));
    }, [loggedInUser.email]);

    return (
        <section>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0">
                        <Sidebar />
                    </Col>
                    <Col md={10} style={{ marginTop: '50px' }}>
                        <h1 className="text-center">Booking List</h1>
                        <br />
                        <Container>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Service Image</th>
                                        <th>Service</th>
                                        <th>Cost</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <div
                                            className="text-center"
                                            style={{ marginLeft: '350px' }}
                                        >
                                            {services.length === 0 && (
                                                <Spinner animation="grow" variant="primary" />
                                            )}
                                        </div>
                                    }
                                    {services.map((service) => (
                                        <tr key={service._id}>
                                            <td>{service.name}</td>
                                            <td>
                                                <img
                                                    src={service.image}
                                                    style={{ objectFit: 'cover', height: '30px' }}
                                                    alt=""
                                                />
                                            </td>
                                            <td>{service.title}</td>
                                            <td>$ {service.amount}</td>
                                            <td>
                                                {new Date(service.date).toDateString('dd/MM/yyyy')}
                                            </td>
                                            <td>{service.status}</td>
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

export default ServiceList;
