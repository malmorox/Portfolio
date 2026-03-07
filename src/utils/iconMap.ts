import { 
    SiAstro, 
    SiReact, 
    SiTailwindcss, 
    SiPhp, 
    SiMysql, 
    SiNodedotjs, 
    SiKotlin, 
    SiJetpackcompose,
    SiMarkdown,
    SiMapbox,
    SiJupyter,
    SiFirebase,
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
import { TbBrandCSharp } from "react-icons/tb";
import { RiSupabaseLine } from "react-icons/ri";

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
    kotlin: SiKotlin,
    compose: SiJetpackcompose,
    python: FaPython,
    mysql: SiMysql,
    postgresql: SiNodedotjs,
    firebase: SiFirebase,
    supabase: RiSupabaseLine,
    docker: SiNodedotjs,
    apache: SiNodedotjs,
    nginx: SiNodedotjs,
    markdown: SiMarkdown,
    mapbox: SiMapbox,
    jupyter: SiJupyter 
}