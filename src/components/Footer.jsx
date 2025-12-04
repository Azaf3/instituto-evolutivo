import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* About */}
          <div>
            <h4 className="font-bold mb-3">Instituto Evolutivo</h4>
            <p className="text-sm text-blue-100">Programas de especialização para o seu crescimento profissional.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3">Links Rápidos</h4>
            <ul className="text-sm text-blue-100 space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/cursos" className="hover:text-white transition">Cursos</a></li>
              <li><a href="/sobre" className="hover:text-white transition">Sobre</a></li>
              <li><a href="/contato" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3">Contato</h4>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Mail size={16} />
              <a href="mailto:contato@institutevo.com.br" className="hover:text-white transition">
                contato@institutevo.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-4 text-center text-sm text-blue-100">
          <p>&copy; {currentYear} Instituto Evolutivo de Educação. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
