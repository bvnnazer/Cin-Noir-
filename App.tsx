
import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { MOCK_MOVIES } from './constants';
import { AuthMode, UserProfile, Genre, Movie } from './types';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import AuthModal from './components/AuthModal';
import SettingsModal from './components/SettingsModal';
import AboutModal from './components/AboutModal';
import LandingPage from './components/LandingPage';
import VideoPlayer from './components/VideoPlayer';

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    username: 'MovieBuff',
    avatar: 'https://picsum.photos/seed/cine/100/100',
    isLoggedIn: false,
    preferences: {
      language: 'English',
      autoplay: true,
      quality: '1080p'
    }
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const openLogin = () => setAuthMode('login');
  const openRegister = () => setAuthMode('register');
  const closeAuth = () => setAuthMode(null);
  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);
  const openAbout = () => setIsAboutOpen(true);
  const closeAbout = () => setIsAboutOpen(false);

  const handleLogout = () => {
    setUser(prev => ({ ...prev, isLoggedIn: false }));
    setHasStarted(false);
  };

  const handleLogin = (username: string) => {
    setUser(prev => ({ ...prev, username, isLoggedIn: true }));
    setHasStarted(true);
    closeAuth();
  };

  const handleWatch = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const filteredMovies = MOCK_MOVIES.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = !selectedGenre || movie.genres.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  const trendingMovies = MOCK_MOVIES.filter(m => m.trending);
  const actionMovies = MOCK_MOVIES.filter(m => m.genres.includes(Genre.Action));
  const newReleases = MOCK_MOVIES.slice(0, 5);

  if (!user.isLoggedIn && !hasStarted && !authMode) {
    return (
      <LandingPage 
        onStart={() => setHasStarted(true)} 
        onLogin={openLogin} 
      />
    );
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-[#313338] text-[#dbdee1] overflow-hidden">
        {/* Sliding Sidebar - "Hidden in the leftside" */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
          onOpenSettings={openSettings}
          onOpenAbout={openAbout}
          onLogout={handleLogout}
          isLoggedIn={user.isLoggedIn}
        />

        {/* Backdrop overlay for when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-[55] backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setIsSidebarOpen(false)} 
          />
        )}

        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar 
            user={user} 
            onToggleSidebar={toggleSidebar} 
            onOpenLogin={openLogin}
            onOpenSettings={openSettings}
            onOpenAbout={openAbout}
            onLogout={handleLogout}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <main className="flex-1 overflow-y-auto scroll-smooth hide-scrollbar bg-[#313338] pt-16">
            <Hero 
              movies={trendingMovies.length > 0 ? trendingMovies : MOCK_MOVIES.slice(0, 3)} 
              onOpenLogin={openLogin} 
              isLoggedIn={user.isLoggedIn}
              onWatch={handleWatch}
            />
            
            <div className="px-4 md:px-12 py-10 space-y-16 pb-32 max-w-[1800px] mx-auto">
              {selectedGenre && (
                  <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="bg-[#5865F2] w-1 h-8 rounded-full" />
                      <h2 className="text-4xl font-black text-white tracking-tighter uppercase">{selectedGenre} Catalog</h2>
                      <button onClick={() => setSelectedGenre(null)} className="ml-auto text-xs font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition text-gray-400 uppercase tracking-widest">Back to Global</button>
                  </div>
              )}

              {searchQuery && <h2 className="text-2xl font-bold text-white mb-4">Search results for "{searchQuery}"</h2>}

              <div className="space-y-20">
                <MovieRow title="Trending Now" movieList={trendingMovies} onWatch={handleWatch} />
                <MovieRow title="Action & Adventure" movieList={actionMovies} onWatch={handleWatch} />
                <MovieRow title="New Arrivals" movieList={newReleases} onWatch={handleWatch} />
                <MovieRow title="Top Rated Classics" movieList={[...MOCK_MOVIES].sort((a,b) => b.rating - a.rating)} onWatch={handleWatch} />
              </div>

              <footer className="mt-32 pt-20 pb-16 border-t border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                      <div className="col-span-1 md:col-span-2 space-y-6">
                          <h3 className="text-[#5865F2] font-black text-4xl uppercase tracking-tighter flex items-center gap-3">
                              <i className="fas fa-clapperboard"></i> CinéNoiré
                          </h3>
                          <p className="text-lg leading-relaxed max-w-lg text-gray-400 font-medium">
                            Experience cinema like never before. High-fidelity streaming, AI-powered discovery, and a community of millions.
                          </p>
                      </div>
                      <div className="space-y-6">
                        <h4 className="font-black text-white uppercase text-sm tracking-widest">Navigation</h4>
                        <ul className="space-y-4 text-base text-gray-400">
                            <li><a href="#" className="hover:text-[#5865F2] transition-colors">Home Feed</a></li>
                            <li><a href="#" className="hover:text-[#5865F2] transition-colors">Popular Series</a></li>
                            <li><a href="#" className="hover:text-[#5865F2] transition-colors">Trending Movies</a></li>
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <h4 className="font-black text-white uppercase text-sm tracking-widest">Company</h4>
                        <ul className="space-y-4 text-base text-gray-400">
                            <li onClick={openAbout} className="cursor-pointer hover:text-[#5865F2] transition-colors">About Us</li>
                            <li><a href="#" className="hover:text-[#5865F2] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#5865F2] transition-colors">Contact</a></li>
                        </ul>
                      </div>
                  </div>
                  <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      <div>© 2024 CinéNoiré Media Group. All Rights Reserved.</div>
                      <div className="flex gap-10">
                          <a href="#" className="hover:text-white transition">Privacy</a>
                          <a href="#" className="hover:text-white transition">Terms</a>
                          <a href="#" className="hover:text-white transition">Cookies</a>
                      </div>
                  </div>
              </footer>
            </div>
          </main>
        </div>

        {authMode && <AuthModal mode={authMode} onClose={closeAuth} onLogin={handleLogin} />}
        {isSettingsOpen && <SettingsModal user={user} setUser={setUser} onClose={closeSettings} />}
        {isAboutOpen && <AboutModal onClose={closeAbout} />}
        {selectedMovie && <VideoPlayer movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
      </div>
    </Router>
  );
};

export default App;
