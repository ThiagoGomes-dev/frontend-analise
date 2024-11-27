// src/components/Login/Login.js
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';  // Ícones de usuário e senha
import './Login.css';
import { login } from '../../services/api'; // Importa a função de login mockada
import { useNavigate } from 'react-router-dom';  // Importa o useHistory para redirecionamento

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();  // Hook para navegação
  
    // Função chamada ao clicar no botão de login
    const handleLogin = async (e) => {
      e.preventDefault(); // Evita o comportamento padrão do formulário
  
      setIsLoading(true);
      setErrorMessage('');
  
      const credentials = { email, password };
  
      try {
        // Chama a função de login mockada
        const mockResponse = await login(credentials);
  
        // Sucesso no login
        console.log('Login bem-sucedido:', mockResponse.user);
        
        // Usando navigate para redirecionar para /home 
        navigate('/home');
  
      } catch (error) {
        setErrorMessage('Credenciais inválidas.');
      } finally {
        setIsLoading(false);
      }
    };
  return (
    <div className="login-page">
      <div className="left-side">
        <h1>Accounting Analysis</h1>
      </div>
      <div className="right-side">
        <div className="login-form">
          <h2>Bem-vindo ao Sistema</h2>
          <p>Faça seu login para continuar</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Login'}
            </button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
