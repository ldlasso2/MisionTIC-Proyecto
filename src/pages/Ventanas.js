import React from 'react'
import Menu from '../components/Menu'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductTable from '../components/product/ProductTable';
import ProductForm from '../components/product/ProductForm'
import EditProduct from '../components/product/ProductEdit'
import SaleTable from '../components/sales/SaleTable'
import SaleForm from '../components/sales/SaleForm';
import SaleEdit from '../components/sales/SaleEdit';
import UserTable from '../components/users/UserTable';

function Ventanas(props) {
  return (
    <div className="ventanas-container">
      <Router>
        <div class = "row">
          <div class = "col-4">
            {(props.objeto === "ventas" && <Menu objetos={props.objeto}/>) || (props.objeto === "productos" && <Menu objetos={props.objeto}/>)}
          </div>
          <div class = "col-8">
            <Switch>
            <Route exact path="/productos/editar/:id" component={EditProduct} />
            <Route exact path="/ventas/editar/:id" component={SaleEdit} />
              <Route path= {"/"+ props.objeto + "/registrar"}>
                {(props.objeto === "ventas" && <SaleForm/>) || (props.objeto === "productos" && <ProductForm/>)}
              </Route>
              <Route path= {"/"+ props.objeto}>
                {(props.objeto === "ventas" && <SaleTable/>) || (props.objeto === "productos" && <ProductTable/>)|| (props.objeto === "usuarios" && <UserTable />)}
              </Route>
              
            </Switch>

          </div>
        </div>

      </Router>
      
    </div>
  )
}

export default Ventanas
