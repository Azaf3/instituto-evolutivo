import React from 'react';
import { Link } from 'react-router-dom';
import HeroCard from '../components/HeroCard';

export default function CursoPsicanalise() {
  return (
    <div className="space-y-12">
      <HeroCard
        image="/cabecalhos/cab-psicanalise.png"
        cta={null}
        overlayOpacity={0}
      />

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Conteúdo principal */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Curso</h2>
            <p className="text-gray-700 mb-4">O Curso de Psicanálise do Instituto Evolutivo de Educação é uma formação presencial que oferece base teórica e prática para a compreensão do sujeito, da subjetividade e das dinâmicas inconscientes.</p>
            <p className="text-gray-700 mb-4">A formação é estruturada para proporcionar um percurso contínuo de aprendizado, respeitando o tempo de desenvolvimento intelectual e reflexivo do aluno.</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">Duração e Modalidade</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li><strong>Duração:</strong> 24 meses</li>
              <li><strong>Modalidade:</strong> 100% presencial</li>
              <li><strong>Aulas:</strong> Semanais</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">Público-alvo</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Pessoas interessadas no estudo da Psicanálise</li>
              <li>Profissionais das áreas da saúde, educação e ciências humanas</li>
              <li>Interessados em aprofundamento teórico e desenvolvimento pessoal</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">Instituição</h3>
            <p className="text-gray-700 mb-6">Instituto Evolutivo de Educação — instituição dedicada à formação presencial e ao desenvolvimento humano, com foco na qualidade do ensino, ética e compromisso educacional.</p>

            <div className="bg-gray-50 border rounded-lg p-4 text-gray-700">
              <strong>Observação técnica:</strong>
              <p className="mt-2">Esta página possui layout próprio e visual sóbrio mantendo a identidade visual do site. Não há CTA emocional final — para manifestar interesse utilize a página de contato.</p>
            </div>
          </div>

          {/* Sidebar com valores */}
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white border rounded-lg p-6 shadow text-center">
                <Link to="/contato" className="inline-block bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-4 py-2 rounded-md">Informações / Inscrição</Link>
              </div>

              <div className="bg-white border rounded-lg p-4 text-gray-700">
                <h5 className="font-semibold text-gray-900">Detalhes rápidos</h5>
                <ul className="mt-2 text-sm list-disc list-inside text-gray-600">
                  <li>24 meses de duração</li>
                  <li>Aulas semanais (presenciais)</li>
                  <li>Certificado ao final do curso</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
