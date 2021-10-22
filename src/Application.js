import React from 'react'
import ProductTable from './components/ProductTable'
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Application() {
  return (
  <div className="Application">
      <BrowserRouter>
        <Navbar />
        <br />
        <Switch>
            <Route exact path="/productos" component={ProductTable} />
        </Switch>
      </BrowserRouter>
      
  </div>
  )
}

export default Application
