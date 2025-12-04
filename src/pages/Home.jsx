import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroCard from '../components/HeroCard';
import CourseCard from '../components/CourseCard';

const AREAS = [
  { id: 'saude', name: 'Saúde', icon: '🏥' },
  { id: 'educacao', name: 'Educação', icon: '📚' },
  { id: 'administracao', name: 'Administração e Gestão', icon: '💼' },
  { id: 'direito', name: 'Direito', icon: '⚖️' },
  { id: 'tecnologia', name: 'Tecnologia e Inovação', icon: '💻' },
  { id: 'estetica', name: 'Estética e Beleza', icon: '💅' },
  { id: 'engenharia', name: 'Engenharia e Arquitetura', icon: '🏗️' },
  { id: 'comunicacao', name: 'Comunicação e Marketing', icon: '📢' },
  { id: 'humanas', name: 'Ciências Humanas e Sociais', icon: '🎓' },
  { id: 'meioambiente', name: 'Meio Ambiente e Sustentabilidade', icon: '🌱' },
];

const CURSOS = [
  { title: 'Enfermagem Estética', duration: '10 meses', hours: '200h', description: 'Aperfeiçoamento em procedimentos estéticos.', area: 'Saúde' },
  { title: 'Psicologia Hospitalar', duration: '12 meses', hours: '360h', description: 'Atuação psicológica em ambiente hospitalar.', area: 'Saúde' },
  { title: 'Fisioterapia Ortopédica e Esportiva', duration: '12 meses', hours: '300h', description: 'Reabilitação e performance esportiva.', area: 'Saúde' },
  { title: 'Nutrição Clínica Funcional', duration: '10 meses', hours: '220h', description: 'Abordagem nutricional individualizada.', area: 'Saúde' },
  { title: 'Biomedicina Estética', duration: '10 meses', hours: '220h', description: 'Tecnologias e tratamentos estéticos em biomedicina.', area: 'Saúde' },
  { title: 'Enfermagem em UTI Adulto e Pediátrica', duration: '8 meses', hours: '240h', description: 'Cuidados intensivos em diferentes faixas etárias.', area: 'Saúde' },
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % CURSOS.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + CURSOS.length) % CURSOS.length);
  };

  return (
    <div className="space-y-12">
      {/* Hero */}
      <HeroCard 
        title="Programas de Especialização"
        subtitle="Cursos pensados para o seu crescimento profissional"
        image="/assets/cabecalhos/1.png"
        cta="Conheça nossos cursos"
        ctaLink="/cursos"
      />

      {/* Areas Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Áreas de Pós-Graduação</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {AREAS.map((area) => (
            <div 
              key={area.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center cursor-pointer hover:bg-blue-50"
            >
              <div className="text-4xl mb-2">{area.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm">{area.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses Carousel */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cursos em Destaque</h2>
        <div className="relative">
          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              <CourseCard {...CURSOS[carouselIndex]} />
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {CURSOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    idx === carouselIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para evoluir?</h2>
          <p className="text-lg mb-6 text-blue-100">Conheça todos os nossos programas de especialização e escolha o seu caminho.</p>
          <a
            href="/cursos"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Explorar Cursos
          </a>
        </div>
      </section>
    </div>
  );
}
