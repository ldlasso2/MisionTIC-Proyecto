import React, { useState, useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { getCurrentUser } from '../services/AuthService';

const initialValue = {
  email: ""
}

function Navbar() {
  const [user, setUser] = useState(initialValue);


  useEffect(() => {
      setUser(getCurrentUser());
  }, []);

  const logout = () => {
      localStorage.clear();
      window.location = "/";
  }
  return (
    <div>
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
        <form class="form-inline ">
        {!user && 
          <Link to="/registrarse" className="link">
          <button className="btn btn-outline-info mr-3" type="submit">Registrarse</button>
          </Link> }

        {!user && 
          <Link to="/login" className="link">
          <button className="btn btn-outline-info" type="submit">Iniciar sesión</button>
          </Link> 
          
        }
        {user &&

          <button className="btn btn-outline-info" onClick={() => logout()} type="submit">Cerrar sesión</button>
        }
        </form>
      </nav>
      
    </div>
  )
}

export default Navbar
