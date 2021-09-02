import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';




const PreHeader = () =>{
    return(
        <div>
            <Navbar className="div " collapseOnSelect expand="lg" >
                <Container className="div">
                    <Nav>
                    </Nav>
                <Navbar.Toggle aria-controls="navbar-borde responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav navbar-right navbar-borde">
                    <Nav className="me-auto navbar-borde"></Nav>
                    <Nav className="navbar-right div navbar-borde">
                        <Nav.Link className="navbar-right div navbar-borde" href="/classroom">ClassRoom</Nav.Link>
                        <Nav.Link className="navbar-right div" href="/comunicados">Comunicados</Nav.Link>
                        <Nav.Link className="navbar-right div" href="/protocolos-y-reglamentos">Protocolos y reglamentos</Nav.Link>
                        <Nav.Link className="navbar-right div" href="https://app.colegiointeractivo.cl/sae3.0/index3_new.html">Notas</Nav.Link>
                        <Nav.Link className="navbar-right div" href="/pise">Pise</Nav.Link>
                        <Nav.Link className="navbar-right div" href="/contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default PreHeader;