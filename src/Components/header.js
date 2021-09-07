import React from 'react';
import Logo  from '../img/header-footer/logo-yire.png';
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
                        <NavDropdown.Item className="down" href="/saludo-directora">Saludo Directora</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/historia">Historia</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/misio-y-vision">Misión y Visión</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/perfil">Perfil del Estudiante</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/equipo-directivo">Equipo Directivo</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/doc-intitucionales">Documentos Institucionales</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/plan-mejoramiento">Plan de Mejoramiento</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/pise">PISE</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/infractructura">Infraestructura</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="down" title="AREA ACADEMICA" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="down" href="/coordinacion-academica">Coordinación Académica</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/equipo-academico">Equipo Academico</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/equipo-docente">Equipo Docentes</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/equipo-pie">Equipo PIE</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="plan-estudio">Planes de Estudio</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/actividades-complementarias">Actividades Complementarias</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/mediciones-externas">Mediciones Externas</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="/recurso-aprendizaje">Recursos para el Aprendizaje</NavDropdown.Item>
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
                        <NavDropdown.Item className="down" href="#action4">Primer Ciclo Básico</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Segundo Ciclo Básico</NavDropdown.Item>
                        <NavDropdown.Item className="down" href="#action5">Enseñanza Media</NavDropdown.Item>
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