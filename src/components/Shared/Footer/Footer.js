import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/paint-brush.svg';
import './Footer.css';

const Footer = () => (
    <section className="footer mt-5">
        <Container>
            <Row className="d-flex align-items-center footer-main">
                <Col md={5}>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={4}>
                            <img src={logo} alt="" />
                        </Col>
                        <Col md={8}>
                            <h1>Smart Paint</h1>
                            <p>We bring your places to your dream colour.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <h5>About Us</h5>
                    <h5>About Us</h5>
                    <h5>About Us</h5>
                </Col>
                <Col md={4}>
                    <ul className="list-unstyled" style={{ fontSize: '20px' }}>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Mirpur, Dhaka, Bangladesh
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'none', color: 'white' }}
                                href="mailto:smart@paint.com"
                            >
                                <FontAwesomeIcon icon={faEnvelope} /> smart@paint.com
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'none', color: 'white' }}
                                href="tel:01717171717"
                            >
                                <FontAwesomeIcon icon={faPhoneAlt} /> 01717171717
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <div className="text-center">
                <h5>Copyright &copy; {new Date().getFullYear()} Smart Paint</h5>
            </div>
            <br />
        </Container>
    </section>
);

export default Footer;
