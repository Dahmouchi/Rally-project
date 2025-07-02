"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-white font-montserrat font-black text-2xl">
          <span className="text-primary">Les</span> Joueuses
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#equipe" className="text-white hover:text-primary transition-colors">L&apos;Équipe</a>
          <a href="#engagement" className="text-white hover:text-primary transition-colors">Engagement</a>
          <a href="#pourquoi" className="text-white hover:text-primary transition-colors">Pourquoi nous</a>
          <a href="#formules" className="text-white hover:text-primary transition-colors">Formules</a>
          <a href="#contact" className="btn-primary">Nous contacter</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#equipe" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              L&apos;Équipe
            </a>
            <a 
              href="#engagement" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Engagement
            </a>
            <a 
              href="#pourquoi" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pourquoi nous
            </a>
            <a 
              href="#formules" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Formules
            </a>
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nous contacter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
