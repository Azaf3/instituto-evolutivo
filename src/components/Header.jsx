import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/instituto-evolutivo/img-logos/logo-colorido-iee.jpg" 
              alt="Logo Instituto Evolutivo" 
              className="w-12 h-auto rounded"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">Instituto Evolutivo</span>
              <span className="text-xs font-bold text-gray-600">de Educação</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Início</Link>
            <Link to="/cursos" className="text-gray-700 hover:text-blue-600 font-medium transition">Cursos</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-blue-600 font-medium transition">Sobre</Link>
            <Link to="/galeria" className="text-gray-700 hover:text-blue-600 font-medium transition">Galeria</Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-600 font-medium transition">Contato</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t flex flex-col gap-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Início</Link>
            <Link to="/cursos" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Cursos</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Sobre</Link>
            <Link to="/galeria" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Galeria</Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-600 font-medium transition block py-2">Contato</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
