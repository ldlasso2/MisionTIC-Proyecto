import React, { useState } from 'react'
import { Paper, Grid, TextField, makeStyles, Button, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { loginAuth } from '../services/AuthService';

const initialValue = {
  email: '',
  password: ''
}
function Login() {
  const [credentials, setCredentials] = useState(initialValue)

  const {email, password} = credentials


  const onValueChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const startLogin = async () => {
    let response = await loginAuth(credentials);
    if(response.status === 200){
        let token = response.data.token;
        localStorage.setItem('token',token);
        window.location = "/ventas";
    }
  }
  return (
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6 ">
        <div >
          <form>
            <h3 class="fw-normal mb-3 pb-3" >Iniciar sesión</h3>
            <div class="form-outline mb-4">
              <label >Email</label>
              <input class="form-control form-control-md" value={email} name="email" onChange={(e) => onValueChange(e)} label="Email" type="email" fullWidth autoFocus required  />
              
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example28">Contraseña</label>
              <input class="form-control form-control-md" value={password} name="password" onChange={(e) => onValueChange(e)} label="Password" type="password" fullWidth required />
          
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" onClick={() => startLogin()}  type="button">Ingresar</button>
            </div>
          </form>

        </div>

      </div>
    </div>
  </div>
  )
}

export default Login
