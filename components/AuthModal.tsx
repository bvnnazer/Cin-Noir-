
import React, { useState } from 'react';
import { AuthMode } from '../types';

interface AuthModalProps { mode: AuthMode; onClose: () => void; onLogin: (username: string) => void; }

const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, onLogin }) => {
  const [formMode, setFormMode] = useState<AuthMode>(mode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email.split('@')[0] || 'Member');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#1e1f22]/60 backdrop-blur-2xl transition-all duration-500 animate-in fade-in" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#313338] rounded-lg shadow-2xl border border-white/5 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="p-10">
          <div className="text-center mb-10">
            <div className="text-3xl font-black text-[#5865F2] tracking-tighter mb-2 uppercase">
              <i className="fas fa-clapperboard mr-2"></i>CinéNoiré
            </div>
            <h2 className="text-2xl font-bold text-white">
              {formMode === 'login' ? 'Hey! Welcome back' : 'Start your journey'}
            </h2>
            <p className="text-gray-400 text-sm mt-1">We're so excited to see you!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Email or Phone</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#1e1f22] border-none rounded py-3 px-4 text-white focus:ring-1 focus:ring-[#5865F2] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#1e1f22] border-none rounded py-3 px-4 text-white focus:ring-1 focus:ring-[#5865F2] outline-none transition-all" />
                <a href="#" className="text-xs text-[#5865F2] hover:underline">Forgot your password?</a>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#5865F2] text-white font-bold py-3 rounded text-base hover:bg-[#4752C4] transition-all shadow-lg shadow-blue-900/20 active:scale-95">
              {formMode === 'login' ? 'Log In' : 'Continue'}
            </button>
          </form>

          <div className="mt-8 text-sm">
            {formMode === 'login' ? (
              <p className="text-gray-400">Need an account? <button onClick={() => setFormMode('register')} className="text-[#5865F2] hover:underline font-medium">Register</button></p>
            ) : (
              <p className="text-gray-400">Already have an account? <button onClick={() => setFormMode('login')} className="text-[#5865F2] hover:underline font-medium">Log In</button></p>
            )}
          </div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-all"><i className="fas fa-times text-xl"></i></button>
      </div>
    </div>
  );
};

export default AuthModal;
