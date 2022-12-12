import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import contact from '../../../images/contact-us.svg';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const contactInfo = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            details: data.message,
        };

        fetch('https://smart-paint.onrender.com/addContact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(contactInfo),
        }).then((res) => {
            console.log('Response', res);
            alert('Thanks for contacting us.');
        });
    };

    return (
        <section>
            <Container>
                <h1 className="text-center mt-5">CONTACT US</h1>
                <Row className="d-flex justify-content-center align-items-center mt-5">
                    <Col md={6}>
                        <img className="img-fluid" src={contact} alt="" />
                    </Col>
                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    {...register('name', { required: true })}
                                    placeholder="Enter Your Name"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    placeholder="Enter Your Email"
                                    className="form-control"
                                />
                                {errors.email && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    {...register('subject', { required: true })}
                                    placeholder="Subject"
                                    className="form-control"
                                />
                                {errors.subject && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    {...register('message', { required: true })}
                                    placeholder="Description"
                                    className="form-control"
                                    rows="4"
                                />
                                {errors.message && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <Button variant="outline-primary" type="submit" block>
                                Submit
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Contact;
