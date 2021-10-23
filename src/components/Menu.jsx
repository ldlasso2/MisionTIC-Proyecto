import React from 'react'
import {Link} from 'react-router-dom'

function Menu(props) {
  let url = props.objetos;
  return (
    <div class="list-group">
      <ul>
        <li class="list-group-item list-group-item-action">
          <Link to= {"/"+props.objetos}>
            Lista de {props.objetos}
          </Link>
        </li>
        <li class="list-group-item list-group-item-action">
          <Link to= {"/"+ url + "/registrar"}>
            Registrar {props.objetos}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
