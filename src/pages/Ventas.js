import React from 'react'
import Form from '../components/Form'
import Menu from '../components/Menu'
import Table from '../components/Table'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from '../components/Search';

function Ventas() {
  return (
    <div className="ventas-container">
      <Router>
        <div class = "row">
          <div class = "col-4">
            <Menu objetos="ventas"/>
          </div>
          <div class = "col-8">
            <Switch>
              <Route path = "/ventas/buscar">
                <Search title ="Busqueda ventas" />
              </Route>
              <Route path="/ventas/registrar">
                <Form  title = "Registrar nueva venta" field1 = "Código producto"/>
              </Route>
              <Route path="/ventas">
                <Table/>
              </Route>
              
            </Switch>

          </div>
        </div>

      </Router>
      
    </div>
  )
}

export default Ventas