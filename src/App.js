import './App.css';
import {BrowserRouter,Route,} from "react-router-dom";
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
