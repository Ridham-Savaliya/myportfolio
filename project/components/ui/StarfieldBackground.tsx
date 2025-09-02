'use client';

import { useEffect, useRef } from 'react';

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Stars array
    const stars: Array<{
      x: number;
      y: number;
      z: number;
      prevX?: number;
      prevY?: number;
    }> = [];

    // Create stars
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move star towards viewer
        star.z -= 2;

        // Reset star when it reaches viewer
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.z = 1000;
          star.prevX = undefined;
          star.prevY = undefined;
        }

        // Calculate star position
        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;

        // Calculate star size and opacity
        const size = (1000 - star.z) / 1000;
        const opacity = size;

        // Draw star trail
        if (star.prevX !== undefined && star.prevY !== undefined) {
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.5})`;
          ctx.lineWidth = size;
          ctx.beginPath();
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }

        // Draw star
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Store previous position
        star.prevX = x;
        star.prevY = y;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
}