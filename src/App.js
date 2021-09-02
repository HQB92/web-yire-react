import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/header';
import Carrusel from './Components/carrusel';
import Footer from './Components/footer';
import Noticias from './Components/noticias';
import Classroom from './Components/classroom';

function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Carrusel></Carrusel>
            <Noticias></Noticias>
          </Route>
          <Route exact path='/classroom'>
            <Classroom></Classroom>

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;

