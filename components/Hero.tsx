import React from 'react';
import { ArrowRight, Camera, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  // Placeholder for your profile photo. You can replace this URL with your own image link later.
  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-slate-800/20 to-transparent -skew-x-12 translate-x-20 -z-10 hidden lg:block"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 backdrop-blur-sm mx-auto lg:mx-0">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase">Professional Photographer</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Menangkap Momen,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Menciptakan Abadi.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hai, saya Rizky. Saya membantu brand dan individu menceritakan kisah terbaik mereka melalui visual yang estetik, tajam, dan penuh makna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href="#gallery"
                className="group px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
              >
                Lihat Karya
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 border border-slate-700 transition-all"
              >
                Hubungi Saya
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>50+ Proyek Selesai</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>5 Tahun Pengalaman</span>
                </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-40 z-10"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Decorative Frame Border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl z-20 pointer-events-none"></div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-40 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-2xl opacity-40 -z-10"></div>
            
            {/* Floating Tag */}
            <div className="absolute -right-4 top-10 bg-dark/80 backdrop-blur-md p-3 rounded-lg border border-slate-700 shadow-xl hidden md:block animate-bounce duration-[3000ms]">
                <span className="text-2xl">📸</span>
            </div>
             <div className="absolute -left-4 bottom-20 bg-dark/80 backdrop-blur-md p-3 rounded-lg border border-slate-700 shadow-xl hidden md:block animate-bounce duration-[4000ms]">
                <span className="text-2xl">🎨</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};