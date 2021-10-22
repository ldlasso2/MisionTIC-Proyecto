import React, { useState } from 'react'
import { createUser } from '../services/UsersService'
import { useHistory } from 'react-router-dom';

const initialValue = {
  fullName: '',
  email: '', 
  password: ''
}

function Signup() {
  const [newUser, setNewUser] = useState(initialValue)
  const { fullName, email, password } = newUser

  let history = useHistory();

  const onValueChange = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  const registerUser = async () => {
      let response = await createUser(newUser);
      if (response.status === 201) {
          history.push('/login')
      }
      else {
          console.error('Error creating user' + response.data.error);
      }
  }
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6 ">
          <div >
            <form>
              <h3 class="fw-normal mb-3 pb-3" >Crear una cuenta</h3>
              <div class="form-outline mb-4">
                <label >Nombre completo</label>
                <input class="form-control form-control-md" value={fullName} name="fullName" onChange={(e) => onValueChange(e)} label="fullName" fullWidth autoFocus required  />
                
              </div>
              <div class="form-outline mb-4">
                <label >Email</label>
                <input class="form-control form-control-md" value={email} name="email" onChange={(e) => onValueChange(e)} label="Email" type="email" fullWidth autoFocus required  />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example28">Contraseña</label>
                <input class="form-control form-control-md" value={password} name="password" onChange={(e) => onValueChange(e)} label="Password" type="password" fullWidth required />
            
              </div>

              <div class="pt-1 mb-4">
                <button class="btn btn-info btn-lg btn-block" onClick={() => registerUser()}  type="button">Registrarse</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
