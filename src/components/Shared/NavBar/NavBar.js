import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar className="nav" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Smart Paint
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-item">
                        <Nav.Link active as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link active as={Link} to="#">
                            Contact
                        </Nav.Link>
                        <Nav.Link active as={Link} to="/dashboard">
                            Dashboard
                        </Nav.Link>
                        {loggedInUser ? (
                            <Button variant="warning" onClick={() => setLoggedInUser(false)}>
                                Sign out
                            </Button>
                        ) : (
                            <Nav.Link active as={Link} to="/login">
                                Login
                            </Nav.Link>
                        )}
                        <Nav.Link active>{loggedInUser.name}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar;
