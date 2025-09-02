'use client';

import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-glow-blue mb-4">
          EXPERIENCE & EDUCATION
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] mx-auto rounded-full glow-blue"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-[var(--sw-blue)]" />
            <h3 className="font-orbitron text-2xl font-bold text-[var(--sw-blue)] text-glow-blue">
              EXPERIENCE
            </h3>
          </div>

          <div className="space-y-8">
            {experienceData.work.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== experienceData.work.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-[var(--sw-blue)] to-[var(--sw-purple)]"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 bg-[var(--sw-blue)] rounded-full glow-blue border-2 border-black"></div>
                
                <div className="ml-12 glass p-6 rounded-xl border border-[var(--sw-blue)]/20 hover:border-[var(--sw-blue)]/40 transition-all duration-300 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="font-orbitron font-semibold text-white text-lg">
                      {item.position}
                    </h4>
                    <div className="flex items-center gap-2 text-[var(--sw-blue)] text-sm mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[var(--sw-purple)] mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">{item.company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{item.location}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 glass text-xs text-[var(--sw-gold)] rounded-md border border-[var(--sw-gold)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-[var(--sw-purple)]" />
            <h3 className="font-orbitron text-2xl font-bold text-[var(--sw-purple)] text-glow-purple">
              EDUCATION
            </h3>
          </div>

          <div className="space-y-8">
            {experienceData.education.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== experienceData.education.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-[var(--sw-purple)] to-[var(--sw-gold)]"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 bg-[var(--sw-purple)] rounded-full glow-purple border-2 border-black"></div>
                
                <div className="ml-12 glass p-6 rounded-xl border border-[var(--sw-purple)]/20 hover:border-[var(--sw-purple)]/40 transition-all duration-300 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="font-orbitron font-semibold text-white text-lg">
                      {item.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-[var(--sw-purple)] text-sm mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[var(--sw-gold)] mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">{item.school}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{item.location}</span>
                  </div>
                  
                  {item.gpa && (
                    <div className="text-[var(--sw-green)] text-sm mb-3">
                      GPA: {item.gpa}
                    </div>
                  )}
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  {item.courses && (
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 glass text-xs text-[var(--sw-green)] rounded-md border border-[var(--sw-green)]/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}