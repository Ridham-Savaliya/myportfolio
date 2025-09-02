'use client';

import { useState } from 'react';
import { Code2, Database, Brain, Smartphone, Server, Globe } from 'lucide-react';
import { skillsData } from '@/data/skills';

const categories = [
  { id: 'frontend', label: 'Frontend', icon: Globe, color: 'blue' },
  { id: 'backend', label: 'Backend', icon: Server, color: 'purple' },
  { id: 'database', label: 'Database', icon: Database, color: 'gold' },
  { id: 'ai-ml', label: 'AI/ML', icon: Brain, color: 'green' },
  { id: 'mobile', label: 'Mobile', icon: Smartphone, color: 'blue' },
  { id: 'tools', label: 'Tools', icon: Code2, color: 'purple' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-glow-blue mb-4">
          SKILLS & EXPERTISE
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] mx-auto rounded-full glow-blue"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A comprehensive arsenal of modern technologies and frameworks for building exceptional digital experiences.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-orbitron font-semibold transition-all duration-300 hover-lift ${
                activeCategory === category.id
                  ? `bg-gradient-to-r from-[var(--sw-${category.color})] to-[var(--sw-purple)] text-white glow-${category.color}`
                  : 'glass border border-white/10 text-gray-300 hover:border-white/20'
              }`}
            >
              <Icon className="h-5 w-5" />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData[activeCategory]?.map((skill, index) => (
          <div
            key={skill.name}
            className="glass p-6 rounded-xl border border-white/10 hover:border-[var(--sw-blue)]/40 transition-all duration-300 hover-lift group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center">
              {/* Skill icon/logo placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--sw-blue)]/20 to-[var(--sw-purple)]/20 rounded-xl flex items-center justify-center group-hover:glow-blue transition-all duration-300">
                <span className="text-2xl font-bold text-[var(--sw-blue)] group-hover:text-white">
                  {skill.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="font-semibold text-white mb-2 group-hover:text-[var(--sw-blue)] transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Skill level */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="h-2 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] rounded-full glow-blue transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Additional info */}
      <div className="mt-16 text-center">
        <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="font-orbitron text-xl font-semibold text-[var(--sw-gold)] mb-4">
            CONTINUOUS LEARNING
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            attending workshops, and working on side projects to stay at the forefront of 
            innovation. My curiosity drives me to experiment with emerging technologies like 
            WebAssembly, Edge Computing, and the latest AI/ML frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}