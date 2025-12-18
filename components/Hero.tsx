
import React, { useState, useEffect, useCallback } from 'react';
import { Movie } from '../types';

interface HeroProps {
  movies: Movie[];
  isLoggedIn: boolean;
  onOpenLogin: () => void;
  onWatch: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movies, isLoggedIn, onOpenLogin, onWatch }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  }, [movies.length, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!movies || movies.length === 0) return null;

  const movie = movies[currentIndex];

  const handleWatchClick = () => {
    if (!isLoggedIn) {
      onOpenLogin();
    } else {
      onWatch(movie);
    }
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden group">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img 
          key={movie.id}
          src={movie.banner || movie.image} 
          alt={movie.title} 
          className={`w-full h-full object-cover scale-105 transition-all duration-1000 ease-out ${isTransitioning ? 'opacity-40 scale-110 blur-sm' : 'opacity-100 scale-105 blur-0'}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#313338] via-[#313338]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#313338] via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pb-32 md:pb-40 max-w-4xl space-y-6 z-10">
        <div className={`flex items-center gap-4 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <span className="bg-[#5865F2] text-white text-[10px] md:text-xs font-black px-2 py-1 rounded tracking-widest uppercase">
              {movie.type === 'Series' ? 'Top Rated Series' : 'Cinematic Event'}
            </span>
            <span className="text-sm font-bold flex items-center gap-1">
                <i className="fas fa-star text-[#5865F2]"></i> {movie.rating}
            </span>
            <span className="text-sm text-gray-300 font-medium">{movie.year}</span>
            <span className="text-sm text-gray-300 font-medium bg-black/30 px-2 py-0.5 rounded backdrop-blur-sm">{movie.duration}</span>
        </div>

        <h1 className={`text-5xl md:text-8xl font-black tracking-tighter drop-shadow-2xl transition-all duration-700 delay-100 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          {movie.title.toUpperCase()}
        </h1>

        <p className={`text-gray-300 text-base md:text-lg leading-relaxed line-clamp-3 max-w-2xl transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {movie.description}
        </p>

        <div className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-700 delay-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <button 
            onClick={handleWatchClick}
            className="bg-[#5865F2] text-white px-8 py-3 rounded-md font-black flex items-center gap-3 hover:bg-[#4752C4] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(88,101,242,0.2)]"
          >
            <i className={`fas ${movie.type === 'Series' ? 'fa-play' : 'fa-play'} text-xl`}></i>
            Watch {movie.type === 'Series' ? 'Episodes' : 'Movie'}
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-md font-bold flex items-center gap-3 hover:bg-white/20 transition-all border border-white/5">
            <i className="fas fa-plus"></i>
            Watch Later
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {movies.map((_, index) => (
          <button key={index} onClick={() => !isTransitioning && setCurrentIndex(index)} className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-10 bg-[#5865F2]' : 'w-4 bg-white/30 hover:bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
