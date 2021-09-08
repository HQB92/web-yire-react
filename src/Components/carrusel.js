import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from "../img/carrusel/1.png"
import foto2 from "../img/carrusel/2.png"
import foto3 from "../img/carrusel/3.png"

class Carrusel extends React.Component {
    render() {
        return (
            <div className='container-fluid carrusel' >
                <div className="col-12">
                    <Carousel fade>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={foto1}
                                alt="First slide"
                                />
                            <Carousel.Caption >
                                <h3 className="text-carrusel">En Contruccion</h3>
                                <p className="text-carrusel">Pronto mas actualizaciones para nuestra pagina web.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={foto2}
                                alt="Second slide"
                                />
                            <Carousel.Caption >
                                <h3 className="text-carrusel">En Contruccion</h3>
                                <p className="text-carrusel">Pronto mas actualizaciones para nuestra pagina web.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={foto3}
                                alt="Third slide"
                                />
                            <Carousel.Caption >
                                <h3 className="text-carrusel">En Contruccion</h3>
                                <p className="text-carrusel">Pronto mas actualizaciones para nuestra pagina web.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    };
}

export default Carrusel;