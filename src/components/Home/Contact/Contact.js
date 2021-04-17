import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import contact from '../../../images/contact-us.svg';

const Contact = () => (
    <section>
        <Container>
            <h1 className="text-center mt-5">CONTACT US</h1>
            <Row className="d-flex justify-content-center align-items-center mt-5">
                <Col md={6}>
                    <img className="img-fluid" src={contact} alt="" />
                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows={4} placeholder="Message" />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit" block>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Contact;
