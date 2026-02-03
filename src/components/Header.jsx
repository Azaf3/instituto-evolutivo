import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-3 md:px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img 
              src="/img-logos/logo-colorido-iee.jpg" 
              alt="Logo Instituto Evolutivo" 
              className="w-10 md:w-12 h-auto rounded"
            />
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-bold text-gray-900">Instituto Evolutivo</span>
              <span className="text-[10px] md:text-xs font-bold text-gray-600">de Educação</span>
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Início</Link>
            <Link to="/cursos" className="text-gray-700 hover:text-blue-600 font-medium transition">Cursos</Link>
            <Link to="/cursos/psicanalise" className="text-gray-700 hover:text-blue-600 font-medium transition">Psicanálise</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-blue-600 font-medium transition">Sobre</Link>
            <Link to="/galeria" className="text-gray-700 hover:text-blue-600 font-medium transition">Galeria</Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-600 font-medium transition">Contato</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t flex flex-col gap-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Início</Link>
            <Link to="/cursos" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Cursos</Link>
            <Link to="/cursos/psicanalise" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Psicanálise</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Sobre</Link>
            <Link to="/galeria" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Galeria</Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Contato</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
