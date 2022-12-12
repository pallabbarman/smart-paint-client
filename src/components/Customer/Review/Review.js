import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const reviewData = {
            ...loggedInUser,
            name: data.name,
            service: data.title,
            description: data.description,
            ceo: data.company,
        };

        fetch('https://smart-paint.onrender.com/addReview', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        }).then((res) => {
            console.log(res);
            alert('Thanks for your review.');
        });
    };

    return (
        <section>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0">
                        <Sidebar />
                    </Col>
                    <Col md={10} style={{ marginTop: '50px' }}>
                        <h1 className="text-center">Review</h1>
                        <br />
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ margin: '20px 50px', padding: '0 40px' }}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    defaultValue={loggedInUser.name}
                                    {...register('name', { required: true })}
                                    placeholder="Your Name"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    {...register('company', { required: true })}
                                    placeholder="Company"
                                    className="form-control"
                                />
                                {errors.company && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    {...register('title', { required: true })}
                                    placeholder="Service Name"
                                    className="form-control"
                                />
                                {errors.title && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    {...register('description', {
                                        required: true,
                                    })}
                                    placeholder="Description"
                                    className="form-control"
                                    rows="4"
                                />
                                {errors.description && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <Button variant="outline-primary" className="px-5" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Review;
