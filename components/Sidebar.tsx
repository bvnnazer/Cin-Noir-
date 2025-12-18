
import React from 'react';
import { Genre } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
  onOpenSettings: () => void;
  onOpenAbout: () => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  selectedGenre, 
  onSelectGenre,
  onOpenSettings,
  onOpenAbout,
  onLogout,
  isLoggedIn
}) => {
  const genres = Object.values(Genre);

  return (
    <aside 
      className={`fixed top-0 left-0 h-full w-[320px] bg-[#1e1f22] z-[100] flex flex-col transform transition-transform duration-500 ease-in-out shadow-[20px_0_60px_rgba(0,0,0,0.5)] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Sidebar Header */}
      <div className="h-20 px-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3 text-[#5865F2] font-black text-2xl tracking-tighter uppercase">
          <i className="fas fa-clapperboard"></i>
          <span>CinéNoiré</span>
        </div>
        <button 
          onClick={onClose} 
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-10 hide-scrollbar">
        {/* User Quick Info */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center font-black text-lg">MB</div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#23a559] border-4 border-[#1e1f22] rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-black truncate">MovieBuff</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Ultra Member</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Welcome Guest</p>
              <button className="w-full bg-[#5865F2] text-white py-2 rounded-lg font-black text-sm uppercase">Sign In</button>
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="space-y-2">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Navigation</p>
          <button 
            onClick={() => { onSelectGenre(null as any); onClose(); }}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 transition-all ${!selectedGenre ? 'bg-[#5865F2]/20 text-[#5865F2] font-black' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <i className="fas fa-house"></i>
            <span className="text-sm">Home Catalog</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 text-gray-400 hover:bg-white/5 hover:text-white transition-all">
            <i className="fas fa-fire"></i>
            <span className="text-sm">Popular Shows</span>
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 text-gray-400 hover:bg-white/5 hover:text-white transition-all">
            <i className="fas fa-star"></i>
            <span className="text-sm">Top Rated</span>
          </button>
        </nav>

        {/* Genre Section */}
        <div className="space-y-4">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Library Genres</p>
          <div className="grid grid-cols-1 gap-1">
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => {
                  onSelectGenre(genre);
                  onClose();
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl flex items-center justify-between group transition-all ${selectedGenre === genre ? 'bg-[#5865F2] text-white font-black' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
              >
                <span className="text-sm"># {genre.toLowerCase()}</span>
                <i className="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-50 transition-opacity"></i>
              </button>
            ))}
          </div>
        </div>

        {/* Preferences Section */}
        <div className="space-y-2 pt-6 border-t border-white/5">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">User Center</p>
          <button onClick={() => { onOpenSettings(); onClose(); }} className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 text-gray-400 hover:bg-white/5 hover:text-white transition-all">
            <i className="fas fa-cog"></i>
            <span className="text-sm">Settings</span>
          </button>
          <button onClick={() => { onOpenAbout(); onClose(); }} className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 text-gray-400 hover:bg-white/5 hover:text-white transition-all">
            <i className="fas fa-info-circle"></i>
            <span className="text-sm">About CinéNoiré</span>
          </button>
          {isLoggedIn && (
            <button onClick={() => { onLogout(); onClose(); }} className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 text-red-400 hover:bg-red-500/10 transition-all font-bold mt-4">
              <i className="fas fa-sign-out-alt"></i>
              <span className="text-sm uppercase tracking-widest">Sign Out</span>
            </button>
          )}
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-6 bg-[#111214] text-center border-t border-white/5">
         <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Version 2.4.0 (Stable)</p>
      </div>
    </aside>
  );
};

export default Sidebar;
