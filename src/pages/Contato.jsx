import React, { useEffect, useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cursoInteresse: '',
    mensagem: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Obrigado! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', telefone: '', cursoInteresse: '', mensagem: '' });
  };

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div 
        className="h-64 md:h-80 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.2), rgba(2, 6, 23, 0.2)), url('/assets/cabecalho-contato.png')` }}
      />

      {/* Formulário */}
      <section className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Entre em Contato</h2>
          <p className="text-gray-600 text-center mb-8">Preencha o formulário abaixo e entraremos em contato com você em breve.</p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="(xx) xxxxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Curso de Interesse</label>
                <input
                  type="text"
                  name="cursoInteresse"
                  value={formData.cursoInteresse}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="(opcional)"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Mensagem *</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  placeholder="Escreva sua mensagem"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
