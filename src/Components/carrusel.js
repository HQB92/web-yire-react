import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Carrusel extends React.Component {

    render() {
        return (
            <div className='container-fluid carrusel' >
                <div className="col-12">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://yireliceo.com/wp/wp-content/uploads/2021/03/78490808_1316812538499002_3237427548929392640_o-2.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://yireliceo.com/wp/wp-content/uploads/2021/03/76762661_1316811378499118_2274042461468753920_o-2.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://yireliceo.com/wp/wp-content/uploads/2021/03/76732954_1316812801832309_1690216557512228864_o-2-1.jpg"
                            alt="Third slide"
                            />

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