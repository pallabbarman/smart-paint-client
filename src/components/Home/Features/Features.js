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
            ' We have the best skilful worker who will be doing your job perfectly and smoothly.',
    },
    {
        img: experience,
        name: 'Experiences',
        description:
            ' We produce a higher level of residential and commercial professional painting services.',
    },
    {
        img: quality,
        name: 'Quality',
        description:
            ' We afford Quality Assurance services that approach each engagement as a partnership.',
    },
    {
        img: guaranties,
        name: 'Guaranties',
        description:
            ' Our painting services will also guaranty that painting will stay as new always.',
    },
];

const Features = () => (
    <section className="mt-5">
        <Jumbotron>
            <Container>
                <div className="text-center">
                    <h1>WHY CHOOSE US</h1>
                    <br />
                    <p>
                        We always give our best services. Because customers are important to us. We
                        always want our customer to become happy to get our services.
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
