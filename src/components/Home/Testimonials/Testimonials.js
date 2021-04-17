import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section>
            <h1 className="text-center mt-5">TESTIMONIALS</h1>
            <Container>
                <div className="text-center mt-5">
                    {reviews.length === 0 && <Spinner animation="grow" variant="primary" />}
                </div>
                <Row className="mt-5">
                    {reviews.map((review) => (
                        <Testimonial review={review} key={review._id} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};
export default Testimonials;
