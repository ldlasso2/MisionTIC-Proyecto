import React, { useState, useEffect } from 'react';
import { editProduct, getProduct } from '../../services/ProductService';
import { useHistory, useParams } from 'react-router-dom';
import { RadioGroup,FormControlLabel,Radio  } from '@material-ui/core';
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
  <div class="card mr-5">

      <form>
        <br/>
        <div class="form-group row mr-0">
          <label className="col-sm-2 col-form-label">Descripción</label>
          <div className="col-sm-10">
            <input className="form-control" onChange={(e) => onValueChange(e)} name="descripcion" value={descripcion} id="my-input"  />
          </div>
        </div>
        <br/>
        <div class="form-group row  mr-0">
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
