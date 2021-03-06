import React, { useState, useEffect } from 'react'
import { getProducts, deleteProduct } from '../../services/ProductService';
import { Link } from 'react-router-dom';
//import { getCurrentUser } from '../services/AuthService';

function ProductTable() {

    const [products, setProducts] = useState([])
  
    useEffect(() => {
      getAllProducts();
      //setUser(getCurrentUser());
    }, [])
    const getAllProducts = async () => {
      let response = await getProducts();
      console.log(response);
      setProducts(response.data.data);
    }
  
    const deleteProductData = async (id) => {
      let callbackUser = window.confirm('Esta seguro de elimar el producto');
      if (callbackUser) {
          await deleteProduct(id);
          getAllProducts();
      }
    }
    return (
      <div class="card mr-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Descripción</th>
              <th scope="col">Valor</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>

            </tr>
          </thead>
          <tbody>
            
            {
                products.map(product =>(

                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.descripcion}</td>
                    <td>{product.valor}</td>
                    <td>{product.estado ? "Disponible":"Agotado"}</td>
                                    

                    <td>
                      <Link className = "btn btn-success mr-2" to = {`/productos/editar/${product._id}`}>Editar </Link> 
                      <button className="btn btn-warning" onClick={() => deleteProductData(product._id)} >Eliminar</button>
                    </td>

                  </tr>
  
                ))
              }

          </tbody>
        </table>
    </div>  

    )
}


export default ProductTable
