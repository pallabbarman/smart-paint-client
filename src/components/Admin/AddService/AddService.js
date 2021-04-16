import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
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
                        <h1 className="text-center">Add Service</h1>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ margin: '20px 50px', padding: '0 40px' }}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    {...register('name', { required: true })}
                                    placeholder="Service Title"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    {...register('service', { required: true })}
                                    placeholder="Description"
                                    className="form-control"
                                    rows="4"
                                />
                                {errors.service && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="file"
                                    {...register('file', { required: true })}
                                    placeholder="Image"
                                />
                                <br />
                                {errors.file && (
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

export default AddService;
