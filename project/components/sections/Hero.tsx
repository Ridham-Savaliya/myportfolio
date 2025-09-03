'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10"></div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Opening crawl style animation */}
        <div className="crawl-text mb-8">
          <div className="crawl-content space-y-6">
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-glow-red bg-gradient-to-r from-[var(--sw-red)] to-[var(--sw-purple)] bg-clip-text text-transparent gradient-animation">
                RIDHAM SAVALIYA
              </span>
              <span className="block text-glow-blue bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] bg-clip-text text-transparent gradient-animation">
                FULL STACK
              </span>
              <span className="block text-glow-gold bg-gradient-to-r from-[var(--sw-gold)] to-[var(--sw-green)] bg-clip-text text-transparent gradient-animation">
                DEVELOPER
              </span>
            </h1>

            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] rounded-full glow-blue"></div>

            <p className="text-xl sm:text-2xl md:text-3xl font-orbitron text-gray-300 mb-6">
              Aspiring{' '}
              <span className="text-[var(--sw-purple)] text-glow-purple">AI/ML Engineer</span>
            </p>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Building the future, one line of code at a time. Specializing in modern web technologies
              and exploring the frontiers of artificial intelligence.
            </p>

            <p className="text-glow-blue text-2xl bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] bg-clip-text text-transparent gradient-animation">
              🎬 In Association with
            </p>
            <p className="text-glow-gold">⚡ React ⚛ & 🚀 Next.js ✨</p>
            <p className="text-glow-gold">🎨 Tailwind & Framer Motion 🎬</p>
            <p className="text-glow-purple text-2xl bg-gradient-to-r from-[var(--sw-purple)] to-[var(--sw-red)] bg-clip-text text-transparent gradient-animation">
              ⚙ Directed By
            </p>
            <p className="text-glow-blue">💾 Node.js + Express</p>
            <p className="text-glow-blue">🛢 MongoDB & Sequelize</p>
            <p className="text-glow-gold text-2xl bg-gradient-to-r from-[var(--sw-gold)] to-[var(--sw-green)] bg-clip-text text-transparent gradient-animation">
              🚢 Orchestrated With
            </p>
            <p className="text-glow-blue">🐳 Docker | ☸ Kubernetes | 🤖 GitHub Actions </p>
            <p className="text-glow-purple"></p>
            <p className="text-glow-gold"></p>
          </div>
        </div>
      </div>

      {/* Action buttons - anchored to hero */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 justify-center items-center z-30">
        <a
          href="#projects"
          className="px-8 py-4 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] text-white font-semibold rounded-lg glow-blue hover-lift hover:glow-purple transition-all duration-300 font-orbitron"
        >
          VIEW MY WORK
        </a>
        <a
          href="#contact"
          className="px-8 py-4 glass border border-[var(--sw-blue)]/30 text-[var(--sw-blue)] font-semibold rounded-lg hover:glow-blue hover-lift transition-all duration-300 font-orbitron"
        >
          GET IN TOUCH
        </a>
      </div>

      {/* Scroll indicator - anchored to hero */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ChevronDown className="h-8 w-8 text-[var(--sw-blue)] opacity-70" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-[var(--sw-blue)] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-[var(--sw-purple)] rounded-full animate-pulse opacity-80 delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[var(--sw-gold)] rounded-full animate-pulse opacity-40 delay-700"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[var(--sw-green)] rounded-full animate-pulse opacity-60 delay-1000"></div>
    </div>
  );
}
