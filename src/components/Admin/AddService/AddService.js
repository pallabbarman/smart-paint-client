import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

require('dotenv').config();

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
        const imageData = new FormData();

        imageData.set('key', `${process.env.REACT_APP_IMAGEBB_KEY}`);
        imageData.append('image', event.target.files[0]);

        axios
            .post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
                setImageURL(response.data.data.display_url);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const serviceData = {
            title: data.title,
            imageURL,
            service: data.service,
        };

        const url = `http://localhost:5000/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(serviceData),
        }).then((res) => {
            console.log('Response', res);
            alert('New Services added successfully');
        });
    };

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
                                    {...register('title', { required: true })}
                                    placeholder="Service Title"
                                    className="form-control"
                                />
                                {errors.title && (
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
                                    onChange={handleImageUpload}
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
