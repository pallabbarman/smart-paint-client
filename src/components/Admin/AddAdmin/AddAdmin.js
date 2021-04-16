import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
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
                        <h1 className="text-center">Make Admin</h1>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ margin: '20px 50px', padding: '0 40px' }}
                        >
                            <div className="form-group">
                                <h6>Email</h6>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    placeholder="Email Address"
                                    className="form-control"
                                />
                                {errors.email && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <Button variant="outline-primary" className="px-5" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddAdmin;
