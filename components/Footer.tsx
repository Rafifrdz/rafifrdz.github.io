import React from 'react';
import { Instagram, Twitter, Mail, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Mari Berkolaborasi</h3>
            <p className="text-slate-400 text-sm">Siap untuk menciptakan sesuatu yang luar biasa bersama?</p>
            <a href="mailto:hello@kreatif.id" className="text-primary hover:text-secondary transition-colors mt-2 inline-block">hello@kreatif.id</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 mt-10 pt-6 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Kreatif.id. All rights reserved. Made with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};