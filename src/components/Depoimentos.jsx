import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const DEPOIMENTOS = [
  {
    nome: 'Ana Paula Ferreira',
    curso: 'Psicopedagogia Institucional e Clínica',
    texto: 'O curso superou minhas expectativas. Os professores são extremamente qualificados e o conteúdo é muito atualizado. Hoje atuo com muito mais segurança na minha área.',
    estrelas: 5,
    iniciais: 'AF',
  },
  {
    nome: 'Carlos Eduardo Souza',
    curso: 'Gestão de Pessoas e Recursos Humanos',
    texto: 'Excelente estrutura e didática. A metodologia prática fez toda a diferença na minha carreira. Consegui uma promoção poucos meses após a conclusão do curso.',
    estrelas: 5,
    iniciais: 'CS',
  },
  {
    nome: 'Mariana Costa',
    curso: 'Enfermagem Estética',
    texto: 'Me sinto muito mais preparada para o mercado. O Instituto Evolutivo tem um cuidado especial com os alunos, desde o primeiro dia até a formatura.',
    estrelas: 5,
    iniciais: 'MC',
  },
  {
    nome: 'Ricardo Alves',
    curso: 'Ciência de Dados e Inteligência Artificial',
    texto: 'Conteúdo denso e muito relevante para o mercado de tecnologia. Os projetos práticos foram fundamentais para montar meu portfólio e conseguir um novo emprego.',
    estrelas: 5,
    iniciais: 'RA',
  },
  {
    nome: 'Fernanda Lima',
    curso: 'Psicanálise Clínica',
    texto: 'Uma formação profunda e transformadora. Além do crescimento profissional, o curso proporcionou um desenvolvimento pessoal que não esperava encontrar.',
    estrelas: 5,
    iniciais: 'FL',
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + DEPOIMENTOS.length) % DEPOIMENTOS.length);
  const next = () => setIndex((i) => (i + 1) % DEPOIMENTOS.length);

  const visíveis = [
    DEPOIMENTOS[index],
    DEPOIMENTOS[(index + 1) % DEPOIMENTOS.length],
    DEPOIMENTOS[(index + 2) % DEPOIMENTOS.length],
  ];

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">O que dizem nossos alunos</h2>
      <p className="text-gray-500 text-center mb-10">Histórias reais de quem transformou a carreira com o Instituto Evolutivo</p>

      <div className="grid md:grid-cols-3 gap-6">
        {visíveis.map((d, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-gray-100">
            <div className="flex gap-1">
              {Array.from({ length: d.estrelas }).map((_, s) => (
                <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed flex-1">"{d.texto}"</p>
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm flex-shrink-0">
                {d.iniciais}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{d.nome}</p>
                <p className="text-xs text-gray-500">{d.curso}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 p-3 rounded-full transition shadow"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          {DEPOIMENTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 p-3 rounded-full transition shadow"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
