// URL do backend
const API_URL = import.meta.env.VITE_API_URL || 'https://instituto-evolutivo-backend-production.up.railway.app';

export const submitContact = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/submissions`, {
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
