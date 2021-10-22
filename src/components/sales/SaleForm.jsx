import React, { useState, useEffect } from 'react';
import { addSale } from '../../services/SaleService';
import { useHistory } from 'react-router-dom';

const initialValue = {
  valor: '',
  nombreCliente: '',
  idCliente: '',
  idVendedor:'',
  productos: [],
}
const initialValueProduct = {
  _id: '',
  valor: 0,
  cantidad: 0
}

function SaleForm() {

  const [sale,setSale] = useState(initialValue);
  const {valor,nombreCliente,idCliente,idVendedor,productos} = sale;

  const [newProduct, setNewProduct] = useState(initialValueProduct);
  const [creatingProductState, setCreatingProductState] = useState('minimizado');

  let history = useHistory();

  const onValueChange = (e) => {
      setSale({ ...sale, [e.target.name]: e.target.value });
  }

  const onValueNewProductChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  
  }
  const addProduct = (newProduct) => {
        let productsCopy = productos
        productsCopy.push(newProduct)
        setSale({ ...sale, productos: productsCopy });
        setNewProduct(initialValueProduct);
        changeStateCreateProductForm('minimizado');
    }
  const addSaleData = async () => {
    await addSale(sale);
    history.push('/ventas');
  }
  
  const changeStateCreateProductForm = (state) => {
    setCreatingProductState(state);
  }
  
  const deleteProduct = (id) => {
    let productsCopy = productos.filter(product => product._id !== id);
    setSale({ ...sale, productos: productsCopy });
}
  return (
    <div className="card mr-5">
      <form>
        <br/>
        <div class="form-group row mx-0">
          <div className="col ">
            <label>Nombre del Cliente</label>
            <input className="form-control" onChange={(e) => onValueChange(e)} name="nombreCliente" value={nombreCliente} id="my-input"  />
          </div>
          <div className="col ">
            <label>Identificación del cliente</label>
            <input className="form-control" onChange={(e) => onValueChange(e)} name="idCliente" value={idCliente} id="my-input"  />
          </div>
        </div>
        <br/>
        <div class="form-group row mx-0">
          <div className="col ">
            <label> Identificación del vendedor</label>
            <input className="form-control" onChange={(e) => onValueChange(e)} name="idVendedor" value={idVendedor} id="my-input"  />
          </div>
          <div className="col ">
            <label>Valor total</label>
            <input className="form-control" onChange={(e) => onValueChange(e)} name="valor" value={valor} id="my-input"  />
          </div>
        </div>
      </form>
      <div class="form-group row mr-0">
          <label className="col-sm-2 col-form-label">Productos</label>
          <div className="col-sm-10">
            <input className="form-control" onChange={(e) => onValueChange(e)} name="producto" value={productos} id="my-input"  />
          </div>
        </div>
      <table>
        <thead>
            <tr>
              <th>
                Id {creatingProductState === 'desplegado' &&
                                      (
                                          <>
                                              :<input
                                                  onChange={(e) => onValueNewProductChange(e)}
                                                  value={newProduct._id}
                                                  type="text" 
                                                  name="_id"/>
                                          </>
                                      )
                                  }
              </th>
              <th>
                Cantidad {creatingProductState === 'desplegado' &&
                                      (
                                          <>
                                              :<input
                                                  onChange={(e) => onValueNewProductChange(e)}
                                                  value={newProduct.cantidad}
                                                  type="text" 
                                                  name="cantidad"/>
                                          </>
                                      )
                                  }
              </th>
              <th>
              { creatingProductState === 'minimizado' && (
                                <button variant="contained" onClick={() => changeStateCreateProductForm('desplegado')} >Agregar</button>
                            )}
                            { creatingProductState === 'desplegado' && (
                                <button variant="contained" onClick={() => addProduct(newProduct)  } >+</button>
                            )}
              </th>
            </tr>
        </thead>
        <tbody>
          {
                              sale.productos.map(product => (
                                  <tr key={product._id}>
                                      <td>{product._id}</td>
                                      <td>{product.valor}</td>
                                      <td>{product.cantidad}</td>
                                      <td>
                                          <button variant="contained" color="secondary" onClick={() => deleteProduct(product._id)} >X</button>
                                      </td>
                                  </tr>
                              ))
                          }
        </tbody>
      </table>
        
        <div class="row mb-2">
          <div class="col">
            <button type="button" class="btn btn-primary" onClick={(e) => addSaleData()}>Guardar</button>
          </div>
        </div>

    
  </div>
  )
}

export default SaleForm
