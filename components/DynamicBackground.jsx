"use client";
import { useEffect, useRef } from "react";

export default function DynamicBackground({
  radius = 520,       // pointer glow radius in px
  ease = 0.08,        // how quickly the glow chases the pointer
  strength = 1,       // 0.7–1.3 to tune intensity
}) {
  const overlayRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    // Start glow near center-right so it looks alive even before moving
    let cx = w * 0.62;
    let cy = h * 0.42;
    let tx = cx;
    let ty = cy;

    let active = false;

    const isDark = () => document.documentElement.classList.contains("dark");

    function setBG(x, y) {
      const dark = isDark();
      // Subtle dual-color glow that works on both themes
      const c1 = dark
        ? `hsla(198, 95%, 70%, ${0.10 * strength})`
        : `hsla(198, 95%, 60%, ${0.12 * strength})`;
      const c2 = dark
        ? `hsla(158, 85%, 65%, ${0.08 * strength})`
        : `hsla(158, 85%, 55%, ${0.10 * strength})`;

      el.style.background = `
        radial-gradient(${radius}px circle at ${x}px ${y}px, ${c1}, ${c2} 45%, transparent 72%)
      `;
    }

    function onMove(e) {
      const p = e.touches?.[0] || e;
      tx = p.clientX;
      ty = p.clientY;
      active = true;
      el.style.opacity = "1";
    }

    function onLeave() {
      active = false;
      el.style.opacity = "0.85";
      // drift back toward the start
      tx = w * 0.62;
      ty = h * 0.42;
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      if (!active) {
        tx = w * 0.62;
        ty = h * 0.42;
      }
    }

    const step = () => {
      // Smoothly follow pointer with easing
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;
      setBG(cx, cy);
      rafRef.current = requestAnimationFrame(step);
    };

    setBG(cx, cy);
    el.style.opacity = "0.9";
    el.style.transition = "opacity 300ms ease";

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", resize);

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [radius, ease, strength]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft animated aurora blobs (very subtle) */}
      <div className="absolute -top-24 -left-24 h-[55vmax] w-[55vmax] rounded-full bg-sky-400/10 dark:bg-sky-300/12 blur-3xl cm-aurora" />
      <div className="absolute -bottom-40 -right-28 h-[55vmax] w-[55vmax] rounded-full bg-emerald-400/10 dark:bg-emerald-300/12 blur-3xl cm-aurora [animation-delay:6s]" />
      <div className="absolute top-1/3 -right-24 h-[38vmax] w-[38vmax] rounded-full bg-sky-300/8 dark:bg-sky-200/10 blur-3xl cm-aurora [animation-delay:12s]" />

      {/* Pointer-follow glow */}
      <div ref={overlayRef} className="absolute inset-0" />
    </div>
  );
}