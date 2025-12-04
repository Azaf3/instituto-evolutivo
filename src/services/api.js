// URL do backend
const API_URL = import.meta.env.VITE_API_URL || 'https://instituto-evolutivo-backend-production.up.railway.app';

export const submitContact = async (data) => {
  try {
    console.log('Enviando para:', `${API_URL}/api/submissions`);
    console.log('Dados:', data);

    const response = await fetch(`${API_URL}/api/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Status da resposta:', response.status);
    const responseData = await response.json();
    console.log('Resposta do servidor:', responseData);

    if (!response.ok) {
      throw new Error(responseData.message || `Erro: ${response.status}`);
    }

    return responseData;
  } catch (error) {
    console.error('Erro completo:', error);
    throw error;
  }
};
