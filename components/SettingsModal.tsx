
import React from 'react';
import { UserProfile } from '../types';

interface SettingsModalProps { user: UserProfile; setUser: React.Dispatch<React.SetStateAction<UserProfile>>; onClose: () => void; }

const SettingsModal: React.FC<SettingsModalProps> = ({ user, setUser, onClose }) => {
  const updatePref = (key: string, value: any) => {
    setUser(prev => ({ ...prev, preferences: { ...prev.preferences, [key]: value } }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#1e1f22]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#313338] rounded-lg shadow-2xl border border-white/5 overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-tight">User Settings</h2>
            <button onClick={onClose} className="hover:text-[#5865F2] transition"><i className="fas fa-times text-2xl"></i></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative group cursor-pointer">
                <img src={user.avatar} className="w-28 h-28 rounded-full object-cover border-4 border-[#1e1f22]" alt="User" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><i className="fas fa-camera text-white"></i></div>
              </div>
              <div>
                <h3 className="text-lg font-bold">{user.username}</h3>
                <p className="text-xs text-[#5865F2] font-black">ULTRA SUPPORTER</p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div className="space-y-4">
                <h4 className="text-gray-400 uppercase text-[10px] font-black tracking-widest">Streaming Preferences</h4>
                <div className="flex items-center justify-between p-3 bg-[#1e1f22] rounded-md">
                  <span className="text-sm">Autoplay Content</span>
                  <button onClick={() => updatePref('autoplay', !user.preferences.autoplay)} className={`w-10 h-5 rounded-full relative transition-colors ${user.preferences.autoplay ? 'bg-[#5865F2]' : 'bg-gray-700'}`}>
                    <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${user.preferences.autoplay ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1e1f22] rounded-md">
                  <span className="text-sm">Default Bitrate</span>
                  <select value={user.preferences.quality} onChange={(e) => updatePref('quality', e.target.value)} className="bg-transparent border-none text-sm text-[#5865F2] outline-none font-bold">
                    <option className="bg-[#1e1f22]">Auto-Adjust</option>
                    <option className="bg-[#1e1f22]">4K Ultra</option>
                    <option className="bg-[#1e1f22]">1080p</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-3">
                <button className="w-full text-left p-2 rounded hover:bg-white/5 text-sm transition text-gray-300">Security & Privacy</button>
                <button className="w-full text-left p-2 rounded hover:bg-white/5 text-sm transition text-gray-300">Billing & Nitro</button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-end gap-3">
            <button onClick={onClose} className="px-6 py-2 text-sm font-bold text-gray-400 hover:text-white transition">Cancel</button>
            <button onClick={onClose} className="px-8 py-2 bg-[#5865F2] text-white rounded text-sm font-bold hover:bg-[#4752C4] transition shadow-lg shadow-blue-900/20">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
