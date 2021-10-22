import React, { useState, useEffect } from 'react';
import { addSale } from '../services/SaleService';
import { useHistory } from 'react-router-dom';

const initialValue = {
  valor: '',
  nombreCliente: '',
  idCliente: '',
  idVendedor:'',
  productos: [],
}

function SaleForm() {
  const [sale,setSale] = useState(initialValue);
    const {valor,nombreCliente,idCliente,idVendedor,productos} = sale;

  let history = useHistory();

  const onValueChange = (e) => {
      setSale({ ...sale, [e.target.name]: e.target.value });
  }
  const addSaleData = async () => {
    await addSale(sale);
    history.push('/ventas');
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


        <div class="form-group row mr-0">
          <label className="col-sm-2 col-form-label">Productos</label>
          <div className="col-sm-10">
            <input className="form-control" onChange={(e) => onValueChange(e)} name="producto" value={productos} id="my-input"  />
          </div>
        </div>
        
        <div class="row mb-2">
          <div class="col">
            <button type="button" class="btn btn-primary" onClick={(e) => addSaleData()}>Guardar</button>
          </div>
        </div>
      </form>
    
  </div>
  )
}

export default SaleForm
