import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
import Services from "../components/Services";

import { PROFILE } from "../data/site";
import { PROJECTS } from "../data/projects";
import { SKILLS } from "../data/skills";
import { EDUCATION } from "../data/education";

export default function Page() {
  const techs = SKILLS.flatMap((g) => g.items);

  return (
    <>
      <Hero profile={PROFILE} techs={techs} />

      <Section id="about" title="About Me">
        <About profile={PROFILE} />
      </Section>

      <Section id="services" title="What I Do">
        <Services />
      </Section>

      <Section id="projects" title="Featured Projects">
        <ProjectsGrid projects={PROJECTS} />
      </Section>

      <Section id="skills" title="Skills">
        <Skills data={SKILLS} />
      </Section>

      <Section id="education" title="Education">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-5 shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">{EDUCATION.degree}</h3>
            <span className="text-sm text-slate-600 dark:text-slate-400">{EDUCATION.period}</span>
          </div>
          <p className="mt-1 text-slate-700 dark:text-slate-300">{EDUCATION.institution}</p>
          {EDUCATION.gpa && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Current GPA: {EDUCATION.gpa}</p>
          )}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Contact email={PROFILE.email} phone={PROFILE.phone} location={PROFILE.location} />
      </Section>
    </>
  );
}