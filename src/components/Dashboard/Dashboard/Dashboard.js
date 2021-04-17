import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import dashboard from '../../../images/dashboard.svg';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col className="p-0" md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10} className="mt-5">
                        <h1 className="text-center">
                            Welcome {loggedInUser.name} to your dashboard
                        </h1>
                        <br />
                        <br />
                        <div className="text-center">
                            <img
                                style={{ width: '70%' }}
                                className="img-fluid"
                                src={dashboard}
                                alt=""
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Dashboard;
