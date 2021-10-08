import './App.css';
import User from '../src/pages/user';
import {BrowserRouter,Route,Switch } from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
       <User/>
     <BrowserRouter>
     <Route path="/dashboard" component= {Dashboard}/>
    
     </BrowserRouter> 
    
    </div>
  );
}

export default App;
