"use client";
import Image from "next/image";

export default function FancyAvatar({
  src,
  alt,
  className = "h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80",
  rounded = "rounded-[24px]",
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-sky-400/30 to-emerald-400/30 blur-3xl animate-pulse-soft" />
      <div
        className={`absolute inset-0 ${rounded} opacity-90 animate-turn-slow`}
        style={{
          background:
            "conic-gradient(from 0deg, rgba(14,165,233,0.55), rgba(16,185,129,0.55), rgba(14,165,233,0.55))",
        }}
      />
      <div className={`absolute inset-[3px] ${rounded} overflow-hidden border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/70 shadow-soft`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
            className={`${rounded} object-cover`}
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-slate-700 dark:text-slate-200">?</div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.25),transparent_40%)] mix-blend-overlay" />
      </div>
    </div>
  );
}