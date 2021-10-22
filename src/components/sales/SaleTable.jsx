import React, { useState, useEffect } from 'react'
import { getSales, deleteSale } from '../../services/SaleService';
import { Link } from 'react-router-dom';
//import { getCurrentUser } from '../services/AuthService';

function SaleTable() {
    const [user, setUser] = useState([])
    const [sales, setSales] = useState([])
  
    useEffect(() => {
      getAllProducts();
      //setUser(getCurrentUser());
    }, [])
    const getAllProducts = async () => {
      let response = await getSales();
      console.log(response);
      setSales(response.data.data);
    }
  
    const deleteProductData = async (id) => {
      let callbackUser = window.confirm('Esta seguro de elimar el producto');
      if (callbackUser) {
          await deleteSale(id);
          getAllProducts();
      }
    }
    return (
      <div class="card mr-4">
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
                                      <button className="btn btn-success" onClick={() => deleteProductData(sale._id)} >Eliminar</button>
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


export default SaleTable
