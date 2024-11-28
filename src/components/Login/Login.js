import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';  // Ícones de usuário e senha
import './Login.css';
import { login } from '../../services/api'; // Importa a função de login mockada
import { useNavigate } from 'react-router-dom';  // Importa o useNavigate para redirecionamento

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
      // Função de login mockada
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
        <p>Alcance metas financeiras mais rapidamente</p>
      </div>
      <div className="right-side">
        <div className="login-form">
          <h2>Entrar</h2>
          <p className="sub-title">Não tem uma conta? <a href="/signup">Crie agora</a></p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-wrapper">
                <FaUser className="icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="options">
              <label className="remember-me">
                <input type="checkbox" /> Lembre de mim
              </label>
              <a href="/forgot-password" className="forgot-password">Esqueceu sua senha?</a>
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
