import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaTachometerAlt, FaCog, FaFileAlt } from 'react-icons/fa'; 
import './Sidebar.css';  // O arquivo de CSS que você já tem
import { Outlet } from 'react-router-dom';  // Importando o Outlet

const Sidebar = () => {
  const location = useLocation();  // Obter a localização atual

  return (
    <div className="d-flex">
      {/* Menu Lateral */}
      <div className="side-nav p-3">
        <h1 className="text-center gradient-text">ACCOUNTING ANALYSIS</h1>
        <ul className="list-unstyled">
          <li>
            <Link 
              to="/home" 
              className={`d-flex align-items-center py-2 ${location.pathname === '/home' ? 'active' : ''}`}
            >
              <FaUser className="me-2" /> Perfil
            </Link>
          </li>
          <li>
            <Link 
              to="/home" 
              className={`d-flex align-items-center py-2 ${location.pathname === '/home' ? 'active' : ''}`}
            >
              <FaTachometerAlt className="me-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/users" 
              className={`d-flex align-items-center py-2 ${location.pathname === '/users' ? 'active' : ''}`}
            >
              <FaUser className="me-2" /> Gerenciar Usuários
            </Link>
          </li>
          <li>
            <Link 
              to="/configuracoes" 
              className={`d-flex align-items-center py-2 ${location.pathname === '/configuracoes' ? 'active' : ''}`}
            >
              <FaCog className="me-2" /> Configurações
            </Link>
          </li>
          <h3 className="text-white mt-4">Análises Contábeis</h3>
          <li>
            <Link to="/analise-notas-omissas" className="d-flex align-items-center py-2 text-white">
              <FaFileAlt className="me-2" /> Análise Notas Omissas
            </Link>
          </li>
          <li>
            <Link to="/analise-faturamento" className="d-flex align-items-center py-2 text-white">
              <FaFileAlt className="me-2" /> Análise Faturamento
            </Link>
          </li>
          <li>
            <Link to="/analise-fronteira" className="d-flex align-items-center py-2 text-white">
              <FaFileAlt className="me-2" /> Análise Fronteira
            </Link>
          </li>
          <li>
            <Link to="/analise-cadastral-saida" className="d-flex align-items-center py-2 text-white">
              <FaFileAlt className="me-2" /> Análise Cadastral de Saída
            </Link>
          </li>
          <li>
            <Link to="/analise-operacoes-proprias" className="d-flex align-items-center py-2 text-white">
              <FaFileAlt className="me-2" /> Análise Operações Próprias
            </Link>
          </li>
        </ul>
      </div>

      {/* Conteúdo da Página (Será renderizado com <Outlet />) */}
      <div className="content p-4" style={{ flex: 1 }}>
        <Outlet />  {/* Aqui o conteúdo das páginas será renderizado */}
      </div>
    </div>
  );
};

export default Sidebar;
