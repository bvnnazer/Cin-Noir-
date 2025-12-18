
import React, { useState } from 'react';
import { Anime } from '../types';

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex-shrink-0 w-[180px] md:w-[240px] aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:z-20 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={anime.image} 
        alt={anime.title} 
        className="w-full h-full object-cover rounded-lg group-hover:brightness-50 transition-all duration-300"
      />
      
      {/* Basic Overlay (Year/Rating) */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        <span className="bg-black/60 backdrop-blur-md text-[10px] font-bold px-1.5 py-0.5 rounded text-white">{anime.year}</span>
        <span className="bg-[#ffb933] text-black text-[10px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <i className="fas fa-star text-[8px]"></i> {anime.rating}
        </span>
      </div>

      {/* Detail Reveal on Hover */}
      <div className={`absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="font-bold text-sm md:text-base mb-1 line-clamp-1">{anime.title}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
            {anime.genres.slice(0, 2).map(g => (
                <span key={g} className="text-[10px] text-gray-400">{g}</span>
            ))}
        </div>
        <div className="flex items-center gap-2">
            <button className="bg-[#ffb933] text-black w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition active:scale-95">
                <i className="fas fa-play text-xs"></i>
            </button>
            <button className="bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/40 transition">
                <i className="fas fa-plus text-xs"></i>
            </button>
            <button className="bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/40 ml-auto transition">
                <i className="fas fa-info text-xs"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
