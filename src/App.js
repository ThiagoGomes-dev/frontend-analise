// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Aqui estamos definindo o componente Login */}
        <Route path="/home" element={<Home />} />     {/* Aqui estamos definindo o componente Home */}
      </Routes>

    </Router>
  );
}

export default App;
