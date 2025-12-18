
import React from 'react';

const AboutModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#1e1f22]/90 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-[#2b2d31] rounded-2xl shadow-2xl border border-white/5 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-400">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-48 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&h=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 hover:scale-110 transition-transform duration-1000" alt="Cinema" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2d31] via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-12 space-y-6">
                <h2 className="text-4xl font-black text-[#5865F2] uppercase tracking-tighter flex items-center gap-2">
                  <i className="fas fa-clapperboard"></i>
                  CinéNoiré
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                    <p>Designed for the true cinephile. CinéNoiré brings the magic of the big screen to your home with unmatched visual fidelity and curated collections.</p>
                    <p>From timeless classics to modern blockbusters, we provide a premium streaming experience without compromise, built on a foundation of community and technology.</p>
                    <div className="pt-4 grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                            <p className="text-[#5865F2] font-black text-2xl">2,500+</p>
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-500">Premium Titles</p>
                        </div>
                        <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                            <p className="text-[#5865F2] font-black text-2xl">HDR10+</p>
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-500">Visual Quality</p>
                        </div>
                    </div>
                </div>
                <button 
                  onClick={onClose} 
                  className="w-full py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl transition-all font-black uppercase tracking-widest shadow-lg shadow-blue-900/20 active:scale-95"
                >
                  Close
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
