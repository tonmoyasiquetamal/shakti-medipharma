import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    /*<-----Use Authentication User & LogOut-----> */
    const { user, logOut } = useAuth();
    return (

        /*<-----Navbar From React Bootstrap For Showing Site Top----> */
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="danger">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        Shakti Medi Pharma
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
                        </Nav>

                        {/* Conditional Rendering With Optional Chaining For 
                        Log In & Register In Tick Mark */}
                        {user?.email ? <button onClick={logOut} type="button" className="btn btn-outline-warning">Logout</button>
                            :
                            <Nav.Link as={HashLink} to="/loginregistration"><button type="button" className="btn btn-outline-info">Login</button></Nav.Link>
                        }
                        <Nav.Link as={HashLink} to="/loginregistration"><button type="button" className="btn btn-outline-warning">SignUp</button></Nav.Link>
                        <Navbar.Text>
                            Signed In As: <a href="/loginregistration">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;