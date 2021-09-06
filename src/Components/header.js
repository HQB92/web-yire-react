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
                        <NavDropdown.Item className="down" href="#action3">Saludo Directora</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Historia</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Misión y Visión</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action3">Perfil del Estudiante</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Equipo Directivo</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Documentos Institucionales</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action3">Plan de Mejoramiento</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">PISE</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Infraestructura</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="AREA ACADEMICA" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Coordinación Académica</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Equipo Academico</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Equipo Docentes</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action3">Equipo PIE</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Planes de Estudio</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Actividades Complementarias</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action3">Mediciones Externas</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Recursos para el Aprendizaje</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="CAPELLANIA Y FORMACION" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Psico-orientación</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Convivencia Escolar</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Movimientos Formativos</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action3">Psico-orientación</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Área de Familia</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="CICLOS" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Inicial</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Básico</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Intermedio</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Superior</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="COMUNIDAD" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Centros</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Asistentes de la educación</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Comité Paritario</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Emprendedores</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Cumpleaños</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="AREA DE GESTION" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="#action3">Descripción</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Administración y Finanzas</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Horarios de Atención</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action4">Prevención de Riesgos</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Posta</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header;