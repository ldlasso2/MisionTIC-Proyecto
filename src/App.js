import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ventas from './pages/Ventas.js';
import Usuarios from './pages/Usuarios';
import Ventanas from './pages/Ventanas.js';

import ProductTable from './components/ProductTable';
import React,{useEffect, useState} from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <Switch>
            <Route path="/ventas">
              <Ventanas objeto="ventas" />
            </Route>
            <Route exact path="/productos"> 
              <Ventanas objeto="productos" />
            </Route>
            
            <Route path="/usuarios">
              <Ventanas objeto="usuarios" />
            </Route>
            {/* <Route path="/usuarios" component={Usuarios} /> */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
