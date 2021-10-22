import React from 'react'
import Form from '../components/Form'
import Menu from '../components/Menu'
import Table from '../components/Table'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from '../components/Search';
import ProductTable from '../components/ProductTable';
import ProductForm from '../components/ProductForm'
import EditProduct from '../components/ProductEdit'
function Ventanas(props) {
  return (
    <div className="ventanas-container">
      <Router>
        <div class = "row">
          <div class = "col-4">
            <Menu objetos={props.objeto}/>
          </div>
          <div class = "col-8">
            <Switch>
            <Route exact path="/productos/editar/:id" component={EditProduct} />
              <Route path = {"/"+ props.objeto + "/buscar"}>
                <Search title = {"Busqueda" + props.objeto} />
              </Route>
              <Route path= {"/"+ props.objeto + "/registrar"}>
                {(props.objeto === "ventas" && <Form/>) || (props.objeto === "productos" && <ProductForm/>) || (props.objeto === "usuarios" && <Table />)}
              </Route>
              <Route path= {"/"+ props.objeto}>
                <ProductTable/>
              </Route>
              
            </Switch>

          </div>
        </div>

      </Router>
      
    </div>
  )
}

export default Ventanas
