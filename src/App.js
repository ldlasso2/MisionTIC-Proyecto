import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ventas from './pages/Ventas.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route path="/ventas" component={Ventas} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
