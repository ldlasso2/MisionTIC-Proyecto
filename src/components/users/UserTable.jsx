import React, { useState, useEffect } from 'react'
import { getUsers } from '../../services/UsersService';

function UserTable() {
      const [sales, setSales] = useState([])
    
      useEffect(() => {
        getAllUsers();
      }, [])

      const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response);
        setSales(response.data.data);
      }
    
      return (
        <div class="card mr-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">email</th>
  
              </tr>
            </thead>
            <tbody>
              
              {
                  sales.map(sale =>(
  
                    <tr key={sale._id}>
                      <td>{sale._id}</td>
                      <td>{sale.fullName}</td>
                      <td>{sale.email}</td>
                    </tr>
    
                  ))
                }
  
            </tbody>
          </table>
      </div>  
  
      ) 
}


export default UserTable
