import React, { useState, useEffect } from 'react'
import {getSale,deleteSale} from '../../services/SaleService';
import { Link } from 'react-router-dom';


function SalesSearch() {
  const [user, setUser] = useState([])
  const [sales,setSales] = useState([]);
  const [idSearch,setSearch] = useState("");

  const loadSaleData = async() => {
    let response = await getSale(idSearch);
    setSales(response.data.data)

  }

  const handleChange = e => {
    setSearch(e.target.value);
    console.log(idSearch)
  };
  const deleteProductData = async (id) => {
    let callbackUser = window.confirm('Esta seguro de elimar el producto');
    if (callbackUser) {
        await deleteSale(id);
    }
  }
  return (
    <div>
      <div className = "card">
        <div className = "card-header"> Buscar venta </div>
        <div className = "card-body">
          <form>
            <div className = "row">
              <div className = "col">
                <label>Palabra de busqueda</label>
                <input className="form-control" type="text" onChange={handleChange} name="idSearch" id="my-input" />
              </div>
                <div className = "col">
                  <div className = "form">
                      <div className = "col">
                        <label>Busqueda por</label>
                          <select className = "custom-select" id="inlineFormCustomSelect">
                            <option selected>Id de la venta</option>
                            <option selected>Id del vendedor</option>
                            <option>Valor</option>
                          </select>
                      </div>
                    </div>
                </div>
            </div>
            <div className = "col-8" id = "elemento">
              <button className = "btn btn-primary small" onClick={loadSaleData()}> Buscar </button>
            </div>          
          </form>     
        </div>
      </div>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Valor</th>
              <th scope="col">Cliente</th>
              <th scope="col">Id vendedor</th>
              <th scope="col">Acciones</th>

            </tr>
          </thead>
          <tbody>
            
            {
                sales.map(sale =>(

                  <tr key={sale._id}>
                    <td>{sale._id}</td>
                    <td>{sale.valor}</td>
                    <td>{sale.nombreCliente}</td>
                    <td>{sale.idVendedor}</td>
                    
                    {user
                                    &&

                                    (<td>
                                      <Link className = "btn btn-success mr-2" to = {`/ventas/editar/${sale._id}`}>Editar </Link> 
                                      <button className="btn btn-warning" onClick={() => deleteProductData(sale._id)} >Eliminar</button>
                                    </td>)
                                }
                  </tr>
  
                ))
              }

          </tbody>
        </table>
    </div>
  )
}

export default SalesSearch
