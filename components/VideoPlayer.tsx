
import React, { useState } from 'react';
import { Movie, Episode } from '../types';

interface VideoPlayerProps {
  movie: Movie;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ movie, onClose }) => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(
    movie.type === 'Series' && movie.episodes ? movie.episodes[0] : null
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(35);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300">
      {/* Main Player Section */}
      <div className="flex-1 relative bg-black group flex flex-col justify-center">
        {/* Mock Video Canvas */}
        <div className="relative w-full aspect-video bg-[#111] overflow-hidden">
          <img 
            src={movie.banner || movie.image} 
            className="w-full h-full object-cover opacity-40 blur-sm brightness-50"
            alt="background"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center animate-pulse">
                   <i className={`fas ${isPlaying ? 'fa-play' : 'fa-pause'} text-3xl text-white`}></i>
                </div>
                <p className="text-white font-black uppercase tracking-widest text-sm">Streaming {movie.type === 'Series' ? `Episode ${currentEpisode?.number}` : 'Movie'}</p>
             </div>
          </div>
        </div>

        {/* Player Controls Layer */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="relative h-1 w-full bg-white/20 rounded-full cursor-pointer overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-[#5865F2] transition-all" 
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-white text-xl">
                <button onClick={() => setIsPlaying(!isPlaying)}><i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i></button>
                <button><i className="fas fa-backward-step"></i></button>
                <button><i className="fas fa-forward-step"></i></button>
                <button><i className="fas fa-volume-high"></i></button>
                <div className="text-sm font-medium text-gray-400">00:45:21 / 02:30:00</div>
              </div>
              
              <div className="flex items-center gap-6 text-white text-xl">
                <button className="text-sm font-bold bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition">1080p</button>
                <button><i className="fas fa-closed-captioning"></i></button>
                <button><i className="fas fa-gear"></i></button>
                <button><i className="fas fa-expand"></i></button>
              </div>
            </div>
          </div>
        </div>

        {/* Top Header Controls */}
        <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between z-50">
           <div className="flex items-center gap-4">
              <button onClick={onClose} className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#5865F2] text-white transition-all flex items-center justify-center">
                <i className="fas fa-arrow-left"></i>
              </button>
              <div>
                 <h2 className="text-white font-black text-xl tracking-tighter uppercase">{movie.title}</h2>
                 {movie.type === 'Series' && currentEpisode && (
                   <p className="text-[#5865F2] text-xs font-bold tracking-widest uppercase">S1 : E{currentEpisode.number} - {currentEpisode.title}</p>
                 )}
              </div>
           </div>
        </div>
      </div>

      {/* Playlist / Info Sidebar */}
      <div className="w-full md:w-[400px] h-full bg-[#1e1f22] border-l border-white/5 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <h3 className="text-white font-bold text-lg mb-2">{movie.type === 'Series' ? 'Up Next' : 'More Like This'}</h3>
          <div className="flex gap-2">
            <span className="bg-[#5865F2] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">{movie.type}</span>
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{movie.year}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
          {movie.type === 'Series' && movie.episodes ? (
            movie.episodes.map(ep => (
              <button 
                key={ep.id}
                onClick={() => setCurrentEpisode(ep)}
                className={`w-full flex gap-3 p-3 rounded-xl transition-all text-left ${currentEpisode?.id === ep.id ? 'bg-[#5865F2]/10 border border-[#5865F2]/30' : 'hover:bg-white/5'}`}
              >
                <div className="relative w-32 aspect-video flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden">
                   <img src={ep.thumbnail} className="w-full h-full object-cover" alt={ep.title} />
                   <div className="absolute bottom-1 right-1 text-[8px] bg-black/80 px-1 rounded text-white">{ep.duration}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold leading-tight line-clamp-2 ${currentEpisode?.id === ep.id ? 'text-[#5865F2]' : 'text-gray-200'}`}>
                    {ep.number}. {ep.title}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase font-black">Free Access</p>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
               <i className="fas fa-clapperboard text-4xl mb-4 opacity-10"></i>
               <p className="text-sm italic">Loading related content...</p>
            </div>
          )}
        </div>

        <div className="p-6 bg-black/20 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
           CinéNoiré Original Content
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
