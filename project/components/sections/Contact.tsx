'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-glow-blue mb-4">
          GET IN TOUCH
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] mx-auto rounded-full glow-blue"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Ready to start your next project or just want to chat? I'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact form */}
        <div className="glass p-8 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="h-6 w-6 text-[var(--sw-blue)]" />
            <h3 className="font-orbitron text-xl font-semibold text-[var(--sw-blue)]">
              Send a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[var(--sw-blue)] focus:ring-1 focus:ring-[var(--sw-blue)] focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[var(--sw-blue)] focus:ring-1 focus:ring-[var(--sw-blue)] focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[var(--sw-blue)] focus:ring-1 focus:ring-[var(--sw-blue)] focus:outline-none transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[var(--sw-blue)] focus:ring-1 focus:ring-[var(--sw-blue)] focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--sw-blue)] to-[var(--sw-purple)] text-white font-orbitron font-semibold rounded-lg glow-blue hover:glow-purple hover-lift transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  SENDING...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          {/* Contact details */}
          <div className="glass p-8 rounded-2xl border border-white/10">
            <h3 className="font-orbitron text-xl font-semibold text-[var(--sw-purple)] mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--sw-blue)]/20 to-[var(--sw-purple)]/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[var(--sw-blue)]" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white font-semibold">savaliyaridham46@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--sw-purple)]/20 to-[var(--sw-gold)]/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[var(--sw-purple)]" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <div className="text-white font-semibold">+91 7861068642</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--sw-gold)]/20 to-[var(--sw-green)]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[var(--sw-gold)]" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-semibold">Surat,Gujarat India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="glass p-8 rounded-2xl border border-white/10">
            <h3 className="font-orbitron text-xl font-semibold text-[var(--sw-gold)] mb-6">
              Connect With Me
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/Ridham-Savaliya', color: 'blue' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ridham-savaliya-8984a1241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'purple' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/Ridham savaliya', color: 'gold' },
                { icon: Mail, label: 'Email', href: 'mailto:savaliyaridham46@gmail.com', color: 'green' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 glass border border-white/10 rounded-xl hover:border-[var(--sw-${social.color})]/40 hover:glow-${social.color} hover-lift transition-all duration-300 group`}
                  >
                    <Icon className={`h-5 w-5 text-[var(--sw-${social.color})] group-hover:text-white transition-colors duration-300`} />
                    <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--sw-green)]/20 to-[var(--sw-blue)]/20 rounded-2xl flex items-center justify-center">
              <div className="w-3 h-3 bg-[var(--sw-green)] rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-orbitron text-lg font-semibold text-[var(--sw-green)] mb-2">
              Available for Work
            </h3>
            <p className="text-gray-400 text-sm">
              I'm currently available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}