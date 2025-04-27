import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
});

export const register = async (userData) => {
  try {
    const response = await api.post('/registro', userData);
    return response.data;
  } catch (error) {
    console.error('Error en registro:', error.response?.data || error.message);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error en login:', error.response?.data || error.message);
    throw error;
  }
};

export const getTarifas = async () => {
  try {
    const response = await api.get('/tarifas');
    return response.data;
  } catch (error) {
    console.error('Error al obtener tarifas:', error);
    throw error;
  }
};

export const createReserva = async (reservaData) => {
  try {
    const response = await api.post('/reservas', reservaData);
    return response.data;
  } catch (error) {
    console.error('Error al crear reserva:', error);
    throw error;
  }
};