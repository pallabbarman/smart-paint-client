import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import featured from '../../../images/service.jpg';

const FeaturedService = () => (
    <section className="mt-5">
        <Jumbotron>
            <Container>
                <Row>
                    <Col md={6}>
                        <img
                            style={{ borderRadius: '10px' }}
                            className="img-fluid"
                            src={featured}
                            alt=""
                        />
                    </Col>
                    <Col md={6}>
                        <h1 className="text-center">Interior Painting</h1>
                        <p className="text-justify">
                            We use only the best quality paint, newest technology and expert
                            painters to create a new look for your home. Update with the latest
                            trends in home colors creating a beautiful style throughout your
                            interior, or give the outside of your home a makeover with fresh paint
                            that will make it look new again. Interior services we offer include:
                        </p>
                        <div>
                            <ul>
                                <li>Wall and floor painting</li>
                                <li>Graphics and artistic finishes</li>
                                <li>Wainscoting for high-traffic areas</li>
                                <li>Green-friendly paints</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </section>
);

export default FeaturedService;
