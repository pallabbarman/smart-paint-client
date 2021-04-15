import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import topBanner from '../../../images/banner.svg';
import './TopBanner.css';

const TopBanner = () => (
    <main className="top-banner">
        <Container>
            <Row className="d-flex align-items-center banner">
                <Col md={5}>
                    <h1>
                        Welcome to <br /> Smart Paint
                    </h1>
                    <br />
                    <h4>
                        Splash your dream <span className="color">colour.</span>{' '}
                        <span id="line-color">
                            We bring your places to your dream{' '}
                            <span className="color">colour.</span>
                        </span>
                    </h4>
                    <br />
                    <Button as={Link} to="/dashboard" variant="danger">
                        Hire us
                    </Button>
                </Col>
                <Col md={7}>
                    <img className="img-fluid" src={topBanner} alt="" />
                </Col>
            </Row>
        </Container>
    </main>
);

export default TopBanner;
