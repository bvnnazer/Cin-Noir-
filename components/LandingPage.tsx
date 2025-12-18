
import React from 'react';

interface LandingPageProps {
  onStart: () => void;
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, onLogin }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#404eed] overflow-hidden selection:bg-white selection:text-[#404eed]">
      {/* Mesh Gradient Background Layer for authentic "website" look */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#5865f2] rounded-full filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#4752C4] rounded-full filter blur-[120px] opacity-30"></div>
        
        {/* Repeating patterns if desired, but Discord is usually clean blobs */}
      </div>

      {/* Navigation - Exact Discord Style */}
      <nav className="relative w-full max-w-[1180px] flex items-center justify-between px-6 py-6 z-50">
        <div className="flex items-center gap-2 text-white font-black text-xl tracking-tighter cursor-pointer">
          <i className="fas fa-clapperboard text-2xl"></i>
          <span className="hidden sm:inline">CinéNoiré</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 font-bold text-white text-[16px]">
          <a href="#" className="hover:underline decoration-2 underline-offset-4">Download</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">Nitro</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">Discover</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">Safety</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">Support</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">Blog</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">Careers</a>
        </div>

        <button 
          onClick={onLogin}
          className="bg-white text-[#23272a] font-medium px-4 py-2 rounded-full text-sm hover:shadow-lg hover:text-[#5865F2] transition-all duration-200"
        >
          Login
        </button>
      </nav>

      {/* Hero Content - Centered and Bold */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 mt-16 md:mt-32 max-w-[800px] animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-white font-[900] text-[34px] md:text-[80px] leading-[0.95] tracking-tight mb-8 drop-shadow-sm">
          IMAGINE A PLACE...
        </h1>
        <p className="text-white text-[16px] md:text-[20px] leading-[1.6] font-normal mb-10 max-w-[750px] opacity-90">
          ...where you can belong to a school club, a gaming group, or a worldwide art community. 
          Where just you and a handful of friends can spend time together. A place that makes it easy 
          to talk every day and hang out more often.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto bg-white text-[#23272a] px-8 py-4 rounded-full font-medium text-xl hover:text-[#5865F2] hover:shadow-2xl transition-all duration-200 group flex items-center justify-center"
          >
            <i className="fas fa-play mr-3 group-hover:scale-110 transition-transform"></i>
            Open CinéNoiré in your browser
          </button>
          <button className="w-full sm:w-auto bg-[#23272a] text-white px-8 py-4 rounded-full font-medium text-xl hover:bg-[#36393f] hover:shadow-2xl transition-all duration-200 flex items-center justify-center">
            <i className="fas fa-download mr-3"></i>
            Download for Windows
          </button>
        </div>
      </div>

      {/* Background Illustrations - Replica placement */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Left Character Illustration */}
        <div className="absolute bottom-0 left-[-5%] md:left-[5%] w-[400px] md:w-[600px] opacity-100 transition-transform hover:translate-x-2 duration-[2s]">
          <img 
            src="https://discord.com/assets/8a8375abb0c86b78c741446e4cecf94a.svg" 
            className="w-full h-auto"
            alt=""
          />
        </div>
        {/* Right Character Illustration */}
        <div className="absolute bottom-0 right-[-5%] md:right-[5%] w-[400px] md:w-[600px] opacity-100 transition-transform hover:-translate-x-2 duration-[2s]">
          <img 
            src="https://discord.com/assets/c40c84ca18d84633a9d86b4046a91437.svg" 
            className="w-full h-auto"
            alt=""
          />
        </div>
      </div>

      {/* Clouds Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-bottom bg-cover opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://discord.com/assets/775596904130f146603d.svg")' }} />
    </div>
  );
};

export default LandingPage;
