import React from 'react';
import Logo  from '../img/logo-yire.png';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header= () =>{
    return(
        <div>
            <Navbar  collapseOnSelect expand="lg" >
            <Container className="header fluid">
            <Navbar.Brand href="/" >
              <img
                alt=""
                src={Logo}
                width="130px"
                height="130px" />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav className="navbar-right">
                    <NavDropdown className="down" title="NUESTRO COLEGIO" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="AREA ACADEMICA" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="CAPELLANIA Y FORMACION" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="CICLOS" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="COMUNIDAD" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="AREA DE GESTION" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header;