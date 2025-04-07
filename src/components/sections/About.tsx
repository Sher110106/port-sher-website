"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Updated skills with more detail and visual indicators
const skills = [
  
  {
    category: "Frontend Development",
    icon: "🖥️",
    color: "cyan",
    items: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    color: "fuchsia",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 92 },
      { name: "GraphQL", level: 80 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    category: "Tools & Others",
    icon: "🔧",
    color: "emerald",
    items: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 75 }
    ]
  }
];

// Types for skill bar component
interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

// Skill progress bar component
const SkillBar = ({ name, level, color }: SkillBarProps) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="text-xs text-zinc-400">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${
            color === "purple" ? "from-purple-600 to-purple-400" : 
            color === "cyan" ? "from-cyan-600 to-cyan-400" : 
            color === "fuchsia" ? "from-fuchsia-600 to-fuchsia-400" : 
            "from-emerald-600 to-emerald-400"
          }`}
        />
      </div>
    </div>
  );
};

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const yTransform = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section 
      ref={sectionRef} 
      id="about"
      className="relative py-32 bg-gradient-to-b from-black via-zinc-900/50 to-black overflow-hidden"
    >
      {/* Animated gradient backgrounds */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ opacity, y: yTransform }}
      >
        <motion.div 
          className="absolute top-1/4 -right-64 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full filter blur-[100px]" 
          animate={{ 
            x: [40, -40, 40],
            y: [-40, 40, -40]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 -left-64 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full filter blur-[100px]" 
          animate={{ 
            x: [-30, 30, -30],
            y: [30, -30, 30]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGgxdjFIMHptMSAxaDFWMUgxem0wLTFoMXYxSDFtMSAxaDFWMUgyek0wIDJoMXYxSDB6TTIgMGgxdjFIMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      {/* Content Container */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4 relative inline-block"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500">
              About Me
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-80"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p 
            className="text-zinc-400 max-w-xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My journey in AI and web development
          </motion.p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-xl border border-zinc-800"
            >
              <div className="space-y-6 text-zinc-300">
                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  I&apos;m a passionate <span className="text-purple-400 font-medium">AI Engineer</span> and <span className="text-cyan-400 font-medium">Full Stack Developer</span> with a keen interest in building innovative solutions that bridge the gap between cutting-edge AI technologies and practical applications.
                </motion.p>
                
                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  With a background in Computer Science and extensive experience in both research and development, I specialize in creating scalable applications that leverage the power of artificial intelligence.
                </motion.p>
                
                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Currently focused on developing intelligent systems that can understand and process natural language, while maintaining a strong commitment to writing clean, efficient code.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="pt-4"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">B.Tech in Computer Science</h4>
                        <p className="text-zinc-400 text-sm">Plaksha University</p>
                      </div>
                      <span className="text-purple-400 text-sm mt-1 md:mt-0">2023 - 2027</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Tabs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-xl border border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6">My Skills</h3>
              
              {/* Skill Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                  <motion.button
                    key={skill.category}
                    onClick={() => setActiveSkill(index)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      activeSkill === index
                        ? `bg-gradient-to-r ${
                            skill.color === 'purple' ? 'from-purple-600 to-purple-500' :
                            skill.color === 'cyan' ? 'from-cyan-600 to-cyan-500' :
                            skill.color === 'fuchsia' ? 'from-fuchsia-600 to-fuchsia-500' :
                            'from-emerald-600 to-emerald-500'
                          } text-white shadow-lg`
                        : 'bg-zinc-800/50 text-zinc-400 hover:text-white'
                    }`}
                    whileHover={{ scale: activeSkill === index ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.category}
                  </motion.button>
                ))}
              </div>
              
              {/* Skill Content */}
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {skills[activeSkill].items.map((item) => (
                  <SkillBar 
                    key={item.name} 
                    name={item.name} 
                    level={item.level} 
                    color={skills[activeSkill].color}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "2+", label: "Years of Experience", icon: "⏱️" },
              { value: "10+", label: "Projects Completed", icon: "🚀" },
              { value: "2+", label: "AI Models Developed or Fine-tuned", icon: "🤖" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass p-6 rounded-xl border border-zinc-800 text-center group hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  {stat.value}
                </h4>
                <p className="text-zinc-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
