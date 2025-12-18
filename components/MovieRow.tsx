
import React, { useRef } from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  movieList: Movie[];
  onWatch: (movie: Movie) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movieList, onWatch }) => {
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
      <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-3 tracking-tight">
        {title}
        <i className="fas fa-chevron-right text-sm text-[#5865F2]"></i>
      </h2>

      <button onClick={() => scroll('left')} className="absolute left-0 top-[50%] -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-[#5865F2] shadow-2xl translate-x-[-20px] group-hover:translate-x-0"><i className="fas fa-chevron-left text-white"></i></button>
      <button onClick={() => scroll('right')} className="absolute right-0 top-[50%] -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-[#5865F2] shadow-2xl translate-x-[20px] group-hover:translate-x-0"><i className="fas fa-chevron-right text-white"></i></button>

      <div ref={scrollRef} className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-6 scroll-smooth">
        {movieList.map(movie => <MovieCard key={movie.id} movie={movie} onWatch={onWatch} />)}
      </div>
    </div>
  );
};

export default MovieRow;
