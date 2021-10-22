import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/ventas">Ventas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos"> Productos </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
