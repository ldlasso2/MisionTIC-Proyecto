import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ventanas from './pages/Ventanas.js';
import { getCurrentUser } from './services/AuthService';
import React,{useEffect, useState} from 'react'
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    setUser(getCurrentUser());
  }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <Switch>
          <Route path="/registrarse" component={Signup}/>
          <Route path="/login" component={Login}/>
          {user &&  
            <Route path="/ventas">
              <Ventanas objeto="ventas" />
            </Route>}
          {user && 
            <Route exact path="/productos"> 
              <Ventanas objeto="productos" />
            </Route>}
          {user && 
            <Route path="/usuarios">
              <Ventanas objeto="usuarios" />
            </Route>
          }

          {!user && <Home/>
          
          }

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
