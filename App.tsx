import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { DriveAccess } from './components/DriveAccess';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-slate-200 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <DriveAccess />
      </main>
      <Footer />
    </div>
  );
}

export default App;