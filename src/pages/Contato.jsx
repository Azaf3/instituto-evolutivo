import React, { useEffect, useState } from 'react';
import { submitContact } from '../services/api';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cursoInteresse: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const curso = urlParams.get('curso');
    if (curso) {
      setFormData(prev => ({ ...prev, cursoInteresse: decodeURIComponent(curso) }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await submitContact(formData);
      setMessage('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ nome: '', email: '', telefone: '', cursoInteresse: '', mensagem: '' });
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Erro detalhado:', error);
      const errorMsg = error.message || 'Erro ao enviar mensagem';
      setMessage(`❌ ${errorMsg}. Verifique sua conexão e tente novamente.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div 
        className="h-32 md:h-40 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.2), rgba(2, 6, 23, 0.2)), url('/cabecalho-contato.png')` }}
      />

      {/* Formulário */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Entre em Contato</h2>
            <p className="text-lg text-gray-600">Preencha o formulário abaixo e entraremos em contato em breve</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-600">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-8 py-6 border-b border-gray-200">
              <p className="text-gray-700 text-sm font-medium">Nos ajude a entender melhor sua necessidade</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Mensagem de Status */}
              {message && (
                <div className={`p-4 rounded-lg text-center font-semibold ${
                  message.includes('✅') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {message}
                </div>
              )}

              {/* Nome */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 hover:bg-white"
                  placeholder="João Silva"
                />
              </div>

              {/* Email e Telefone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 hover:bg-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 hover:bg-white"
                    placeholder="(11) 9999-9999"
                  />
                </div>
              </div>

              {/* Curso de Interesse */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Curso de Interesse
                </label>
                <input
                  type="text"
                  name="cursoInteresse"
                  value={formData.cursoInteresse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 hover:bg-white"
                  placeholder="Ex: Enfermagem Estética"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none bg-gray-50 hover:bg-white"
                  placeholder="Conte-nos mais sobre sua solicitação..."
                />
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Responderemos sua mensagem em até 24 horas
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
