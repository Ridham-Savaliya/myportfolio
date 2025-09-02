'use client';

import { Heart, Code, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and name */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Zap className="h-8 w-8 text-[var(--sw-blue)]" />
              <div className="absolute inset-0 animate-pulse">
                <Zap className="h-8 w-8 text-[var(--sw-blue)] opacity-30" />
              </div>
            </div>
            <span className="font-orbitron font-bold text-2xl text-glow-blue">
              Ridham Savaliya
            </span>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Full Stack Developer & Aspiring AI/ML Engineer
            <br />
            Building the future, one line of code at a time.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            {[
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#experience', label: 'Experience' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-[var(--sw-blue)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Ridham Savaliya. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-[var(--sw-blue)]" />
              <span>in React & Next.js</span>
            </div>
          </div>

          {/* Back to top */}
          <div className="mt-8">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-6 py-3 glass border border-[var(--sw-blue)]/30 text-[var(--sw-blue)] font-orbitron font-semibold rounded-lg hover:glow-blue hover-lift transition-all duration-300"
            >
              <Zap className="h-4 w-4" />
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}