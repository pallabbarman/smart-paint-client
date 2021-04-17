import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesDetail.css';

const ServicesDetail = (props) => {
    const { services } = props;
    const { _id, title, service, imageURL, amount } = services;
    return (
        <Col md={4} className="d-flex justify-content-center">
            <Card as={Link} to={`book/${_id}`} className="services-info">
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <h6 className="text-center">$ {amount}</h6>
                    <Card.Text className="text-justify">{service}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServicesDetail;
