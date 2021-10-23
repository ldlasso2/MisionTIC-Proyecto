import React from 'react'
import Menu from '../components/Menu'
import Table from '../components/Table'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from '../components/Search';
import ProductTable from '../components/product/ProductTable';
import ProductForm from '../components/product/ProductForm'
import EditProduct from '../components/product/ProductEdit'
import SaleTable from '../components/sales/SaleTable'
import SaleForm from '../components/sales/SaleForm';
import SaleEdit from '../components/sales/SaleEdit';
import SalesSearch from '../components/sales/SalesSearch';
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
            <Route exact path="/ventas/editar/:id" component={SaleEdit} />
              <Route path = {"/"+ props.objeto + "/buscar"}>
              {(props.objeto === "ventas" && <Search/>) || (props.objeto === "productos" && <ProductForm/>) || (props.objeto === "usuarios" && <Table />)}
              </Route>
              <Route path= {"/"+ props.objeto + "/registrar"}>
                {(props.objeto === "ventas" && <SaleForm/>) || (props.objeto === "productos" && <ProductForm/>) || (props.objeto === "usuarios" && <Table />)}
              </Route>
              <Route path= {"/"+ props.objeto}>
                {(props.objeto === "ventas" && <SaleTable/>) || (props.objeto === "productos" && <ProductTable/>) || (props.objeto === "usuarios" && <Table />)}
              </Route>
              
            </Switch>

          </div>
        </div>

      </Router>
      
    </div>
  )
}

export default Ventanas
