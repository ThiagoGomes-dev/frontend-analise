// src/services/api.js

// Simulação da URL do API
//const API_URL = 'http://localhost:3000/api/v1';

// Mock de usuários
let mockUsersList = [
    { id: 1, name: 'Thiago Gomes', email: 'thiago@gmail.com', password: '123456' },
    { id: 2, name: 'Arthur Martins', email: 'arthur@gmail.com', password: '123456' }, 
  ];
  
  // Valida o email e a senha
  export const login = async (credentials) => {
    try {
      const user = mockUsersList.find(u => u.email === credentials.email);
      
      if (user && user.password === credentials.password) {
        const mockLoginResponse = {
          token: 'fake-token',
          refreshToken: 'fake-token',
          user: { id: user.id, name: user.name, email: user.email },
        };
        
        // Armazenando o token e o refresh token no localStorage
        localStorage.setItem('token', mockLoginResponse.token);
        localStorage.setItem('refreshToken', mockLoginResponse.refreshToken);
  
        return mockLoginResponse;
      } else {
        throw new Error('Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Erro de autenticação', error);
      throw error;
    }
  };

// Função de logout - Limpa o localStorage (mock)
export const logout = () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    console.log('Usuário deslogado');
  } catch (error) {
    console.error('Erro ao fazer logout', error);
    throw error;
  }
};

// Função de listagem de usuários - Retorna uma lista mockada de usuários
export const getUsers = () => {
  return mockUsersList;
};

// Função de adicionar usuário - Simula o cadastro de um novo usuário
export const addUser = (newUser) => {
  mockUsersList.push(newUser);
  console.log('Novo usuário adicionado:', newUser);
};
