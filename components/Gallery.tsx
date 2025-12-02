import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, ZoomIn } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'Urban Explore', category: 'Photography', imageUrl: 'https://picsum.photos/800/1200?random=1', description: 'Eksplorasi kota Jakarta' },
  { id: 2, title: 'Neon Nights', category: 'Creative', imageUrl: 'https://picsum.photos/800/600?random=2', description: 'Seni cahaya malam' },
  { id: 3, title: 'Minimalist', category: 'Product', imageUrl: 'https://picsum.photos/800/800?random=3', description: 'Kampanye produk minimalis' },
  { id: 4, title: 'Nature Call', category: 'Landscape', imageUrl: 'https://picsum.photos/800/1000?random=4', description: 'Keindahan alam Indonesia' },
  { id: 5, title: 'Portrait Mode', category: 'Portrait', imageUrl: 'https://picsum.photos/800/900?random=5', description: 'Sesi foto personal' },
  { id: 6, title: 'Abstract Flow', category: 'Art', imageUrl: 'https://picsum.photos/800/700?random=6', description: 'Eksperimen bentuk dan warna' },
];

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Photography', 'Product', 'Portrait', 'Art'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.category === 'Creative' || p.category === 'Landscape');

  return (
    <section id="gallery" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Galeri Terpilih</h2>
            <p className="text-slate-400 max-w-lg">
              Kumpulan karya terbaik yang telah saya kerjakan untuk berbagai klien dan proyek pribadi.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                  activeFilter === filter 
                    ? 'bg-primary border-primary text-white' 
                    : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              {/* Image */}
              <div className="aspect-w-3 aspect-h-4 w-full h-full min-h-[300px] bg-slate-800">
                 <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <div className="flex gap-3">
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-dark transition-colors">
                        <ZoomIn size={18} />
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-colors">
                        <ExternalLink size={18} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};