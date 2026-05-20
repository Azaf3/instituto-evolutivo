import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight,
  HeartPulse, GraduationCap, Briefcase, Scale, Cpu,
  Sparkles, HardHat, Megaphone, BookOpen, Leaf,
} from 'lucide-react';
import HeroCard from '../components/HeroCard';
import SEO from '../components/SEO';
import CourseCard from '../components/CourseCard';
import Depoimentos from '../components/Depoimentos';

const AREAS = [
  { id: 'saude',         name: 'Saúde',                           Icon: HeartPulse    },
  { id: 'educacao',      name: 'Educação',                        Icon: GraduationCap },
  { id: 'administracao', name: 'Administração e Gestão',          Icon: Briefcase     },
  { id: 'direito',       name: 'Direito',                         Icon: Scale         },
  { id: 'tecnologia',    name: 'Tecnologia e Inovação',           Icon: Cpu           },
  { id: 'estetica',      name: 'Estética e Beleza',               Icon: Sparkles      },
  { id: 'engenharia',    name: 'Engenharia e Arquitetura',        Icon: HardHat       },
  { id: 'comunicacao',   name: 'Comunicação e Marketing',         Icon: Megaphone     },
  { id: 'humanas',       name: 'Ciências Humanas e Sociais',      Icon: BookOpen      },
  { id: 'meioambiente',  name: 'Meio Ambiente e Sustentabilidade', Icon: Leaf         },
];

const CURSOS = [
  { title: 'Enfermagem Estética', duration: '10 meses', hours: '200h', description: 'Aperfeiçoamento em procedimentos estéticos.', area: 'Saúde' },
  { title: 'Psicologia Hospitalar', duration: '12 meses', hours: '360h', description: 'Atuação psicológica em ambiente hospitalar.', area: 'Saúde' },
  { title: 'Fisioterapia Ortopédica e Esportiva', duration: '12 meses', hours: '300h', description: 'Reabilitação e performance esportiva.', area: 'Saúde' },
  { title: 'Nutrição Clínica Funcional', duration: '10 meses', hours: '220h', description: 'Abordagem nutricional individualizada.', area: 'Saúde' },
  { title: 'Biomedicina Estética', duration: '10 meses', hours: '220h', description: 'Tecnologias e tratamentos estéticos em biomedicina.', area: 'Saúde' },
  { title: 'Enfermagem em UTI Adulto e Pediátrica', duration: '8 meses', hours: '240h', description: 'Cuidados intensivos em diferentes faixas etárias.', area: 'Saúde' },
];

const PHONE = '5561986239797';
const WA_MESSAGE = encodeURIComponent('Olá! Vim pelo site e gostaria de informações sobre os cursos.');

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % CURSOS.length);
  const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + CURSOS.length) % CURSOS.length);

  return (
    <div className="space-y-12">
      <SEO
        title="Programas de Pós-Graduação e Especialização"
        description="O Instituto Evolutivo de Educação oferece programas de pós-graduação e especialização nas áreas de Saúde, Educação, Direito, Tecnologia e muito mais. Brasília — Gama, DF."
        path="/"
      />

      <HeroCard
        title="Programas de Especialização"
        subtitle="Cursos pensados para o seu crescimento profissional"
        image="/cabecalhos/1.png"
        imageMobile="/cabecalhos/cbc-mob1.png"
        cta="Conheça nossos cursos"
        ctaLink="/cursos"
      />

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Áreas de Pós-Graduação</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {AREAS.map(({ id, name, Icon }) => (
            <Link
              key={id}
              to={`/cursos?area=${id}`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center hover:bg-blue-50 no-underline flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cursos em Destaque</h2>
        <div className="relative">
          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              <CourseCard {...CURSOS[carouselIndex]} />
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prevSlide} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition">
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {CURSOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`w-3 h-3 rounded-full transition ${idx === carouselIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <Depoimentos />

      <section className="bg-blue-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para dar o próximo passo?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Fale com nossa equipe agora pelo WhatsApp e tire todas as suas dúvidas sobre cursos, inscrições e valores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${PHONE}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.531 5.855L0 24l6.335-1.508A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 0 1-5.031-1.388l-.36-.214-3.732.888.936-3.618-.235-.372A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Falar pelo WhatsApp
            </a>
            <Link
              to="/cursos"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg no-underline"
            >
              Ver todos os cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
