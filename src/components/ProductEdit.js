import React, { useState, useEffect } from 'react';
import { editProduct, getProduct } from '../services/ProductService';
import { useHistory, useParams } from 'react-router-dom';
//import { verifyToken } from '../services/AuthService'

const initialValue = {
  valor: '',
  descripcion: '',
  estado: true,
}

function ProductEdit() {
  const [product, setProduct] = useState(initialValue);
    const { valor, descripcion, estado } = product;
    
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        //verifyToken();
        loadProductData();
    }, [])

    const loadProductData = async () => {
        let response = await getProduct(id);
        console.log(response)
        setProduct(response.data.data);
    }

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProduct({ ...product, "estado": state });
    }

    const updateProductData = async () => {
        await editProduct(product);
        history.push('/productos');
    }


  return (
  <div class="card">

      <form>
        <br/>
        <div class="form-group row">
          <label className="col-sm-2 col-form-label">Descripción</label>
          <div className="col-sm-10">
            <input className="form-control" onChange={(e) => onValueChange(e)} name="descripcion" value={descripcion} id="my-input"  />
          </div>
        </div>
        <br/>
        <div class="form-group row">
          <label className="col-sm-2 col-form-label">Valor</label>
          <div className="col-sm-10">
            <input className="form-control" onChange={(e) => onValueChange(e)} name="valor" value={valor} id="my-input"  />
          </div>
        </div>
        <fieldset class="form-group">
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

        <div class="row">
          <div class="col">
            <button type="button" class="btn btn-primary" onClick={(e) => updateProductData()}>Guardar</button>
          </div>
        </div>
      </form>
    
  </div>

  )
}


export default ProductEdit
