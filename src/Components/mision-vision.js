
import React from 'react';
import {Container, Card, Accordion} from  'react-bootstrap'
import MisionyVision from "../img/colegio/misioyvision.png"

const MisionVision = () => {
    return(
        <Container>
            <Card className=" text-white">
                <Card.Img src={MisionyVision} alt="Card image" />
            </Card>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>VISIÓN</h2></Accordion.Header>
                    <Accordion.Body>
                    Como proyecto educativo buscamos constituirnos en una comunidad que promueva el desarrollo integral de niños, 
                    niñas y jóvenes, desde una orientación cristiana a un modelo de gestión sustentable, vinculado al medio social 
                    y natural, que favorezca la excelencia académica y desarrollo humano.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>MISIÓN</h2></Accordion.Header>
                    <Accordion.Body>
                    Desarrollamos la pedagogía yireana, considerando como sujeto central a nuestros estudiantes, conviviendo en un 
                    ambiente inclusivo de respeto y en conexión con la naturaleza. Promovemos habilidades y 
                    competencias para el logro de resultados educativos de calidad, procurando el disfrute en el aprendizaje.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h2>VALORES</h2></Accordion.Header>
                    <Accordion.Body>
                    <p>Amor</p>
                    <p>Alegría</p>
                    <p>Respeto</p>
                    <p>Creatividad</p>
                    <p>Perseverancia</p>
                    <p>Responsabilidad</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h2>SELLOS EDUCATIVOS</h2></Accordion.Header>
                    <Accordion.Body>
                    <p>Educación cristiana con Jesús como modelo educador.</p>
                    <p>Educación inclusiva al servicio de la comunidad educativa.</p>
                    <p>Educación técnico profesional con orientación  emprendedora.</p>
                    <p>Educación con sello verde.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}
export default MisionVision;