import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Feature.css';

const Feature = (props) => {
    const { feature } = props;
    const { img, name, description } = feature;
    return (
        <Col md={6} className="d-flex justify-content-center mb-5">
            <Card className="items-features">
                <Row className="d-flex align-items-center">
                    <Col md={3}>
                        <Card.Img variant="top" src={img} />
                    </Col>
                    <Col md={9}>
                        <Card.Body>
                            <Card.Title className="text-center">{name}</Card.Title>
                            <Card.Text className="text-justify">{description}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default Feature;
