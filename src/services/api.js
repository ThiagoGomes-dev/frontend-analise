import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1'; // Atualize para o URL do seu back-end

// Função para login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Erro de autenticação', error);
    throw error;
  }
};

// Função para listar usuários
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar usuários', error);
    throw error;
  }
};

// Função para listar permissões
export const getPermissions = async () => {
  try {
    const response = await axios.get(`${API_URL}/permissions`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar permissões', error);
    throw error;
  }
};
