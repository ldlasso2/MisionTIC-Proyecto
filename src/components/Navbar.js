import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/">
                <a class="nav-link" href="/">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/ventas">
                <a class="nav-link" href="#!">Ventas</a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Usuarios</a>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
