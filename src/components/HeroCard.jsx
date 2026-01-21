import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroCard({ title, subtitle, image, cta, ctaLink, overlayOpacity = 0.3 }) {
  return (
    <section 
      className="relative h-48 md:h-56 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, ${overlayOpacity}), rgba(2, 6, 23, ${overlayOpacity})), url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        {title && <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>}
        {subtitle && <p className="text-lg md:text-xl mb-6 text-gray-100">{subtitle}</p>}
        {cta && ctaLink && (
          <Link 
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            {cta}
            <ArrowRight size={20} />
          </Link>
        )}
      </div>
    </section>
  );
}
