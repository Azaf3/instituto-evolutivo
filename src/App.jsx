import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import CursoPsicanalise from './pages/CursoPsicanalise';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/psicanalise" element={<CursoPsicanalise />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;