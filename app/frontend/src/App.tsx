import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={ <Home /> } 
          />
          <Route
            path="login"
            element={ <Login /> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;