import React, { useState } from 'react';
import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';
import { RadioGroup,FormControlLabel,Radio  } from '@material-ui/core';

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
        <div class="form-group row mr-0">
          <label className="col-sm-2 col-form-label">Descripción</label>
          <div className="col-sm-10">
            <RadioGroup
                        name='estado'
                        onChange={(e) => onStateChange(e.target.value === "disponible")}
                        aria-label="estado"
                        defaultValue="disponible"
                        value={estado ? "disponible" : "noDisponible"}>
                        <FormControlLabel value="disponible" control={<Radio />} label="Disponible" />
                        <FormControlLabel value="noDisponible" control={<Radio />} label="No Disponible" />
                    </RadioGroup>
          </div>
        </div>
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
