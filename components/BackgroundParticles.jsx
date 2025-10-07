"use client";
import { useEffect, useRef } from "react";

export default function BackgroundParticles({ count = 34, speed = 0.12, opacity = 0.08 }) {
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));

    function step() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = `rgba(148,163,184,${opacity})`; // slate-400-ish
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -5) p.x = w + 5; if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5; if (p.y > h + 5) p.y = -5;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      rafRef.current = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count, speed, opacity]);

  return <canvas ref={ref} aria-hidden className="fixed inset-0 -z-10 pointer-events-none fade-in" />;
}