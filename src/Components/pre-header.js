import React from 'react';
import Logo  from '../img/logo-yire.png';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const PreHeader = () =>{
    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar>
    )
}

export default PreHeader;