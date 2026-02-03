import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroCard({ title, subtitle, image, imageMobile, cta, ctaLink, overlayOpacity = 0.3, imagePosition = 'center' }) {
  const positionClass = imagePosition === 'top' ? 'object-top' : 
                        imagePosition === 'bottom' ? 'object-bottom' : 
                        'object-center';
  
  const mobileImg = imageMobile || image;
  
  return (
    <section className="relative h-48 sm:h-64 md:h-56 rounded-lg overflow-hidden shadow-lg">
      <img 
        src={mobileImg} 
        alt="" 
        className={`absolute inset-0 w-full h-full object-cover ${positionClass} md:hidden`}
      />
      <img 
        src={image} 
        alt="" 
        className={`absolute inset-0 w-full h-full object-cover ${positionClass} hidden md:block`}
      />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: `rgba(2, 6, 23, ${overlayOpacity})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 py-6 md:py-0">
        {title && <h1 className="text-xl sm:text-2xl md:text-5xl font-bold mb-1 md:mb-3">{title}</h1>}
        {subtitle && <p className="text-xs sm:text-sm md:text-xl mb-3 md:mb-6 text-gray-100">{subtitle}</p>}
        {cta && ctaLink && (
          <Link 
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-1.5 md:px-6 md:py-3 rounded-lg text-xs md:text-base font-semibold transition transform hover:scale-105"
          >
            {cta}
            <ArrowRight size={14} className="md:hidden" />
            <ArrowRight size={20} className="hidden md:inline" />
          </Link>
        )}
      </div>
    </section>
  );
}
