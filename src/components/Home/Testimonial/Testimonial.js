import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = (props) => {
    const { review } = props;
    const { description, name, photo, service } = review;

    return (
        <Col md={4} className="d-flex justify-content-center">
            <Card className="testimonial">
                <div className="user-info">
                    <Image src={photo} roundedCircle />
                    <h4>{name}</h4>
                </div>
                <br />
                <div className="feedback">
                    <h5 className="text-center">{service}</h5>
                    <p className="text-justify">{description}</p>
                </div>
            </Card>
        </Col>
    );
};

export default Testimonial;
