import React from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import quality from '../../../images/gold-medal.svg';
import guaranties from '../../../images/guarantee.svg';
import experience from '../../../images/idea.svg';
import skill from '../../../images/tools.svg';
import Feature from '../Feature/Feature';

const featureItems = [
    {
        img: skill,
        name: 'Skills',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam?',
    },
    {
        img: experience,
        name: 'Experiences',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam?',
    },
    {
        img: quality,
        name: 'Quality',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam?',
    },
    {
        img: guaranties,
        name: 'Guaranties',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam?',
    },
];

const Features = () => (
    <section className="mt-5">
        <Jumbotron>
            <Container>
                <div className="text-center">
                    <h1>Why Choose Us</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ullam
                        corporis similique quo officiis maxime nemo ab sapiente nam nostrum.
                    </p>
                </div>
                <br />
                <Row>
                    {featureItems.map((feature) => (
                        <Feature feature={feature} key={feature.name} />
                    ))}
                </Row>
            </Container>
        </Jumbotron>
    </section>
);

export default Features;
