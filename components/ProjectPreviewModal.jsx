"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ProjectPreviewModal({ open, onClose, src, alt }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-[101] rounded bg-black/60 px-2 py-1 text-sm text-white hover:bg-black/80"
        >
          Close
        </button>
        <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}