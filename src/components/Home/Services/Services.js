import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import './Services.css';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('https://smart-paint.onrender.com/services')
            .then((res) => res.json())
            .then((data) => setServicesData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="service">
            <h1 className="text-center mt-5">OUR SERVICES</h1>
            <Container>
                <div className="text-center mt-5">
                    {servicesData.length === 0 && <Spinner animation="grow" variant="primary" />}
                </div>
                <Row>
                    {servicesData.map((services) => (
                        <ServicesDetail services={services} key={services._id} />
                    ))}
                    <br />
                </Row>
            </Container>
        </section>
    );
};
export default Services;
