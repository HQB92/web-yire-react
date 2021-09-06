import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/header';
import Carrusel from './Components/carrusel';
import Footer from './Components/footer';
import Noticias from './Components/noticias';
import Classroom from './Components/classroom';
import PreHeader from './Components/pre-header';
import EnContruccion from './Components/encontruccion';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className="body-panddin">
      <Router>
        <PreHeader></PreHeader>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Carrusel></Carrusel>
            <Noticias></Noticias>
          </Route>
          <Route path='.*'>
            <EnContruccion></EnContruccion>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Container>
  );
}

export default App;

