import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8 mt-16">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Instituto Evolutivo</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Programas de especialização para o seu crescimento profissional e desenvolvimento pessoal.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Navegação</h4>
            <ul className="text-sm space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/cursos" className="text-gray-400 hover:text-white transition">Cursos</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-white transition">Sobre</Link></li>
              <li><Link to="/galeria" className="text-gray-400 hover:text-white transition">Galeria</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition">Contato</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:evolutivo.secretaria@gmail.com" className="text-gray-400 hover:text-white transition">
                  evolutivo.secretaria@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+5561986239797" className="text-gray-400 hover:text-white transition">
                  (61) 98623-9797
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Brasília — Gama, DF</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Instituto Evolutivo de Educação. Todos os direitos reservados.</p>
            <div className="md:text-right space-x-4">
              <a href="#" className="hover:text-white transition">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
