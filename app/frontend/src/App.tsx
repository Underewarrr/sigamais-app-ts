import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from "./pages/Register";
import Panel from "./pages/Panel";
import BuyFollowers from "./pages/BuyFollowers";


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
          <Route
            path="register"
            element={ <Register /> }
          />
          <Route
            path="panel"
            element={ <Panel /> }
          />
           <Route
            path="buy-followers"
            element={ <BuyFollowers /> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;