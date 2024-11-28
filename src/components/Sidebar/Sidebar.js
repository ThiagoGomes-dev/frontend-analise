// src/components/Sidebar/Sidebar.js
import React from 'react';
import { FaUser, FaTachometerAlt, FaCog, FaFileAlt } from 'react-icons/fa';
import { Link, useLocation, Outlet } from 'react-router-dom';  // Importando Outlet do react-router-dom
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();  // Obter a localização atual

  return (
    <div className="container">
      {/* Menu Lateral */}
      <div className="side-nav">
        <h1 className="gradient-text">ACCOUNTING ANALYSIS</h1>
        <ul>
          <li><Link to="/home" className={location.pathname === '/home' ? 'active' : ''}><FaUser /> Perfil</Link></li>
          <li><Link to="/home" className={location.pathname === '/home' ? 'active' : ''}><FaTachometerAlt /> Dashboard</Link></li>
          <li><Link to="/users" className={location.pathname === '/users' ? 'active' : ''}><FaUser /> Gerenciar Usuários</Link></li>
          <li><Link to="/configuracoes" className={location.pathname === '/configuracoes' ? 'active' : ''}><FaCog /> Configurações</Link></li>
          <h3 className="nav-category-title">Análises Contábeis</h3>
          <li><Link to="/analise-notas-omissas"><FaFileAlt /> Análise Notas Omissas</Link></li>
          <li><Link to="/analise-faturamento"><FaFileAlt /> Análise Faturamento</Link></li>
          <li><Link to="/analise-fronteira"><FaFileAlt /> Análise Fronteira</Link></li>
          <li><Link to="/analise-cadastral-saida"><FaFileAlt /> Análise Cadastral de Saída</Link></li>
          <li><Link to="/analise-operacoes-proprias"><FaFileAlt /> Análise Operações Próprias</Link></li>
        </ul>
      </div>

      {/* Conteúdo da Página (Será renderizado com <Outlet />) */}
      <div className="content">
        <Outlet />  {/* Aqui o conteúdo das páginas será renderizado */}
      </div>
    </div>
  );
};

export default Sidebar;
