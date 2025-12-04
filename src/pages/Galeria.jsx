import React, { useState } from 'react';
import { X } from 'lucide-react';

const GALERIA_FOTOS = [
  { src: '/img-alunos/escuta-solidaria.png', alt: 'Escuta Solidária 1' },
  { src: '/img-alunos/escuta-solidaria2.png', alt: 'Escuta Solidária 2' },
  { src: '/img-alunos/escuta-solidaria3.png', alt: 'Escuta Solidária 3' },
  { src: '/img-alunos/formatura1.png', alt: 'Formatura 1' },
  { src: '/img-alunos/formatura2.png', alt: 'Formatura 2' },
  { src: '/img-alunos/formatura3.png', alt: 'Formatura 3' },
];

export default function Galeria() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  // Fechar modal ao pressionar ESC
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setFotoSelecionada(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div 
        className="h-48 md:h-56 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.4), rgba(2, 6, 23, 0.4)), url('/cabecalhos/1.png')`, backgroundSize: '80%' }}
      />

      {/* Galeria */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Momentos</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALERIA_FOTOS.map((foto, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition cursor-pointer group"
              onClick={() => setFotoSelecionada(foto)}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {fotoSelecionada && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-85 z-50 flex items-center justify-center p-4"
          onClick={() => setFotoSelecionada(null)}
        >
          <div 
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFotoSelecionada(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <img
              src={fotoSelecionada.src}
              alt={fotoSelecionada.alt}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-3 text-sm">Clique fora, no X ou pressione ESC para fechar</p>
          </div>
        </div>
      )}
    </div>
  );
}
