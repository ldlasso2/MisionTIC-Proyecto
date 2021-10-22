import React, { useState, useEffect } from 'react';
import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';
//import { getCurrentUser } from '../services/AuthService';
//import { verifyToken } from '../services/AuthService';

const initialValue = {
  valor: '',
  descripcion: '',
  estado: true,
}

function ProductForm() {
  const [product, setProduct] = useState(initialValue);
    const { valor, descripcion, estado } = product;

   
    let history = useHistory();

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProduct({ ...product, "estado": state });
    }

    const addProductData = async () => {
        await addProduct(product);
        history.push('/productos');
    }

  return (
    <div className="card mr-5">
      <form>
        <br/>
        <div class="form-group row mr-0">
          <label className="col-sm-2 col-form-label">Descripción</label>
          <div className="col-sm-10 ">
            <input className="form-control" onChange={(e) => onValueChange(e)} name="descripcion" value={descripcion} id="my-input"  />
          </div>
        </div>
        <br/>
        <div class="form-group row mr-0">
          <label className="col-sm-2 col-form-label">Valor</label>
          <div className="col-sm-10">
            <input className="form-control" onChange={(e) => onValueChange(e)} name="valor" value={valor} id="my-input"  />
          </div>
        </div>
        <fieldset class="form-group" onChange={(e) => onStateChange(e.target.value === "disponible")}>
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Estado</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                  <label class="form-check-label" for="gridRadios1">
                    Disponible
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                  <label class="form-check-label" for="gridRadios2">
                    No Disponible
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

        <div class="row  mb-2">
          <div class="col">
            <button type="button" class="btn btn-primary" onClick={(e) => addProductData()}>Guardar</button>
          </div>
        </div>
      </form>
    
  </div>

  )
}


export default ProductForm
