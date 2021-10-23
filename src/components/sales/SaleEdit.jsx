import React, { useState, useEffect } from 'react';
import { editSale, getSale } from '../../services/SaleService';
import { useHistory, useParams} from 'react-router-dom';
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
  valor: 0,
  descripcion: '',
  cantidad: 0
}
function SaleEdit() {
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
      loadProductsData();
  }, [])

  const [products, setProducts] = useState([]);
  const [sale, setSale] = useState(initialValue);
  const [newProduct, setNewProduct] = useState(initialValueProduct);

  const [creatingProductState, setCreatingProductState] = useState('minimizado');

  const { productos, valor, nombreCliente, idCliente, idVendedor } = sale;

  const loadSaleData = async () => {
      let response = await getSale(id);
      setSale(response.data.data);
  }

  const loadProductsData = async () => {
      let response = await getProducts();
      setProducts(response.data.data);
      loadSaleData();
  }

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

  

  const addProduct = (newProduct) => {
      let productsCopy = productos
      productsCopy.push(newProduct)
      setSale({ ...sale, productos: productsCopy });
      setNewProduct(initialValueProduct);
      changeStateCreateProductForm('minimizado');
  }

  const editSaleData = async () => {
      let response = await editSale(sale);
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
              Valor {creatingProductState === 'desplegado' &&
                                    (
                                        <>
                                            :<input
                                                onChange={(e) => onValueNewProductChange(e)}
                                                value={newProduct.valor}
                                                type="text"
                                                name="valor" />
                                        </>
                                    )
                                }
              </th>
              <th>
                Cantidad: {creatingProductState === 'desplegado' &&
                            (
                                <>
                                    :<input
                                        onChange={(e) => onValueNewProductChange(e)}
                                        value={newProduct.cantidad}
                                        type="text"
                                        name="cantidad" />
                                </>
                            )
                        }
              </th>
              <th>
                Descripcion {creatingProductState === 'desplegado' &&
                                    (<>: {newProduct.descripcion}</>)
                                }
              </th>
              <th>
                {creatingProductState === 'minimizado' && (
                                    <button variant="contained" class=" btn btn-primary" onClick={() => changeStateCreateProductForm('desplegado')} >Agregar</button>
                                )}
                                {creatingProductState === 'desplegado' && (
                                    <button variant="contained" onClick={() => addProduct(newProduct)} >+</button>
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
            <button type="button" class="btn btn-primary" onClick={(e) => editSaleData()}>Guardar</button>
          </div>
        </div>
      </form>
    
  </div>
  )
}

export default SaleEdit
