// src/components/Home/Home.js
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';  // Importando o Sidebar
import './Home.css';  // Importando os estilos da Home

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />  {/* Incluindo o menu lateral */}
      <div className="home-content">
        <h1>Bem-vindo à Home!</h1>
        <p>Essa é a tela inicial do sistema.</p>
        {/* Aqui pode ser inserido o conteúdo principal da Home */}
      </div>
    </div>
  );
};

export default Home;
