import React, { useMemo } from 'react';
import HeroCard from '../components/HeroCard';
import CourseCard from '../components/CourseCard';

const TODOS_OS_CURSOS = {
  saude: [
    { title: 'Enfermagem Estética', duration: '10 meses', hours: '200h', description: 'Aperfeiçoamento em procedimentos estéticos.' },
    { title: 'Psicologia Hospitalar', duration: '12 meses', hours: '360h', description: 'Atuação psicológica em ambiente hospitalar.' },
    { title: 'Fisioterapia Ortopédica e Esportiva', duration: '12 meses', hours: '300h', description: 'Reabilitação e performance esportiva.' },
    { title: 'Nutrição Clínica Funcional', duration: '10 meses', hours: '220h', description: 'Abordagem nutricional individualizada.' },
    { title: 'Biomedicina Estética', duration: '10 meses', hours: '220h', description: 'Tecnologias e tratamentos estéticos em biomedicina.' },
    { title: 'Enfermagem em UTI Adulto e Pediátrica', duration: '8 meses', hours: '240h', description: 'Cuidados intensivos em diferentes faixas etárias.' },
  ],
  educacao: [
    { title: 'Psicopedagogia Institucional e Clínica', duration: '12 meses', hours: '360h', description: 'Intervenção educativa e clínica.' },
    { title: 'Educação Especial e Inclusiva', duration: '12 meses', hours: '360h', description: 'Práticas de inclusão e adaptações curriculares.' },
    { title: 'Neuropsicopedagogia', duration: '12 meses', hours: '300h', description: 'Relação entre aprendizagem e funções cerebrais.' },
  ],
  administracao: [
    { title: 'Gestão de Pessoas e Recursos Humanos', duration: '12 meses', hours: '360h', description: 'Desenvolvimento e retenção de talentos.' },
    { title: 'Gestão Financeira e Controladoria', duration: '12 meses', hours: '360h', description: 'Controle financeiro e análise de custos.' },
    { title: 'Gestão Pública e Governança', duration: '12 meses', hours: '360h', description: 'Políticas públicas e gestão governamental.' },
  ],
  direito: [
    { title: 'Direito Penal e Processo Penal', duration: '12 meses', hours: '360h', description: 'Estudo do direito penal e processo penal.' },
    { title: 'Direito Civil e Processo Civil', duration: '12 meses', hours: '360h', description: 'Direito civil e procedimentos processuais.' },
  ],
  tecnologia: [
    { title: 'Ciência de Dados e Inteligência Artificial', duration: '12 meses', hours: '360h', description: 'Análise de dados e modelos preditivos.' },
    { title: 'Segurança da Informação', duration: '10 meses', hours: '300h', description: 'Proteção de dados e infraestrutura segura.' },
  ],
  estetica: [
    { title: 'Cosmetologia e Dermocosméticos', duration: '8 meses', hours: '200h', description: 'Estudo de formulações e aplicações cosméticas.' },
    { title: 'Estética Facial Avançada', duration: '6 meses', hours: '180h', description: 'Técnicas avançadas de cuidados faciais.' },
  ],
  engenharia: [
    { title: 'Engenharia de Segurança do Trabalho', duration: '12 meses', hours: '360h', description: 'Prevenção e gestão de riscos ocupacionais.' },
    { title: 'Engenharia Civil e Estruturas', duration: '12 meses', hours: '360h', description: 'Projetos estruturais e construção civil.' },
  ],
  comunicacao: [
    { title: 'Comunicação Corporativa', duration: '9 meses', hours: '300h', description: 'Comunicação estratégica para organizações.' },
    { title: 'Jornalismo Digital', duration: '9 meses', hours: '220h', description: 'Produção de conteúdo e formatos digitais.' },
  ],
  humanas: [
    { title: 'Psicanálise Clínica', duration: '12 meses', hours: '360h', description: 'Formação em teoria e prática psicanalítica.' },
    { title: 'Filosofia Contemporânea', duration: '8 meses', hours: '200h', description: 'Debates e pensamento filosófico atual.' },
  ],
  meioambiente: [
    { title: 'Gestão Ambiental', duration: '12 meses', hours: '360h', description: 'Políticas e práticas ambientais.' },
    { title: 'Energias Renováveis', duration: '10 meses', hours: '260h', description: 'Fontes alternativas e tecnologias limpas.' },
  ],
};

const AREAS_INFO = {
  saude: 'Saúde',
  educacao: 'Educação',
  administracao: 'Administração e Gestão',
  direito: 'Direito',
  tecnologia: 'Tecnologia e Inovação',
  estetica: 'Estética e Beleza',
  engenharia: 'Engenharia e Arquitetura',
  comunicacao: 'Comunicação e Marketing',
  humanas: 'Ciências Humanas e Sociais',
  meioambiente: 'Meio Ambiente e Sustentabilidade',
};

export default function Cursos() {
  const urlParams = new URLSearchParams(window.location.search);
  const areaParam = urlParams.get('area');

  const cursosExibir = useMemo(() => {
    if (areaParam && TODOS_OS_CURSOS[areaParam]) {
      return { [areaParam]: TODOS_OS_CURSOS[areaParam] };
    }
    return TODOS_OS_CURSOS;
  }, [areaParam]);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div 
        className="h-48 md:h-56 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.4), rgba(2, 6, 23, 0.4)), url('/instituto-evolutivo/cabecalhos/2.png')`, backgroundSize: '80%' }}
      />

      {/* Cursos por Área */}
      <section className="container mx-auto px-4">
        {Object.entries(cursosExibir).map(([areaId, cursos]) => (
          <div key={areaId} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{AREAS_INFO[areaId]}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursos.map((curso, idx) => (
                <CourseCard 
                  key={idx}
                  {...curso}
                  area={AREAS_INFO[areaId]}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
