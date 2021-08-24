import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js';

import Navegacion from './components/navegation';
import Main from './components/main';
import Validar from './components/validarcuenta';
import Completar from './components/completaregistro';
import Principal from './components/principal';
import Perfil from './components/perfil';

import Mensajeria from './components/mensajeria';
import Marketplace from './components/Marketplace';
import Eventos from './components/Eventos';
import Grupos from './components/groups';
import './css/App.css'

import Mensajes from './components/messages';

function App() {
  return (

    <Router>

      <Navegacion/>

      <div className="container"  >

        <Route path="/" exact component={Main} />
        <Route path="/principal" component={Principal} />
        <Route path="/validarcuenta" component={Validar} />
        <Route path="/completar_registro" component={Completar} />
      
        <Route path ="/marketplace" component={Marketplace}/>       
        <Route path ="/eventos" component={Eventos}/>
        <Route path="/grupos" component={Grupos} />        
        <Route path="/perfil/:id" component={Perfil} />

          
      </div>
      <Route path="/messages" component={Mensajes} />

      <Route path="/mensajeria/:id" component={Mensajeria} />
      
    </Router>

  );
}

export default App;
