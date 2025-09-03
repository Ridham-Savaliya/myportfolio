'use client';

import { User, Target, Rocket, Code2 } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-glow-blue mb-4">
          ABOUT ME
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] mx-auto rounded-full glow-blue"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile image */}
        <div className="relative group">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 glow-blue"></div>
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-[var(--sw-blue)]/30">
              <Image
                src="/blue_blck_bg.jpg"
                alt="Profile"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl border border-[var(--sw-blue)]/20 hover:border-[var(--sw-blue)]/40 transition-all duration-300 hover-lift">
            <div className="flex items-start gap-4 mb-4">
              <User className="h-8 w-8 text-[var(--sw-blue)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-orbitron text-xl font-semibold text-[var(--sw-blue)] mb-2">
                  WHO I AM
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with a keen interest in AI/ML engineering. 
                  I love creating innovative solutions that bridge the gap between traditional web 
                  development and cutting-edge artificial intelligence.
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-[var(--sw-purple)]/20 hover:border-[var(--sw-purple)]/40 transition-all duration-300 hover-lift">
            <div className="flex items-start gap-4 mb-4">
              <Target className="h-8 w-8 text-[var(--sw-purple)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-orbitron text-xl font-semibold text-[var(--sw-purple)] mb-2">
                  MY MISSION
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To leverage technology in creating meaningful digital experiences while continuously 
                  learning and adapting to the ever-evolving landscape of software development and 
                  artificial intelligence.
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-[var(--sw-gold)]/20 hover:border-[var(--sw-gold)]/40 transition-all duration-300 hover-lift">
            <div className="flex items-start gap-4 mb-4">
              <Rocket className="h-8 w-8 text-[var(--sw-gold)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-orbitron text-xl font-semibold text-[var(--sw-gold)] mb-2">
                  MY APPROACH
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest 
                  technologies. My goal is to build scalable applications that not only meet current 
                  requirements but also adapt to future needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {[
          { number: '15+', label: 'Projects Completed', color: 'blue' },
          { number: '1+', label: 'Years Experience', color: 'purple' },
          { number: '15+', label: 'Technologies', color: 'gold' },
          { number: '100%', label: 'Client Satisfaction', color: 'green' },
        ].map((stat, index) => (
          <div key={index} className="text-center glass p-6 rounded-xl hover-lift">
            <div className={`text-3xl font-orbitron font-bold text-glow-${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}