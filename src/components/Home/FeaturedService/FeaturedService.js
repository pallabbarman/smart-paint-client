import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import featured from '../../../images/service.jpg';

const FeaturedService = () => (
    <section className="mt-5 feature">
        <Jumbotron>
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="img-fluid" src={featured} alt="" />
                    </Col>
                    <Col md={6}>
                        <h1>Hi</h1>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, qui
                            tempora. Beatae rerum laudantium similique dolorem repellendus eum
                            officia, odio nemo sapiente labore laboriosam quos temporibus magni aut
                            quasi, rem unde itaque harum sit cumque voluptates esse? Possimus
                            doloremque quas necessitatibus! Id magnam eius necessitatibus eveniet
                            odio dicta voluptatum minima assumenda modi rem veritatis perferendis
                            saepe blanditiis, fugiat labore qui, similique dolorum architecto
                            ducimus. Omnis, molestiae vitae consequuntur et nulla recusandae
                            repudiandae dicta! Repellendus corporis asperiores eos sequi nobis! Aut
                            repellendus similique recusandae accusantium alias, cumque
                            exercitationem at, mollitia cupiditate quaerat iste quos soluta nobis.
                            Non voluptatibus natus eligendi alias.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </section>
);

export default FeaturedService;
