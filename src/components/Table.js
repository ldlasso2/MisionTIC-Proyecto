import React from 'react'

function Table(props) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Código venta</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio unidad</th>
            <th scope="col">Fecha</th>
            <th scope="col">Cliente</th>
            <th scope="col">Vendedor</th>
            <th scope="col">Total venta</th>
            <th scope="col">Acciones </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>0001</th>
            <td>Buso</td>
            <td>1</td>
            <td>42000</td>
            <td>21/09/2021</td>
            <td>Pepita perez</td>
            <td>Fulanito</td>
            <td>42000</td>
            <td><a href="ventamodificada.html"><button class="btn btn-success">Modificar</button></a></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Table
