import React from "react";
import LazyLoad from 'react-lazyload';
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
                            <LazyLoad>
                                <img
                                className="d-block w-100"
                                src={foto1}
                                alt="First slide"
                                />
                            </LazyLoad>    
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <LazyLoad>
                                <img
                                className="d-block w-100"
                                src={foto2}
                                alt="Second slide"
                                />
                            </LazyLoad> 
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <LazyLoad> 
                                <img
                                className="d-block w-100"
                                src={foto3}
                                alt="Third slide"
                                />
                            </LazyLoad> 
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    };
}

export default Carrusel;