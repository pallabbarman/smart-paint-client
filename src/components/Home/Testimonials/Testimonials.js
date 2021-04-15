import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates recusandae, suscipit accusantium ut atque autem!',
    },
    {
        name: 'Cavity Filling',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum odio nam! Esse, quia repellat',
    },
    {
        name: 'Teeth Whitening',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum laboriosam rem commodi reiciendis voluptate!',
    },
];

const Testimonials = () => (
    <section className="service">
        <h1 className="text-center mt-5">TESTIMONIALS</h1>
        <div className="d-flex justify-content-center">
            <Container>
                <Row className="mt-5">
                    {servicesData.map((services) => (
                        <Testimonial services={services} key={services.name} />
                    ))}
                </Row>
            </Container>
        </div>
    </section>
);

export default Testimonials;
