import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { Club } from './pages/Club';
import { JinanProject } from './pages/JinanProject';
import { Huchenfeng } from './pages/Huchenfeng';
import { MinecraftProject } from './pages/MinecraftProject';
import { XiaomiShowcase } from './pages/XiaomiShowcase';
import { SchoolMedia } from './pages/SchoolMedia';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900 relative flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Dedicated Project Pages */}
            <Route path="/club" element={<Club />} />
            <Route path="/jinan-project" element={<JinanProject />} />
            <Route path="/huchenfeng" element={<Huchenfeng />} />
            <Route path="/minecraft-project" element={<MinecraftProject />} />
            <Route path="/xiaomi-showcase" element={<XiaomiShowcase />} />
            <Route path="/school-media" element={<SchoolMedia />} />
            
            {/* Catch all route - redirect to home for 404s */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;