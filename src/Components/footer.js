import React from "react"
import Logo  from '../img/logo-yire.png';
const Footer = () => {
    return(
        <div class="mt-5 pt-5 pb-5 footer">
            <div class="container">
            <div class="row">
                <div class="col-lg-3 col-xs-12 about-company logo">
                    <img
                    alt=""
                    src={Logo}
                    width="160px"
                    height="160px" />
                </div>
                <div class="col-lg-4 col-xs-12 links logo" >
                <h4 class="mt-lg-0 mt-sm-3">Correos</h4>
                    <ul class="m-0 p-0">
                    <li> <a href="mailto:">Directora</a></li>
                    <li> <a href="mailto:">PME</a></li>
                    <li> <a href="mailto:">Inspectora General</a></li>
                    <li> <a href="mailto:">Convivencia Escolar</a></li>
                    <li> <a href="mailto:">Claves Alumnos</a></li>
                    </ul>
                </div>
                <div class="col-lg-5 col-xs-12 location logo">
                <h4 class="mt-lg-0 mt-sm-4">Ubicación</h4>
                <p>Avenida San Martín 1841, Coihueco</p>
                <p class="mb-0"><i class="fa fa-phone mr-3"></i><a href="tel:422471093">42-2471093</a></p>
                <p><i class="fa fa-envelope-o mr-3"></i> <a href="mailto:info@yireliceo.com">info@yireliceo.com</a></p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col copyright logo">
                <p class="">
                    <small class="text-white-50">© 2021. Todos los derechos reservados - Departamento Informatica - By  
                    <a href="https://www.linkedin.com/in/hquinteros/"> Hugo Esteban</a>.
                    </small>
                </p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;