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
                        <h1>House Painting</h1>
                        <p className="text-justify">We always gives our best services.</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </section>
);

export default FeaturedService;
