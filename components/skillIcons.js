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
  SiC,
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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiBox } from "react-icons/fi";

export function getSkillIcon(label) {
  const l = label.toLowerCase();

  if (l.includes("react")) return SiReact;
  if (l.includes("next")) return SiNextdotjs;
  if (l.includes("type")) return SiTypescript;
  if (l.includes("tailwind")) return SiTailwindcss;
  if (l.includes("html")) return SiHtml5;
  if (l.includes("css")) return SiCss3;
  if (l.includes("javascript") || l === "js") return SiJavascript;

  if (l.includes("node")) return SiNodedotjs;
  if (l.includes("express")) return SiExpress;
  if (l.includes("django") || l.includes("drf")) return SiDjango;
  if (l === "php") return SiPhp;
  if (l === "java") return FaJava;

  if (l.includes("c++")) return SiCplusplus;
  if (l.includes("c/c++") || l === "c") return SiC;

  if (l.includes("mongo")) return SiMongodb;
  if (l.includes("mysql")) return SiMysql;
  if (l.includes("postgre")) return SiPostgresql;

  if (l.includes("github")) return SiGithub;
  if (l.includes("postman")) return SiPostman;
  if (l.includes("figma")) return SiFigma;
  if (l.includes("jwt")) return SiJsonwebtokens;

  if (l.includes("openai")) return SiOpenai;
  if (l.includes("bootstrap")) return SiBootstrap;

  // AR / extras
  if (l.includes("three")) return SiThreedotjs;
  if (l.includes("webgl")) return SiWebgl;
  if (l.includes("flutter")) return SiFlutter;
  if (l.includes("spring")) return SiSpring;
  if (l.includes("firebase")) return SiFirebase;
  if (l.includes("docker")) return SiDocker;

  return FiBox;
}