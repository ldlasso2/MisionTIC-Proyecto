import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from '../components/Form'
import Menu from '../components/Menu'
import Table from '../components/Table'
import Search from '../components/Search';
function Usuarios() {
  return (
    <div className="usuarios-container">
      <Router>
      <div class = "row">
          <div class = "col-4">
            <Menu objetos="usuarios"/>
          </div>
          <div class = "col-8">
            <Switch>
              <Route path = "/usuarios/buscar">
                <Search title ="Busqueda usuarios" />
              </Route>
              <Route path="/usuarios/registrar">
                <Form title = "Registrar nuevo usuario" field1 = "Nombre del usuario"/>
              </Route>
              <Route path="/usuarios">
                <Table />
              </Route>
              
            </Switch>

          </div>
        </div>

      </Router>
    </div>
  )
}

export default Usuarios
