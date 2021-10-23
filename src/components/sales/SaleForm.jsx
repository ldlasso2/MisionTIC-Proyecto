import React, { useState, useEffect } from 'react';
import { addSale } from '../../services/SaleService';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../../services/ProductService';

const initialValue = {
  valor: '',
  nombreCliente: '',
  idCliente: '',
  idVendedor:'',
  productos: [],
}
const initialValueProduct = {
  _id: '',
  cantidad: 0
}

function SaleForm() {

  const history = useHistory();
  const [user, setUser] = useState(null)

  useEffect(() => {
      loadProductsData();
  }, [])

  const [products, setProducts] = useState([]);
  const [sale, setSale] = useState(initialValue);
  const [newProduct, setNewProduct] = useState(initialValueProduct);

  const [creatingProductState, setCreatingProductState] = useState('minimizado');

  const { productos, fecha, valor, nombreCliente, idCliente, idVendedor } = sale;

  const onValueChange = (e) => {
      setSale({ ...sale, [e.target.name]: e.target.value });
  }

  const onValueNewProductChange = (e) => {
      if (e.target.name === "_id") {
          let product = products.find(product => product._id === e.target.value)
          let newProductCopy = newProduct;
          newProductCopy.descripcion = product.descripcion;
          setNewProduct(newProductCopy);
      }
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });


  }

  const loadProductsData = async () => {
      let response = await getProducts();
      setProducts(response.data.data);
  }

  const addProduct = (newProduct) => {
      let productsCopy = productos
      productsCopy.push(newProduct)
      setSale({ ...sale, productos: productsCopy });
      setNewProduct(initialValueProduct);
      changeStateCreateProductForm('minimizado');
  }

  const addSaleData = async () => {
      let response = await addSale(sale);
      if (response.status === 201) {
          history.push('/ventas');
      }
  }

  const deleteProduct = (id) => {
      let productsCopy = productos.filter(product => product._id !== id);
      setSale({ ...sale, productos: productsCopy });
  }

  const changeStateCreateProductForm = (state) => {
      setCreatingProductState(state);
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
      <label className> Productos</label>
      <table className="table mb-5">
        
        <thead>
            <tr>
              <th>
                Id {creatingProductState === 'desplegado' &&
                    (
                        <>
                            :<select
                                name="_id"
                                value={newProduct._id}
                                label="Id"
                                onChange={(e) => onValueNewProductChange(e)}>
                                {
                                    products.map(product => (
                                        <option value={product._id}>{product._id}</option>
                                    ))
                                }
                              </select>
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
                Descripción {creatingProductState === 'desplegado' &&
                                    (<>: {newProduct.descripcion}</>)
                                }
              </th>
              <th>
              { creatingProductState === 'minimizado' && (
                                <button type="button" class="btn btn-success" onClick={() => changeStateCreateProductForm('desplegado') } >Agregar</button>
                            )}
                            { creatingProductState === 'desplegado' && (
                                <button  type="button" class="btn btn-success" onClick={() => addProduct(newProduct)  } >+</button>
                            )}
              </th>
            </tr>
        </thead>
        <tbody>
        {
          sale.productos.map(product => (
              <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.cantidad}</td>
                  <td>{product.descripcion}</td>
                  <td>
                      <button variant="contained" class="btn btn-warning" color="secondary" onClick={() => deleteProduct(product._id)} >X</button>
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
