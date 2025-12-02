import React from 'react';
import { HardDrive, Smartphone, Download, Share2 } from 'lucide-react';

export const DriveAccess: React.FC = () => {
  // Demo Google Drive Folder Link
  const driveLink = "https://drive.google.com/drive/u/0/my-drive"; 
  // Using an API to generate the QR code to ensure it works without npm install
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(driveLink)}&color=0f172a&bgcolor=ffffff`;

  return (
    <section id="drive" className="py-24 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/20 text-primary text-sm font-semibold">
                <HardDrive size={16} />
                <span>Akses Premium</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Download Aset & <br /> High-Res Photos
              </h2>
              <p className="text-slate-300 text-lg">
                Pindai QR Code di samping untuk mengakses folder Google Drive yang berisi semua hasil foto resolusi tinggi, aset desain, dan dokumen proyek.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="p-2 bg-slate-700 rounded-full text-white">
                    <Smartphone size={20} />
                  </div>
                  <span>Scan via HP</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="p-2 bg-slate-700 rounded-full text-white">
                    <Download size={20} />
                  </div>
                  <span>Instant Access</span>
                </div>
              </div>

              <div className="pt-6">
                 <a 
                    href={driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold border-b border-primary/50 hover:border-primary transition-all pb-1"
                 >
                    Atau klik link ini langsung
                    <Share2 size={16} />
                 </a>
              </div>
            </div>

            {/* Right Content - The QR Card */}
            <div className="flex-shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs mx-auto">
                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 border-2 border-slate-900/10">
                  <img src={qrCodeUrl} alt="QR Code Drive" className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                    <p className="text-dark font-bold text-lg mb-1">SCAN ME</p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Google Drive Folder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};