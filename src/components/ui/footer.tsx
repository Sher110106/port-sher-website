"use client";

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <footer className="relative glass border-t border-zinc-800/20 mt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[80px]" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-[80px]" />
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9Ii4wNCI+PHBhdGggZD0iTTAgMGgxdjFIMHptMSAxaDFWMUgxem0wLTFoMXYxSDFtMSAxaDFWMUgyek0wIDJoMXYxSDB6TTIgMGgxdjFIMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block mb-5">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-500">
                Sher
              </h3>
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              AI Engineer and Full Stack Developer passionate about creating innovative solutions and pushing the boundaries of technology.
            </p>
            
            {/* Newsletter signup */}
            <div className="mt-6 relative">
              <p className="text-sm text-zinc-400 mb-3">Stay updated with my latest projects:</p>
              <div className="flex border-gradient rounded-lg overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-zinc-900/60 text-white px-4 py-2 text-sm w-full focus:outline-none"
                />
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 text-sm font-medium text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-5 relative inline-block">
              Quick Links
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 w-full bg-purple-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </h4>
            <ul className="space-y-3">
              {["About", "Projects", "Experience", "Contact"].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-white transition-colors text-sm group flex items-center"
                  >
                    <motion.span
                      className="inline-block w-2 h-0.5 bg-purple-500 mr-2 opacity-0 group-hover:opacity-100"
                      initial={{ width: 0 }}
                      whileHover={{ width: 10 }}
                    />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-5 relative inline-block">
              Contact
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <a
                  href="mailto:contact@example.com"
                  className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="bg-zinc-800 p-2 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                    <AiOutlineMail className="text-cyan-400" />
                  </span>
                  sherpartap1101@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="text-zinc-400 text-sm flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="bg-zinc-800 p-2 rounded-full">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Punjab, India
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-5 relative inline-block">
              Connect
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 w-full bg-fuchsia-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </h4>
            <div className="flex space-x-5">
              <motion.a
                href="https://github.com/Sher110106"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-3 rounded-full text-zinc-400 hover:text-white hover:bg-purple-500/20 transition-colors relative group"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <AiFillGithub size={20} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-zinc-800 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sher-partap-singh-43070B26B"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-3 rounded-full text-zinc-400 hover:text-white hover:bg-cyan-500/20 transition-colors relative group"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <AiFillLinkedin size={20} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-zinc-800 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </motion.a>
            </div>
            
            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center relative overflow-hidden border-gradient px-5 py-2 rounded-lg bg-zinc-900/60 text-white text-sm font-medium group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Download Resume
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100" 
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-zinc-800/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Sher Partap Singh. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-zinc-400 hover:text-white transition-colors text-sm relative group"
              >
                Privacy Policy
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                href="/terms"
                className="text-zinc-400 hover:text-white transition-colors text-sm relative group"
              >
                Terms of Service
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;