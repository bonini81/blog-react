import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Routes from './Routes';

function App() {
  return (
    <React.Fragment>
      
      <Router>
      <Navigation />
      <Switch> 
    
    { Routes }
 
  </Switch>

      </Router>
    
    </React.Fragment>
  );
}

export default App;
