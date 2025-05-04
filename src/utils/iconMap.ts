import { SiAstro, SiReact, SiTailwindcss, SiPhp, SiTypescript, SiJavascript, SiMysql, SiNodedotjs } from "react-icons/si"
import { FaHtml5, FaCss3Alt, FaJava, FaPython } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";

export const iconMap: Record<string, any> = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: BiLogoJavascript,
    typescript: BiLogoTypescript,
    react: SiReact,
    astro: SiAstro,
    tailwind: SiTailwindcss,
    nodejs: SiNodedotjs,
    php: SiPhp,
    csharp: TbBrandCSharp,
    java: FaJava,
    python: FaPython,
    mysql: SiMysql,
    postgresql: SiNodedotjs,
    docker: SiNodedotjs,
    apache: SiNodedotjs,
    nginx: SiNodedotjs,
}