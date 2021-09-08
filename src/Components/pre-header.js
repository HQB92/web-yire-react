import React from 'react';
import { Navbar, Container, Nav, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';


const PreHeader = () =>{
    return(
        <div>
            <Navbar className="div " collapseOnSelect expand="lg" >
                <Container className="div">
                    <Col className="Col" >
                        <a href="https://www.facebook.com/liceopolitecnicoyire"><FacebookIcon style={{ fontSize: 30 }} ></FacebookIcon></a>
                        <a href="https://www.instagram.com/yireliceopolitecnicocoihueco/"><InstagramIcon style={{ fontSize: 30 }}></InstagramIcon></a>
                        <a href="/"><YouTubeIcon style={{ fontSize: 30 }}></YouTubeIcon></a>
                    </Col>
                    <Navbar.Toggle aria-controls="navbar-borde responsive-navbar-nav ">
                        <span><MenuIcon style={{ fontSize: 40 }}></MenuIcon></span>
                    </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav navbar-right navbar-borde " >
                    <Nav className="me-auto navbar-borde"></Nav>
                    <Nav className="navbar-right div navbar-borde ">
                        <Nav.Link className="navbar-right div navbar-borde" href="/classroom">ClassRoom</Nav.Link>
                        <Nav.Link className="navbar-right div" href="/comunicados">Comunicados</Nav.Link>
                        <Nav.Link className="navbar-right div" href="/protocolos-y-reglamentos">Protocolos y reglamentos</Nav.Link>
                        <Nav.Link className="navbar-right div" href="https://app.colegiointeractivo.cl/sae3.0/index3_new.html"  target="_blank">Notas</Nav.Link>
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