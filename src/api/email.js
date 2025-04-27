import api from '../services/apiService';

export const sendContactEmail = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw error;
  }
};