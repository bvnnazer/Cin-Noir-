
import React, { useState } from 'react';
import { UserProfile } from '../types';

interface NavbarProps {
  user: UserProfile;
  onToggleSidebar: () => void;
  onOpenLogin: () => void;
  onOpenSettings: () => void;
  onOpenAbout: () => void;
  onLogout: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  onToggleSidebar, 
  onOpenLogin, 
  onOpenSettings, 
  onOpenAbout,
  onLogout,
  searchQuery,
  setSearchQuery
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-16 bg-[#313338]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 z-50 select-none shadow-2xl">
      <div className="flex items-center gap-6">
        <button onClick={onToggleSidebar} className="text-gray-400 hover:text-white transition-colors p-2 rounded-md hover:bg-white/5">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <div className="flex items-center gap-2 font-black text-[#5865F2] text-2xl tracking-tighter uppercase">
          <i className="fas fa-clapperboard"></i>
          <span className="hidden sm:inline">CinéNoiré</span>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search films..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1e1f22] border-none rounded-lg py-2 px-10 text-sm w-48 focus:w-80 transition-all outline-none text-[#dbdee1] placeholder:text-gray-500 focus:ring-1 focus:ring-[#5865F2]"
          />
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-400 hover:text-white transition-colors hidden sm:block"><i className="fas fa-bell"></i></button>
          
          <div className="relative">
            {user.isLoggedIn ? (
              <div 
                className="flex items-center gap-3 cursor-pointer group" 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <div className="hidden lg:block text-right">
                    <p className="text-xs font-black text-white">{user.username}</p>
                    <p className="text-[10px] text-[#5865F2] font-black uppercase tracking-tighter">Premium</p>
                </div>
                <img 
                  src={user.avatar} 
                  alt="Avatar" 
                  className="w-9 h-9 rounded-full border-2 border-transparent group-hover:border-[#5865F2] transition-all shadow-lg" 
                />
                
                {showProfileMenu && (
                  <div className="absolute top-[calc(100%+15px)] right-0 w-64 bg-[#1e1f22] rounded-xl shadow-2xl overflow-hidden py-2 z-[100] border border-white/5 animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-4 py-3 border-b border-white/5 mb-2 bg-gradient-to-r from-[#5865F2]/20 to-transparent">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Profile</p>
                      <p className="text-sm font-black text-white truncate">{user.username}</p>
                    </div>
                    <button onClick={onOpenSettings} className="w-full text-left px-4 py-2 text-sm hover:bg-[#5865F2] hover:text-white transition-colors flex items-center gap-3">
                      <i className="fas fa-cog"></i> Settings
                    </button>
                    <button onClick={onOpenAbout} className="w-full text-left px-4 py-2 text-sm hover:bg-[#5865F2] hover:text-white transition-colors flex items-center gap-3">
                      <i className="fas fa-info-circle"></i> About
                    </button>
                    <div className="h-[1px] bg-white/5 my-2" />
                    <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition-colors flex items-center gap-3 text-red-400">
                      <i className="fas fa-right-from-bracket"></i> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={onOpenLogin} className="bg-[#5865F2] text-white font-bold px-6 py-2 rounded-lg text-sm hover:bg-[#4752C4] transition-all shadow-lg shadow-blue-900/20 active:scale-95">Login</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
