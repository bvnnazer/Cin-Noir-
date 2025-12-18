
import React, { useState } from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onWatch: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onWatch }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex-shrink-0 w-[180px] md:w-[240px] aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:z-20 hover:scale-110 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onWatch(movie)}
    >
      <img src={movie.image} alt={movie.title} className="w-full h-full object-cover rounded-lg group-hover:brightness-50 transition-all duration-300" />
      
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        <span className="bg-black/60 backdrop-blur-md text-[10px] font-bold px-1.5 py-0.5 rounded text-white">{movie.year}</span>
        <span className="bg-[#5865F2] text-white text-[10px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <i className="fas fa-star text-[8px]"></i> {movie.rating}
        </span>
        <span className="bg-white text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter w-fit">
          {movie.type}
        </span>
      </div>

      <div className={`absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-[#1e1f22] via-[#1e1f22]/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="font-bold text-sm md:text-base mb-1 line-clamp-1 text-white">{movie.title}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
            {movie.genres.slice(0, 2).map(g => (
                <span key={g} className="text-[10px] text-gray-400 font-medium">{g}</span>
            ))}
        </div>
        <div className="flex items-center gap-2">
            <div className="bg-[#5865F2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition active:scale-95 shadow-lg shadow-blue-900/40">
                <i className="fas fa-play text-xs ml-0.5"></i>
            </div>
            <button className="bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
                <i className="fas fa-plus text-xs"></i>
            </button>
            <button className="bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 ml-auto transition backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
                <i className="fas fa-ellipsis-h text-xs"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
