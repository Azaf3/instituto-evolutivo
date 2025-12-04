// URL do backend - ajuste conforme necessário
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const submitContact = async (data) => {
  try {
    const response = await fetch(`${API_URL}/contato`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    throw error;
  }
};
