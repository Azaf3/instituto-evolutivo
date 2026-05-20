export const CURSOS_POR_AREA = {
  saude: {
    label: 'Saúde',
    cursos: [
      { title: 'Enfermagem Estética', duration: '10 meses', hours: '200h', description: 'Aperfeiçoamento em procedimentos estéticos.' },
      { title: 'Psicologia Hospitalar', duration: '12 meses', hours: '360h', description: 'Atuação psicológica em ambiente hospitalar.' },
      { title: 'Fisioterapia Ortopédica e Esportiva', duration: '12 meses', hours: '300h', description: 'Reabilitação e performance esportiva.' },
      { title: 'Nutrição Clínica Funcional', duration: '10 meses', hours: '220h', description: 'Abordagem nutricional individualizada.' },
      { title: 'Biomedicina Estética', duration: '10 meses', hours: '220h', description: 'Tecnologias e tratamentos estéticos em biomedicina.' },
      { title: 'Enfermagem em UTI Adulto e Pediátrica', duration: '8 meses', hours: '240h', description: 'Cuidados intensivos em diferentes faixas etárias.' },
    ],
  },
  educacao: {
    label: 'Educação',
    cursos: [
      { title: 'Psicopedagogia Institucional e Clínica', duration: '12 meses', hours: '360h', description: 'Intervenção educativa e clínica.' },
      { title: 'Educação Especial e Inclusiva', duration: '12 meses', hours: '360h', description: 'Práticas de inclusão e adaptações curriculares.' },
      { title: 'Neuropsicopedagogia', duration: '12 meses', hours: '300h', description: 'Relação entre aprendizagem e funções cerebrais.' },
    ],
  },
  administracao: {
    label: 'Administração e Gestão',
    cursos: [
      { title: 'Gestão de Pessoas e Recursos Humanos', duration: '12 meses', hours: '360h', description: 'Desenvolvimento e retenção de talentos.' },
      { title: 'Gestão Financeira e Controladoria', duration: '12 meses', hours: '360h', description: 'Controle financeiro e análise de custos.' },
      { title: 'Gestão Pública e Governança', duration: '12 meses', hours: '360h', description: 'Políticas públicas e gestão governamental.' },
    ],
  },
  direito: {
    label: 'Direito',
    cursos: [
      { title: 'Direito Penal e Processo Penal', duration: '12 meses', hours: '360h', description: 'Estudo do direito penal e processo penal.' },
      { title: 'Direito Civil e Processo Civil', duration: '12 meses', hours: '360h', description: 'Direito civil e procedimentos processuais.' },
    ],
  },
  tecnologia: {
    label: 'Tecnologia e Inovação',
    cursos: [
      { title: 'Ciência de Dados e Inteligência Artificial', duration: '12 meses', hours: '360h', description: 'Análise de dados e modelos preditivos.' },
      { title: 'Segurança da Informação', duration: '10 meses', hours: '300h', description: 'Proteção de dados e infraestrutura segura.' },
    ],
  },
  estetica: {
    label: 'Estética e Beleza',
    cursos: [
      { title: 'Cosmetologia e Dermocosméticos', duration: '8 meses', hours: '200h', description: 'Estudo de formulações e aplicações cosméticas.' },
      { title: 'Estética Facial Avançada', duration: '6 meses', hours: '180h', description: 'Técnicas avançadas de cuidados faciais.' },
    ],
  },
  engenharia: {
    label: 'Engenharia e Arquitetura',
    cursos: [
      { title: 'Engenharia de Segurança do Trabalho', duration: '12 meses', hours: '360h', description: 'Prevenção e gestão de riscos ocupacionais.' },
      { title: 'Engenharia Civil e Estruturas', duration: '12 meses', hours: '360h', description: 'Projetos estruturais e construção civil.' },
    ],
  },
  comunicacao: {
    label: 'Comunicação e Marketing',
    cursos: [
      { title: 'Comunicação Corporativa', duration: '9 meses', hours: '300h', description: 'Comunicação estratégica para organizações.' },
      { title: 'Jornalismo Digital', duration: '9 meses', hours: '220h', description: 'Produção de conteúdo e formatos digitais.' },
    ],
  },
  humanas: {
    label: 'Ciências Humanas e Sociais',
    cursos: [
      { title: 'Psicanálise Clínica', duration: '12 meses', hours: '360h', description: 'Formação em teoria e prática psicanalítica.' },
      { title: 'Filosofia Contemporânea', duration: '8 meses', hours: '200h', description: 'Debates e pensamento filosófico atual.' },
    ],
  },
  meioambiente: {
    label: 'Meio Ambiente e Sustentabilidade',
    cursos: [
      { title: 'Gestão Ambiental', duration: '12 meses', hours: '360h', description: 'Políticas e práticas ambientais.' },
      { title: 'Energias Renováveis', duration: '10 meses', hours: '260h', description: 'Fontes alternativas e tecnologias limpas.' },
    ],
  },
};

// Lista plana de todos os títulos para uso em dropdowns
export const TODOS_OS_TITULOS = Object.values(CURSOS_POR_AREA).flatMap(({ label, cursos }) =>
  cursos.map((c) => ({ title: c.title, area: label }))
);