import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import google from '../../../images/google.svg';
import login from '../../../images/login.svg';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import { handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';

const Login = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
    });

    initializeLoginFramework();
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/' } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const signOut = () => {
        handleSignOut().then((res) => {
            handleResponse(res, false);
        });
    };
    return (
        <section>
            <NavBar />
            <Container>
                <Row className="d-flex align-items-center mt-5">
                    <Col md={8}>
                        <img className="img-fluid" src={login} alt="" />
                    </Col>
                    <Col md={4} className="text-center">
                        <h1 style={{ color: '#000' }}>Login</h1>
                        <br />
                        <div>
                            {user.isSignIn ? (
                                <Button onClick={signOut} type="button" variant="outline-primary">
                                    Sign Out
                                </Button>
                            ) : (
                                <Button
                                    onClick={googleSignIn}
                                    type="button"
                                    variant="outline-primary"
                                >
                                    <img
                                        src={google}
                                        style={{ height: '30px', width: '30px' }}
                                        alt=""
                                    />
                                    {'  '}
                                    Sign In with Google
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </section>
    );
};

export default Login;
