// src/components/Sidebar/Sidebar.js
import React from 'react';
import { FaUser, FaTachometerAlt, FaCreditCard, FaCog, FaFileAlt } from 'react-icons/fa';  // Ícones do react-icons
import { Link } from 'react-router-dom'; // Usando Link do react-router-dom para navegação
import './Sidebar.css';  // Importando o arquivo de CSS

const Sidebar = () => {
  return (
    <div className="container">
      {/* Menu Lateral (Sidebar) */}
      <div className="side-nav">
        <h1 className="gradient-text">ANALYTIC CONTÁBIL</h1>
        <ul>
          <li><Link to="/home"> <FaUser /> Perfil</Link></li>
          <li><Link to="/home"> <FaTachometerAlt /> Dashboard</Link></li>
          <li><Link to="/pagamentos"> <FaCreditCard /> Pagamentos</Link></li>
          <li><Link to="/configuracoes"> <FaCog /> Configurações</Link></li>

          <h3 className="nav-category-title">Análises Contábeis</h3>

          <li><Link to="/analise-notas-omissas"> <FaFileAlt /> Análise Notas Omissas</Link></li>
          <li><Link to="/analise-faturamento"> <FaFileAlt /> Análise Faturamento</Link></li>
          <li><Link to="/analise-fronteira"> <FaFileAlt /> Análise Fronteira</Link></li>
          <li><Link to="/analise-cadastral-saida"> <FaFileAlt /> Análise Cadastral de Saída</Link></li>
          <li><Link to="/analise-operacoes-proprias"> <FaFileAlt /> Análise Operações Próprias</Link></li>
        </ul>
      </div>

      {/* Conteúdo Principal */}
      <div className="content">
        <app-header></app-header>
        <p className="title">Análises</p>
        <app-card></app-card>
        <app-omitted></app-omitted>
      </div>
    </div>
  );
};

export default Sidebar;
