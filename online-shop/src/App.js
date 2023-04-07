import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" 
          element = {<Catalog/>} >
        </Route>
         <Route path="/cart"
           element = {<Cart/>}>
         </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>   
  );
}

export default App;
