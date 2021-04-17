import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = (props) => {
    const { review } = props;
    const { description, name, photo, service } = review;

    return (
        <Col md={4} className="d-flex justify-content-center">
            <Card className="testimonial">
                <Row>
                    <Col md={3}>
                        <Image src={photo} roundedCircle />
                    </Col>
                    <Col md={9}>
                        <h4 className="text-center mt-5">{name}</h4>
                    </Col>
                </Row>
                <br />
                <h5 className="text-center">{service}</h5>
                <p className="text-justify">{description}</p>
            </Card>
        </Col>
    );
};

export default Testimonial;
