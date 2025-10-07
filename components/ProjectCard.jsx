"use client";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { FiExternalLink, FiMaximize2 } from "react-icons/fi";
import ProjectPreviewModal from "./ProjectPreviewModal";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const hasImage = Boolean(project.image);
  const techs = (project.technologies || []).slice(0, 6);

  return (
    <>
      <div className="group h-full">
        <div className="relative rounded-xl p-[1.5px] bg-[conic-gradient(from_0deg,_#22d3ee_0%,_#8b5cf6_33%,_#10b981_66%,_#22d3ee_100%)] opacity-50 group-hover:opacity-80 transition-opacity">
          <div className="rounded-[11px] h-full bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
            {hasImage && (
              <div
                className="img-shine relative aspect-[16/9] cursor-pointer"
                onClick={() => setOpen(true)}
                title="Click to preview"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute right-2 top-2 rounded bg-black/50 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Preview <FiMaximize2 className="inline -translate-y-[1px]" />
                </div>
              </div>
            )}

            <div className="flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex items-center gap-2">
                  {project.status && (
                    <span className="rounded-full bg-amber-100 dark:bg-amber-900/40 px-2 py-1 text-xs text-amber-700 dark:text-amber-300">
                      {project.status}
                    </span>
                  )}
                  {project.year && (
                    <span className="rounded-full bg-slate-100 dark:bg-slate-900 px-2 py-1 text-xs text-slate-600 dark:text-slate-300">
                      {project.year}
                    </span>
                  )}
                </div>
              </div>

              {project.description && (
                <p className="mt-2 text-slate-700 dark:text-slate-300 line-clamp-3">
                  {project.description}
                </p>
              )}

              {techs.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 min-h-[40px]">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
                {hasImage && (
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <FiMaximize2 /> Preview
                  </button>
                )}
                {project.links?.demo && (
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-sky-700 dark:text-sky-400 hover:underline"
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-slate-700 dark:text-slate-300 hover:underline"
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.links?.linkedin && (
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-[#0A66C2] dark:text-[#4CA0FF] hover:underline"
                    href={project.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                )}
                {project.links?.behance && (
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-[#1769FF] hover:underline"
                    href={project.links.behance}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaBehance /> Behance
                  </a>
                )}
                {project.links?.figma && (
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-fuchsia-600 dark:text-fuchsia-400 hover:underline"
                    href={project.links.figma}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiFigma /> Figma
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-xl -z-10 group-hover:animate-turn-slower" />
        </div>
      </div>

      <ProjectPreviewModal
        open={open}
        onClose={() => setOpen(false)}
        src={project.image}
        alt={project.title}
      />
    </>
  );
}