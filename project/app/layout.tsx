import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  title: 'Ridham | Full Stack Developer & AI/ML Engineer',
  description: 'Full Stack Developer specializing in modern web technologies and AI/ML engineering. Building the future, one line of code at a time.',
  keywords: 'Full Stack Developer, AI/ML Engineer, React, Next.js, Python, JavaScript, TypeScript',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Portfolio',
    title: 'Portfolio | Full Stack Developer & AI/ML Engineer',
    description: 'Full Stack Developer specializing in modern web technologies and AI/ML engineering.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Full Stack Developer & AI/ML Engineer',
    description: 'Full Stack Developer specializing in modern web technologies and AI/ML engineering.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/yellow_black_bg.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} bg-black text-white overflow-x-hidden`}>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}