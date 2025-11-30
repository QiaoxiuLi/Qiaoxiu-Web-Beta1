import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NavLink } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navLinks: NavLink[] = [
  { label: '首页', href: '/' },
  { label: '融高部技术指导小组', href: '/club' },
  { label: '济安复刻项目', href: '/jinan-project' },
  { label: '户晨风录播', href: '/huchenfeng' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-6 pointer-events-none px-4">
      {/* Main Nav Bar - Floating Capsule */}
      <nav 
        className={`
          pointer-events-auto
          relative z-50
          flex items-center justify-between
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          bg-white/70 backdrop-blur-xl backdrop-saturate-150
          border border-white/50 shadow-slate-900/5
          overflow-hidden
          ${scrolled 
            ? 'w-auto min-w-[320px] px-2 pl-5 py-2 rounded-full shadow-xl bg-white/80' 
            : 'w-[92%] max-w-5xl px-6 py-4 rounded-[2rem] shadow-lg'
          }
        `}
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link 
            to="/" 
            className="text-lg font-bold tracking-wider text-slate-800 hover:text-brand-600 transition-colors duration-300"
          >
            翅季之站
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center transition-all duration-700 ${scrolled ? 'space-x-1' : 'space-x-2'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href} 
              className={`
                font-medium text-slate-600 hover:text-brand-600 hover:bg-white/60 transition-all duration-300
                ${scrolled ? 'px-4 py-2 text-sm rounded-full' : 'px-5 py-2.5 text-sm rounded-2xl'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`
              flex items-center justify-center
              text-slate-600 hover:bg-white/50 hover:text-brand-600 transition-all duration-300 active:scale-95
              ${scrolled ? 'p-2 rounded-full h-9 w-9' : 'p-2 rounded-xl'}
            `}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Detached Floating Card */}
      <div 
        className={`
          pointer-events-auto
          md:hidden 
          mt-3 w-[92%] max-w-[320px]
          bg-white/80 backdrop-blur-2xl backdrop-saturate-150
          border border-white/50 shadow-2xl shadow-slate-900/10
          rounded-[2rem]
          overflow-hidden 
          origin-top
          transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
          ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 max-h-[400px] visible' 
            : 'opacity-0 scale-95 -translate-y-4 max-h-0 invisible'
        }`}
      >
        <div className="p-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="flex justify-between items-center px-5 py-3.5 text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-white/60 rounded-2xl transition-all duration-200"
            >
              <span>{link.label}</span>
              <ChevronRight className="h-4 w-4 opacity-40" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};