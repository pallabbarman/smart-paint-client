import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Testimonial = (props) => {
    const { services } = props;
    const { description, name } = services;
    return (
        <Col md={4}>
            <Card className="card">
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text className="text-justify">{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Testimonial;
