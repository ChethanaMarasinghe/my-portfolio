import ProjectCard from "./ProjectCard";

export default function ProjectsMasonry({ projects }) {
  return (
    <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 [column-fill:_balance]">
      {projects.map((p) => (
        <div key={p.slug} className="mb-6 break-inside-avoid">
          <ProjectCard project={p} />
        </div>
      ))}
    </div>
  );
}