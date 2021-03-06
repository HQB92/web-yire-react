import React from 'react';
import { Container, CardGroup, Card, Button, Col, Row } from 'react-bootstrap';
import imagen1 from "../img/noticias/18sep.png"
import imagen2 from "../img/noticias/classroom.png"
import imagen3 from "../img/noticias/admin.png"
import imagen4 from "../img/noticias/explora.jpg"
const Noticias = () => {
    return(
        <Container >
            <CardGroup  >
                <Row xs={1} md={3} className="g-4">
                    <Col className="fluid-paddin col-especial " >
                        <Card className="h-100">
                        <Card.Img variant="top" src={imagen4} />
                            <Card.Body>
                            <Card.Title>TODO CHILE CELEBRA LA XX SEMANA NACIONAL DE LA CIENCIA Y LA TECNOLOGÍA</Card.Title>
                            <Card.Text>
                                <p>La Semana Nacional de la Ciencia y la Tecnología se realiza cada año en todo el país, impulsada por la Comisión Nacional de Investigación Científica y Tecnológica, CONICYT, a través de su Programa EXPLORA y diversas instituciones colaboradoras. Su objetivo es generar espacios de participación para la comunidad y el desarrollo de actividades que releven la presencia de la ciencia y la tecnología en el mundo actual.</p>
                            </Card.Text>
                            <Button href="https://www.conicyt.cl/explora/todo-chile-celebra-la-xx-semana-nacional-de-la-ciencia-y-la-tecnologia/"  target="_blank" variant="primary">Información</Button>{' '}
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Publicado el 05-10</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="fluid-paddin col-especial" >
                        <Card className="h-100">
                            <Card.Img variant="top" src={imagen1} />
                            <Card.Body>
                            <Card.Title>18 de septiembre</Card.Title>
                            <Card.Text>
                                <p>Exactamente el 18 de septiembre es la fecha en que se conmemora en el país el hito histórico de la creación de la
                                Primera Junta Nacional de Gobierno. Este hecho fue el inicio de un proceso de independencia para Chile, ya que comenzaba
                                su emancipación de España en el año 1810.</p>

                                <p>En relación con lo anterior, los días 18 y 19 de septiembre son feriados en todo el territorio nacional, para que no falte
                                ningún tipo de celebración en las denominadas fiestas patrias.</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Publicado el 06-09</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="fluid-paddin col-especial" >
                        <Card className="h-100">
                            <Card.Img variant="top" src={imagen2} />
                            <Card.Body>
                            <Card.Title>Google Classroom </Card.Title>
                            <Card.Text>
                                <p>Google Classroom es una herramienta creada por Google en 2014, y destinada exclusivamente al mundo educativo. … Esta herramienta 
                                de Google permite gestionar las clases online, y puede utilizarse tanto para el aprendizaje presencial, también para el aprendizaje 
                                100% a distancia, o incluso para el aprendizaje mixto.
                                </p>
                                <p> Ven y aprende a entrar e tus nuevas clases online.</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Publicado el 06-09</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="fluid-paddin col-especial " >
                        <Card className="h-100">
                        <Card.Img variant="top" src={imagen3} />
                            <Card.Body>
                            <Card.Title>Sistema de Admisión Escolar</Card.Title>
                            <Card.Text>
                                <p>Plataforma del Gobierno de Chile para postular a nuestro colegio y encontrar información necesaria para el proceso de admisión.
                                desde el 12 de agosto hasta el 8 de septiembre.</p>
                            </Card.Text>
                            <Button href="https://www.sistemadeadmisionescolar.cl/"  disabled  variant="primary">Postular</Button>{' '}
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Publicado el 06-09</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>
        </Container>
    )
}
export default Noticias;