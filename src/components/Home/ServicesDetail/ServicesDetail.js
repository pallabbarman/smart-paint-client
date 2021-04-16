import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServicesDetail.css';

const ServicesDetail = (props) => {
    const { services } = props;
    const { title, service, imageURL } = services;
    return (
        <Col md={4} className="d-flex justify-content-center">
            <Card className="services-info">
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Card.Text className="text-justify">{service}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServicesDetail;
