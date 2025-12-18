
import React, { useRef } from 'react';
import { Anime } from '../types';
import AnimeCard from './AnimeCard';

interface AnimeRowProps {
  title: string;
  animeList: Anime[];
}

const AnimeRow: React.FC<AnimeRowProps> = ({ title, animeList }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4 relative group">
      <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
        {title}
        <i className="fas fa-chevron-right text-sm text-[#ffb933]"></i>
      </h2>

      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-[60%] -translate-y-1/2 z-30 bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-[60%] -translate-y-1/2 z-30 bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-6 scroll-smooth"
      >
        {animeList.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeRow;
