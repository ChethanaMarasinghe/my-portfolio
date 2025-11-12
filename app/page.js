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
  <div className="space-y-6">
    {EDUCATION.map((edu, index) => (
      <div 
        key={index}
        className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-6 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Logo Section */}
          <div className="flex items-start gap-4 md:gap-6">
            {edu.logo ? (
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 flex items-center justify-center shadow-sm">
                <img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-sky-500/10 to-emerald-500/10 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                  {edu.institution.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
              </div>
            )}
            
            {/* Mobile Period Badge */}
            <div className="md:hidden">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
                {edu.period}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {edu.institution}
                </p>
              </div>
              
              {/* Desktop Period Badge */}
              <div className="hidden md:block">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
                  {edu.period}
                </span>
              </div>
            </div>

            {/* GPA and Additional Info */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {edu.gpa && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Current GPA: {edu.gpa}
                  </span>
                </div>
              )}
              
              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${edu.period.includes('Present') ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {edu.period.includes('Present') ? 'Currently Studying' : 'Completed'}
                </span>
              </div>
            </div>

            {/* Progress bar for current studies */}
            {edu.period.includes('Present')
              // <div className="mt-4">
              //   <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
              //     <span>Progress</span>
              //     <span>~60%</span> {/* Adjust based on your actual progress */}
              //   </div>
              //   <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              //     <div 
              //       className="bg-gradient-to-r from-sky-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
              //       style={{ width: '60%' }} 
              //     ></div>
              //   </div>
              // </div>
            }
          </div>
        </div>
      </div>
    ))}
  </div>
</Section>

      <Section id="contact" title="Contact">
        <Contact email={PROFILE.email} phone={PROFILE.phone} location={PROFILE.location} />
      </Section>
    </>
  );
}