import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ManageReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://smart-paint.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, [reviews]);

    const deleteReview = (_id) => {
        fetch(`https://smart-paint.herokuapp.com/deleteReview/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert('Review deleted successfully.');
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
                                        <th>Service</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <div
                                            className="text-center"
                                            style={{ marginLeft: '300px' }}
                                        >
                                            {reviews.length === 0 && (
                                                <Spinner animation="grow" variant="primary" />
                                            )}
                                        </div>
                                    }
                                    {reviews.map((review) => (
                                        <tr key={review._id}>
                                            <td>{review.name}</td>
                                            <td>{review.service}</td>
                                            <td>
                                                <Button
                                                    variant="outline-primary"
                                                    onClick={() => deleteReview(review._id)}
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

export default ManageReview;
