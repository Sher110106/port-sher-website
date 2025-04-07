"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

// Define interfaces for type safety
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: 'research' | 'development';
  description: string[];
  skills: string[];
  link: string;
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

// More detailed experience data
const experiences: ExperienceItem[] = [
  {
    title: "Research Assistant",
    company: "L.E.O. Lab",
    period: "June 2024 - September 2024",
    location: "Mohali, Punjab, India",
    type: "research",
    description: [
      "Conducted data scraping and preprocessing for research in economics and organizational studies using Python",
      "Developed machine learning models to analyze organizational data patterns",
      "Synthesized literature reviews to support the development of research papers and educational courses",
      "Collaborated with a team of researchers to publish findings in academic journals"
    ],
    skills: ["Python", "Data Analysis", "Research Methods", "Machine Learning"],
    link: "https://leolab.example.org"
  },
  {
    title: "Learning Associate",
    company: "CTLC Plaksha",
    period: "September 2023 - May 2024",
    location: "Mohali, Punjab, India",
    type: "development",
    description: [
      "Performed literature reviews on project-based learning methodologies for engineers",
      "Designed and published engaging social media content to enhance organizational reach",
      "Created educational resources for engineering students",
      "Assisted in organizing workshops and training sessions for faculty"
    ],
    skills: ["Content Creation", "Research", "Social Media", "Education Technology"],
    link: "https://plaksha.edu.in"
  }
];

// Experience card component
const ExperienceCard = ({ experience, index, isActive, onClick }: ExperienceCardProps) => {
  return (
    <motion.div 
      className={`relative ${isActive ? 'z-10' : 'z-0'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <motion.div 
        className={`bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 cursor-pointer
          ${isActive 
            ? 'border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]' 
            : 'border-zinc-800 hover:border-purple-500/30'}`}
        onClick={onClick}
        whileHover={{ scale: isActive ? 1 : 1.02 }}
        layout
      >
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="min-w-[240px]">
            <span className="text-xs font-medium text-purple-400">{experience.period}</span>
            <h3 className="text-xl font-bold text-white mt-1">{experience.title}</h3>
            <div className="flex items-center mt-2">
              <span className="text-cyan-400 font-medium">{experience.company}</span>
              {experience.link && (
                <a 
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-zinc-500 hover:text-cyan-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-zinc-500 text-sm mt-1">{experience.location}</p>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <span className={`px-3 py-1 text-xs font-medium rounded-full
                ${experience.type === 'research' 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/20' 
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/20'}`}
              >
                {experience.type === 'research' ? 'Research' : 'Development'}
              </span>
            </div>
          </div>
          
          <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[1000px]' : 'max-h-0 md:max-h-[1000px]'}`}>
            <motion.ul 
              className="list-disc text-zinc-400 text-sm space-y-2 ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              {experience.description.map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </motion.ul>
            
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        
        {!isActive && (
          <motion.div 
            className="mt-4 md:hidden flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs text-purple-400 flex items-center gap-1">
              View Details
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export function Experience() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const filteredExperiences = activeFilter
    ? experiences.filter((exp) => exp.type === activeFilter)
    : experiences;

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-zinc-900 to-black overflow-hidden"
    >
      {/* Animated backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent opacity-60" />
      
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 0)',
        backgroundSize: '20px 20px',
        backgroundPosition: '-10px -10px',
      }} />
      
      {/* Background gradients */}
      <motion.div 
        className="absolute top-20 -left-64 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[80px]" 
        style={{ opacity, y }}
      />
      <motion.div 
        className="absolute bottom-10 -right-64 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[80px]" 
        style={{ opacity, y: useTransform(scrollYProgress, [0, 1], ["20%", "0%"]) }}
      />

      <div className="relative container mx-auto px-4 z-10">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center relative mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500">
              Experience
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-80"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-center max-w-2xl mx-auto text-lg"
          >
            My journey through research and development roles
          </motion.p>

          <div className="flex justify-center gap-4 mt-10 mb-16 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(null)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeFilter === null
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-white"
              }`}
            >
              All Experiences
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("research")}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeFilter === "research"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-white"
              }`}
            >
              Research
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("development")}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeFilter === "development"
                  ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-white"
              }`}
            >
              Development
            </motion.button>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[220px] bottom-20 w-px bg-gradient-to-b from-purple-500/50 via-fuchsia-500/50 to-cyan-500/50" />
          
          {/* Experience cards */}
          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.title} 
                experience={experience} 
                index={index}
                isActive={activeIndex === index}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          
          {filteredExperiences.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-zinc-400">No experiences found with this filter.</p>
            </motion.div>
          )}
        </div>
        
        {/* CTA for resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 group-hover:from-purple-600/30 group-hover:to-cyan-600/30 rounded-full border border-zinc-700 group-hover:border-purple-500/50" />
            <span className="relative text-zinc-300 group-hover:text-white transition-colors font-medium">
              View Full Resume
            </span>
            <svg className="relative w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}