import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Book = () => {
    const { _id } = useParams();
    const [booking, setBooking] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${_id}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [_id]);

    const addBooking = booking.find((bk) => parseInt(bk._id, 10) === parseInt(_id, 10));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0">
                        <Sidebar />
                    </Col>
                    <Col md={10} style={{ marginTop: '50px' }}>
                        <h1 className="text-center">Booking</h1>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ margin: '20px 50px', padding: '0 40px' }}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    defaultValue={loggedInUser.name}
                                    {...register('name', { required: true })}
                                    placeholder="Your Name"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    defaultValue={loggedInUser.email}
                                    {...register('email', { required: true })}
                                    placeholder="Your Name"
                                    className="form-control"
                                />
                                {errors.email && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    defaultValue={addBooking?.title}
                                    {...register('service', { required: true })}
                                    placeholder="Your Name"
                                    className="form-control"
                                />
                                {errors.service && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <Button variant="outline-primary" className="px-5" type="submit">
                                Pay
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Book;
