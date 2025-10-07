"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let width = 0;
    let height = 0;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const pointer = { x: 0, y: 0, vx: 0, vy: 0, active: false };
    let hueBase = 190; // starting hue (sky-ish)

    const blobs = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      r: 0.18 + Math.random() * 0.22, // relative radius
      hueOffset: i * 45,
    }));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function movePointer(x, y) {
      pointer.vx += (x - pointer.x) * 0.12;
      pointer.vy += (y - pointer.y) * 0.12;
      pointer.active = true;
    }

    const onPointerMove = (e) => {
      if (e.touches?.[0]) {
        const t = e.touches[0];
        movePointer(t.clientX, t.clientY);
      } else {
        movePointer(e.clientX, e.clientY);
      }
    };

    const clear = () => {
      // Soft fade for trails
      ctx.fillStyle = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "rgba(15,23,42,0.08)" // slate-900 with opacity
        : "rgba(255,255,255,0.08)";
      ctx.fillRect(0, 0, width, height);
    };

    function draw() {
      clear();

      // Update pointer
      pointer.x += pointer.vx;
      pointer.y += pointer.vy;
      pointer.vx *= 0.88;
      pointer.vy *= 0.88;

      // Animate hue slowly
      hueBase = (hueBase + 0.04) % 360;

      // Lighter blending for glow
      ctx.globalCompositeOperation = "lighter";

      blobs.forEach((b, i) => {
        // Move blob
        b.x += b.vx;
        b.y += b.vy;

        // Wrap around
        if (b.x < -0.1) b.x = 1.1;
        if (b.x > 1.1) b.x = -0.1;
        if (b.y < -0.1) b.y = 1.1;
        if (b.y > 1.1) b.y = -0.1;

        // Slight attraction to pointer
        if (pointer.active) {
          const px = pointer.x / width;
          const py = pointer.y / height;
          const dx = px - b.x;
          const dy = py - b.y;
          const dist = Math.hypot(dx, dy) + 0.0001;
          b.vx += (dx / dist) * 0.00002;
          b.vy += (dy / dist) * 0.00002;
        }

        const cx = b.x * width;
        const cy = b.y * height;
        const r = Math.min(width, height) * b.r;

        const hue = (hueBase + b.hueOffset) % 360;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `hsla(${hue}, 85%, 60%, 0.28)`);
        grad.addColorStop(0.6, `hsla(${hue}, 85%, 60%, 0.12)`);
        grad.addColorStop(1, "hsla(0, 0%, 0%, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Pointer glow
      if (pointer.active) {
        const r = Math.min(width, height) * 0.18;
        const grad = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, r);
        grad.addColorStop(0, "hsla(190, 95%, 65%, 0.25)");
        grad.addColorStop(0.5, "hsla(150, 85%, 60%, 0.18)");
        grad.addColorStop(1, "hsla(0,0%,0%,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });

    if (!prefersReduced) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      // Static paint if reduced motion
      clear();
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}