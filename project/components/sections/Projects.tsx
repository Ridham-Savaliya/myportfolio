'use client';

import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Image from 'next/image';

const categories = ['all', 'web', 'mobile', 'ai-ml', 'fullstack'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-glow-blue mb-4">
          FEATURED PROJECTS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] mx-auto rounded-full glow-blue"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A collection of projects that showcase my technical skills and creative problem-solving abilities.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 rounded-xl font-orbitron font-semibold capitalize transition-all duration-300 hover-lift ${
              activeFilter === category
                ? 'bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] text-white glow-blue'
                : 'glass border border-white/10 text-gray-300 hover:border-white/20'
            }`}
          >
            {category === 'ai-ml' ? 'AI/ML' : category.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--sw-blue)]/40 transition-all duration-500 hover-lift"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Project image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              
              {/* Overlay content */}
              <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--sw-blue)] text-white rounded-lg glow-blue hover:bg-[var(--sw-purple)] transition-colors duration-300"
                >
                  <Eye className="h-5 w-5" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass border border-white/20 text-white rounded-lg hover:glow-blue transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-[var(--sw-purple)] to-[var(--sw-blue)] text-white text-xs font-orbitron font-semibold rounded-full">
                  {project.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Project content */}
            <div className="p-6">
              <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-[var(--sw-blue)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 glass text-xs text-[var(--sw-blue)] rounded-md border border-[var(--sw-blue)]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] text-white text-sm font-semibold rounded-lg glow-blue hover:glow-purple transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass border border-white/20 text-white text-sm font-semibold rounded-lg hover:glow-blue transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View more button */}
      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 glass border border-[var(--sw-gold)]/30 text-[var(--sw-gold)] font-orbitron font-semibold rounded-lg hover:glow-gold hover-lift transition-all duration-300"
        >
          View More Projects
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}