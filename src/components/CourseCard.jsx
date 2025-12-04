import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';

export default function CourseCard({ title, duration, hours, description, area }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden">
      <div className="p-5">
        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3">
          {area}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        
        <div className="flex gap-3 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-blue-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={16} className="text-blue-600" />
            <span>{hours}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4">{description}</p>
        
        <Link 
          to={`/contato?curso=${encodeURIComponent(title)}`}
          className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition flex items-center gap-1"
        >
          Tenho interesse
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Decorative corner marker */}
      <div className="absolute bottom-2 right-2 w-10 h-10 text-blue-200 opacity-30">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.414 3.586a2 2 0 00-2.828 0L9 8.172V4a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-4.172l4.586-4.586a2 2 0 000-2.828z" />
        </svg>
      </div>
    </div>
  );
}
