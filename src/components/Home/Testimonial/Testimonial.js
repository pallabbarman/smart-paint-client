import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = (props) => {
    const { review } = props;
    const { description, name, photo, service, ceo } = review;

    return (
        <Col md={4} className="d-flex justify-content-center">
            <Card className="testimonial">
                <div className="user-info">
                    <Image src={photo} roundedCircle />
                    <div>
                        <h4>{name}</h4>
                        <h6 className="text-center">{ceo}</h6>
                    </div>
                </div>
                <br />
                <div className="feedback">
                    <h5 className="text-center">{service}</h5>
                    <p className="text-justify">{description}</p>
                    <p className="text-center star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </p>
                </div>
            </Card>
        </Col>
    );
};

export default Testimonial;
