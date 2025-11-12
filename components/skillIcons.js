import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPhp,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJsonwebtokens,
  SiOpenai,
  SiBootstrap,
  SiThreedotjs,
  SiWebgl,
  SiFlutter,
  SiSpring,
  SiFirebase,
  SiDocker,
  SiPython,
  SiSelenium,
  SiTensorflow,
  SiPytorch,
  SiCanva,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiBox, FiCheckSquare, FiCpu, FiDatabase } from "react-icons/fi";

export function getSkillIcon(label) {
  const l = label.toLowerCase();

  // Frontend
  if (l.includes("react")) return SiReact;
  if (l.includes("next")) return SiNextdotjs;
  if (l.includes("typescript") || l.includes("type")) return SiTypescript;
  if (l.includes("tailwind")) return SiTailwindcss;
  if (l.includes("html")) return SiHtml5;
  if (l.includes("css")) return SiCss3;
  if (l.includes("javascript") || l === "js") return SiJavascript;

  // Backend
  if (l.includes("node")) return SiNodedotjs;
  if (l.includes("express")) return SiExpress;
  if (l.includes("python")) return SiPython;
  if (l.includes("django")) return SiDjango;
  if (l === "php") return SiPhp;
  if (l === "java") return FaJava;
  if (l.includes("c++")) return SiCplusplus;

  // Databases
  if (l.includes("mongo")) return SiMongodb;
  if (l.includes("mysql")) return SiMysql;
  if (l.includes("postgres")) return SiPostgresql;

  // Tools & Platforms
  if (l.includes("github")) return SiGithub;
  if (l.includes("postman")) return SiPostman;
  if (l.includes("figma")) return SiFigma;
  if (l.includes("jwt")) return SiJsonwebtokens;
  if (l.includes("canva")) return SiCanva;
  if (l.includes("docker")) return SiDocker;
  if (l.includes("firebase")) return SiFirebase;

  // Testing & QA
  if (l.includes("selenium")) return SiSelenium;
  if (l.includes("testing")) return FiCheckSquare;

  // AI & ML
  if (l.includes("openai")) return SiOpenai;
  if (l.includes("tensorflow")) return SiTensorflow;
  if (l.includes("pytorch")) return SiPytorch;

  // General fallbacks
  if (l.includes("api")) return FiCpu;
  if (l.includes("database") || l.includes("db")) return FiDatabase;

  return FiBox;
}