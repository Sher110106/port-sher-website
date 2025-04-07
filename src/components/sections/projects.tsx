"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useMemo } from "react";
import { useInView } from "framer-motion";

// Interface for project items
interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  status?: string;
  image: string;
  gradient: string;
  link?: string;
  github?: string;
}

// Interface for ProjectCard props
interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const projects: ProjectItem[] = [
  {
    title: "Multiagent Debugging Web App",
    description: "A web app using artificial agents to simulate real user interactions for automated debugging, capturing console logs and network requests.",
    tech: ["Next.js", "TypeScript", "AI Agents", "Framer Motion"],
    link: "https://bugzer.bugzer.workers.dev",
    status: "Ongoing",
    image: "bugzer.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Quad - Educational Platform",
    description: "Modern web platform connecting teachers and schools with real-time scheduling and recording capabilities.",
    tech: ["Next.js 14", "TypeScript", "Real-time", "TailwindCSS"],
    link: "https://sher-sable.vercel.app/",
    image: "quad.png",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "iPhone Website Clone",
    description: "Pixel-perfect clone of the iPhone website showcasing attention to detail and modern web development skills.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    link: "https://phone-flax.vercel.app/",
    image: "iphond.png",
    gradient: "from-orange-500 to-pink-500",
    github: "https://github.com/Sher110106/phone/tree/main"
  },
  {
    title: "AI-Powered Health Tracker",
    description: "Mobile-first application that leverages AI to provide personalized health insights and progress tracking.",
    tech: ["React Native", "TensorFlow.js", "Firebase", "Node.js"],
    image: "medicose.png",
    gradient: "from-fuchsia-500 to-cyan-500",
    github: "https://github.com/Sher110106/medicose",
    link: "https://mindful-me-eight.vercel.app/"

  }
];

// Card with simplified effect
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: false, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="group backdrop-blur-md bg-zinc-900/30 rounded-xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
    >
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity`} />
        <Image
          src={`/${project.image}`}
          alt={project.title}
          fill
          className="object-cover filter dark:invert group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Shiny overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" />
      </div>

      <div className="p-6 space-y-5 relative z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          {project.status && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20 shadow-glow-sm">
              {project.status}
            </span>
          )}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 transition-colors duration-300 hover:border-purple-500/30 hover:text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-5 pt-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/link"
            >
              <span>View Project</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-purple-400 transition-colors group/github"
            >
              <svg
                className="w-5 h-5 transform group-hover/github:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  
  // Static configuration for particles to prevent hydration errors
  const particles = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      width: 2 + (i % 5) * 1,
      height: 2 + ((i + 2) % 5) * 1,
      xPos: 10 + (i * 8),
      yPos: 10 + (i * 9),
      opacity: 0.1 + (i % 9) * 0.05,
      scale: 0.1 + (i % 5) * 0.1,
      duration: 15 + i * 2
    }));
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-32 px-4 md:px-8 bg-gradient-to-b from-black via-zinc-900/50 to-black min-h-screen overflow-hidden"
    >
      {/* Floating particles - with deterministic values to prevent hydration errors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500"
            initial={{
              opacity: particle.opacity,
              x: `${particle.xPos}%`,
              y: `${particle.yPos}%`,
              scale: particle.scale
            }}
            animate={{
              y: ["0%", "100%"],
              x: `calc(${particle.xPos}%)`,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>

      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity, y }}
        initial={{ background: "radial-gradient(circle at 0% 0%, purple 0%, transparent 30%)" }}
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.4) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 80%, rgba(6,182,212,0.4) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 80%, rgba(168,85,247,0.4) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.4) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.4) 0%, transparent 40%)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500">
                Featured Projects
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-80"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          <motion.p 
            className="text-zinc-400 max-w-2xl text-center text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing innovative solutions and technical expertise through real-world applications
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com/Sher110106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 relative overflow-hidden rounded-full px-6 py-3 group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 group-hover:bg-gradient-to-r group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-300 rounded-full border border-zinc-700 group-hover:border-purple-500/50"></span>
            <span className="relative text-zinc-300 group-hover:text-white transition-colors font-medium">View More Projects on GitHub</span>
            <svg className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}