import type { ComponentType } from "react"
import {
    SiAstro,
    SiReact,
    SiTailwindcss,
    SiPhp,
    SiNodedotjs,
    SiKotlin,
    SiJetpackcompose,
    SiMarkdown,
    SiMapbox,
    SiJupyter,
    SiFirebase,
    SiPostgresql,
    SiDocker,
    SiApache,
    SiNginx,
    SiGit,
} from "react-icons/si"
import {
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaPython
} from "react-icons/fa";
import {
    BiLogoJavascript,
    BiLogoTypescript
} from "react-icons/bi";
import { TbBrandCSharp, TbBrandMysql } from "react-icons/tb";
import { RiSupabaseLine } from "react-icons/ri";

type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>

interface TechMeta {
    label: string
    icon: IconComponent
    /** Brand color, ≥3:1 on the dark background */
    color: string
}

export const techMap: Record<string, TechMeta> = {
    html: { label: "HTML", icon: FaHtml5, color: "#E34F26" },
    css: { label: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    javascript: { label: "JavaScript", icon: BiLogoJavascript, color: "#F7DF1E" },
    typescript: { label: "TypeScript", icon: BiLogoTypescript, color: "#3178C6" },
    react: { label: "React", icon: SiReact, color: "#61DAFB" },
    astro: { label: "Astro", icon: SiAstro, color: "#BC52EE" },
    tailwind: { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    node: { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    php: { label: "PHP", icon: SiPhp, color: "#777BB4" },
    // Brand purple is 2.3:1 on dark: lightened
    csharp: { label: "C#", icon: TbBrandCSharp, color: "color-mix(in oklab, #512BD4, white 35%)" },
    java: { label: "Java", icon: FaJava, color: "#ED8B00" },
    kotlin: { label: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    compose: { label: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
    python: { label: "Python", icon: FaPython, color: "#3776AB" },
    // Dolphin only: the Simple Icons glyph includes an unreadable wordmark
    mysql: { label: "MySQL", icon: TbBrandMysql, color: "#4479A1" },
    postgresql: { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    firebase: { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    supabase: { label: "Supabase", icon: RiSupabaseLine, color: "#3FCF8E" },
    docker: { label: "Docker", icon: SiDocker, color: "#2496ED" },
    apache: { label: "Apache", icon: SiApache, color: "#D22128" },
    nginx: { label: "Nginx", icon: SiNginx, color: "#009639" },
    git: { label: "Git", icon: SiGit, color: "#F05032" },
    markdown: { label: "Markdown", icon: SiMarkdown, color: "#FFFFFF" },
    mapbox: { label: "Mapbox", icon: SiMapbox, color: "#4264FB" },
    jupyter: { label: "Jupyter", icon: SiJupyter, color: "#F37626" },
}
