import React from 'react'

function Table() {
  return (
    <div class="card">
      <div class="card-header"> Registrar nueva venta </div>
      <div class="card-body">
        <form />
          <div class="row">
            <div class="col">
              <label>Código producto</label>
              <input type="codigoproducto" class="form-control" placeholder="000-000" />
            </div>
            <div class="col">
              <label >Cantidad producto</label>
              <input type="cantidadproducto" class="form-control" placeholder="1" />
            </div>
            <div class="col">
              <label for="inputEmail4">Precio producto (Unitario)</label>
              <input type="preciounitario" class="form-control" placeholder="1000" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="inputEmail4">Documento cliente</label>
              <input type="documentocliente" class="form-control" />
            </div>
            <div class="col">
              <label for="inputEmail4">Nombre cliente</label>
              <input type="nombrecliente" class="form-control" />
            </div>
            <div class="col">
              <label for="inputEmail4">Vendedor</label>
              <input type="vendedor" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Fecha</label>
              <input type="Fecha" class="form-control" />
            </div>
            <div class="col">
              <label for="valorttotal">Valor total</label>
              <input type="valortotal" class="form-control" />
            </div>
            <div class="col">
              <a href="ventacreada.html" class="btn btn-primary"><button type="button" class="btn btn-primary">Guardar</button></a>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Table
