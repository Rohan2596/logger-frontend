import './App.css';
import User from '../src/pages/user';
import {BrowserRouter,Route,Switch } from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Switch>
     <Route exact path="/" component={User}></Route>
     <Route  path="/dashboard"><Dashboard/></Route>
     </Switch>
    
     </BrowserRouter> 
    
    </div>
  );
}

export default App;
