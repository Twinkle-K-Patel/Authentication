import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import Register from "./Register"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Routes>

           <Route exact path="/" element={<Login/>}/>     
           <Route path="/register" element={<Register/>} />        

       </Routes>
      </Router>   
        
     
      </div>
    </div>
  );
}

export default App;
