
import React from 'react';
import {Container, Card} from  'react-bootstrap'
import Entrada from "../img/colegio/entrada.png"
import Basica from "../img/colegio/basica.png"
const Historia = () => {
    return(
        <Container>
            <Card className=" text-white">
                <Card.Img src={Entrada} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><h1>Historia</h1></Card.Title>
                </Card.ImgOverlay>
            </Card>
            <p>Yire Liceo Politécnico de Coihueco fue fundado un 25 de Marzo de 2002 con el
                objetivo de brindar una nueva alternativa de Educación a los Jóvenes de la
                comuna. Su Representante Legal es la Señora Carola Sandoval Ferrada y su
                Directora la Señorita Jeannette Arancibia. Cuenta con una planta de 27 docentes
                titulados y 30 asistentes de la educación.
            </p>
                El año 2010, inicia su actividad académica Colegio Básico Yire, reconocida
                oficialmente por el estado según resolución exenta Nº2125, con cursos desde
                Prekinder hasta 4° Medio.
            <p>
                Actualmente se dicta la Especialidad de Elaboración Industrial de
                Alimentos, lo que permite a los
                jóvenes que se forman en esta institución, optar al Título de Técnico de Nivel
                Medio , entregando herramientas concretas
                para ingresar a la vida laboral con éxito, sin dejar de lado proyecciones futuras
                de estudios.
            </p>
            <p>
                En la Jornada Vespertina, cuenta con Primer y Segundo Ciclo de enseñanza
                Media de adultos.
            </p>
            <Card className=" text-white">
                <Card.Img src={Basica} alt="Card image" />
            </Card>
            <p>
                Su enseñanza está basada en sólidos principios cristianos y una formación
                integral, enfocadas en forjar personas de bien, con valores y preparados para
                los nuevos tiempos. Comprometidos con los principios bíblicos y con la vida y
                enseñanzas de Cristo, postulamos a educar en un ambiente de confianza,
                respeto, dignidad, entusiasmo y amor, donde cada miembro de la comunidad
                escolar desarrolle la conciencia de si y el valor de la vida, asumiendo
                responsabilidades y participando en la edificación de una sociedad más
                cristiana, justa y solidaria.
            </p>
        </Container>
    )
}
export default Historia;