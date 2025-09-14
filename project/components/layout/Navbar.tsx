'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 pt-[env(safe-area-inset-top)]   w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-2 group">
            {/* <div className="relative">
              <Zap className="h-8 w-8 text-[var(--sw-blue)] group-hover:text-[var(--sw-gold)] transition-colors duration-300" />
              <div className="absolute inset-0 animate-pulse">
                <Zap className="h-8 w-8 text-[var(--sw-blue)] opacity-30" />
              </div>
            </div> */}

              <Image 
        src="/mylogo.png"  // or "/logo.svg"
        alt="My Logo"
        width={80}       // set desired width
        height={40}      // set desired height
        priority         // optional: preload for faster load
      />
            <span className="font-orbitron font-bold text-xl text-glow-blue">
              RIDHAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-[var(--sw-blue)] transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 mr-4 rounded-lg glass hover:glow-blue transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[var(--sw-blue)]" />
            ) : (
              <Menu className="h-6 w-6 text-[var(--sw-blue)]" />
            )}
          </button>
        </div>
      </div>

     {/* Mobile Navigation */}
{isMobileMenuOpen && (
  <div className="md:hidden fixed top-16 left-0 w-full glass backdrop-blur-md border-t border-white/10 z-40">
    <div className="px-4 py-3 space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="block px-3 py-2 text-white hover:text-[var(--sw-blue)] transition-colors duration-300 font-medium"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
)}

    </nav>
  );
}