'use client';

import { Award, Trophy, Star, Zap } from 'lucide-react';
import { achievementsData } from '@/data/achievements';

const iconMap = {
  award: Award,
  trophy: Trophy,
  star: Star,
  zap: Zap,
};

const colorMap = {
  blue: { bg: 'from-[var(--sw-blue)]', text: 'text-[var(--sw-blue)]', glow: 'glow-blue' },
  purple: { bg: 'from-[var(--sw-purple)]', text: 'text-[var(--sw-purple)]', glow: 'glow-purple' },
  gold: { bg: 'from-[var(--sw-gold)]', text: 'text-[var(--sw-gold)]', glow: 'glow-gold' },
  green: { bg: 'from-[var(--sw-green)]', text: 'text-[var(--sw-green)]', glow: 'glow-green' },
};

export default function Achievements() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-glow-blue mb-4">
          ACHIEVEMENTS & CERTIFICATIONS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] mx-auto rounded-full glow-blue"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Recognition and certifications that validate my expertise and commitment to excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((achievement, index) => {
          const Icon = iconMap[achievement.icon];
          const colors = colorMap[achievement.color];
          
          return (
            <div
              key={achievement.id}
              className={`group glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover-lift ${colors.glow} pulse-glow`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${colors.bg} to-transparent rounded-2xl flex items-center justify-center ${colors.glow} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`h-8 w-8 ${colors.text}`} />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className={`font-orbitron text-xl font-bold ${colors.text} mb-3 group-hover:text-white transition-colors duration-300`}>
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Issuer and date */}
                <div className="space-y-2">
                  <div className={`font-semibold ${colors.text} text-sm`}>
                    {achievement.issuer}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {achievement.date}
                  </div>
                </div>

                {/* Badge/Certificate link */}
                {achievement.credentialUrl && (
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-4 px-4 py-2 glass border border-white/20 ${colors.text} text-sm font-semibold rounded-lg hover:${colors.glow} hover-lift transition-all duration-300`}
                  >
                    View Credential
                  </a>
                )}
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-current rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-current rounded-full animate-pulse opacity-40 delay-300"></div>
            </div>
          );
        })}
      </div>

      {/* Additional stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: '4+', label: 'Certifications', color: 'blue' },
{ value: '1+', label: 'Industry Experiences', color: 'purple' },
{ value: '20+', label: 'Projects Built', color: 'gold' },
{ value: '5000+', label: 'Learning Hours', color: 'green' },

        ].map((stat, index) => (
          <div
            key={index}
            className={`text-center glass p-6 rounded-xl hover-lift glow-${stat.color}`}
          >
            <div className={`text-3xl font-orbitron font-bold text-glow-${stat.color} mb-2`}>
              {stat.value}
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