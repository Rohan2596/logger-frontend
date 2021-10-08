import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch } from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route path="/dashboard" component= {Dashboard}/>
    
     </BrowserRouter> 
    
    </div>
  );
}

export default App;
