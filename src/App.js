// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import UserList from './components/UserList/UserList';  // Gerenciar Usuários
import CompanyList from './components/CompanyList/CompanyList';  // Gerenciar Empresas
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/" element={<Login />} />

        {/* Layout com Sidebar e conteúdo dinâmico */}
        <Route element={<Sidebar />}>
          {/* Rota para Home */}
          <Route path="/home" element={<Home />} />

          {/* Rota para Gerenciar Usuários */}
          <Route path="/usuarios" element={<UserList />} />

          {/* Rota para Gerenciar Empresas */}
          <Route path="/empresas" element={<CompanyList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
