import React from 'react';

export default function Sobre() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div 
        className="h-64 md:h-80 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.4), rgba(2, 6, 23, 0.4)), url('/assets/cabecalhos/2.png')` }}
      />

      {/* About Content */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Instituto Evolutivo</h2>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              O Instituto Evolutivo de Educação é uma instituição de ensino superior dedicada ao desenvolvimento profissional 
              e pessoal de seus alunos através de programas de especialização de alta qualidade.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h3>
              <p>
                Oferecer programas de especialização e educação continuada que capacitem profissionais para enfrentar 
                os desafios do mercado moderno, promovendo desenvolvimento integral e inovação.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Visão</h3>
              <p>
                Ser uma instituição de referência em educação continuada, reconhecida pela qualidade de seus programas 
                e pelo impacto positivo na carreira de seus alunos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span><strong>Excelência:</strong> Comprometimento com a qualidade em tudo o que fazemos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span><strong>Inovação:</strong> Mantemos-nos atualizados com as tendências do mercado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span><strong>Integridade:</strong> Atuamos com ética e transparência em todas as nossas ações</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span><strong>Inclusão:</strong> Valorizamos a diversidade e promovemos oportunidades para todos</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Por que escolher o Instituto Evolutivo?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Programas desenvolvidos por profissionais experientes da área</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Metodologia moderna e prática, com foco em aplicação real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Professores qualificados e com experiência no mercado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Certificação reconhecida e valorizada pelo mercado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Flexibilidade de horários e modalidades de estudo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-12 rounded-lg">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">Nossos Números</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-blue-100">Áreas de Especialização</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">26+</div>
              <p className="text-blue-100">Programas de Cursos</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5k+</div>
              <p className="text-blue-100">Alunos Formados</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
