"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Highly optimized particles component
const Particles = ({ count = 30 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      const rotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const scale = Math.random() * 0.3 + 0.1;
      temp.push({ position, rotation, scale });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Update only every 5 frames for better performance
    if (Math.floor(state.clock.getElapsedTime() * 10) % 5 !== 0) return;
    
    for (let i = 0; i < count; i++) {
      const time = state.clock.getElapsedTime();
      const matrix = new THREE.Matrix4();
      
      // Even simpler position updates with lower frequency
      const position = particles[i].position.clone();
      position.y += Math.sin(time * 0.05 + i) * 0.01;
      position.x += Math.cos(time * 0.05 + i) * 0.01;
      
      // Apply transforms
      matrix.setPosition(position);
      matrix.makeRotationFromEuler(particles[i].rotation);
      matrix.scale(new THREE.Vector3(particles[i].scale, particles[i].scale, particles[i].scale));
      
      mesh.current.setMatrixAt(i, matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.3} transparent opacity={0.6} />
    </instancedMesh>
  );
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-900 to-black z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9Ii4wOCI+PHBhdGggZD0iTTAgMGgxdjFIMHptMSAxaDFWMUgxem0wLTFoMXYxSDFtMSAxaDFWMUgyek0wIDJoMXYxSDB6TTIgMGgxdjFIMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>
      
      {/* 3D Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity }}
      >
        <Canvas dpr={[1, 1.2]} camera={{ position: [0, 0, 10], fov: 40 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={true}
            autoRotate 
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          <Stars 
            radius={50} 
            depth={50} 
            count={1000} 
            factor={4} 
            saturation={0.5} 
            fade={true} 
            speed={0.5}
          />
          
          <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.5}>
            <Sphere args={[2, 24, 24]} position={[0, 0, 0]}>
              <MeshDistortMaterial
                color="ffffff"
                attach="material"
                distort={0.3}
                speed={0.8}
                wireframe
                opacity={0.15}
                transparent
              />
            </Sphere>
          </Float>
          
          <Particles count={30} />
        </Canvas>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="z-10 text-center px-4 relative"
        style={{ scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <motion.div
            className="relative mb-8"
          >
            <motion.div 
              className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-fuchsia-600/50 to-cyan-600 rounded-xl blur-2xl opacity-70"
              animate={{ 
                opacity: [0.5, 0.7, 0.5],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.h1 
              className="relative text-5xl md:text-7xl font-bold mb-2 p-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-500"
              style={{
                textShadow: "0 0 120px rgba(168,85,247,0.8), 0 0 60px rgba(192,132,252,0.6)"
              }}
            >
              Sher Partap Singh
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-zinc-300 font-light tracking-wide"
          >
            <span className="text-purple-400">AI Engineer</span> & <span className="text-cyan-400">Full Stack Developer</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-8 justify-center mb-12"
          >
            <motion.a
              href="https://github.com/Sher110106"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-zinc-400 hover:text-purple-400 transition-colors relative group"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillGithub />
              <motion.span
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800/80 backdrop-blur-sm px-3 py-1 rounded-full"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
              >
                GitHub
              </motion.span>
              <motion.div 
                className="absolute -inset-3 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 z-0 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/sher-partap-singh-43070B26B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-zinc-400 hover:text-cyan-400 transition-colors relative group"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillLinkedin />
              <motion.span
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800/80 backdrop-blur-sm px-3 py-1 rounded-full"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
              >
                LinkedIn
              </motion.span>
              <motion.div 
                className="absolute -inset-3 rounded-full bg-cyan-500/20 opacity-0 group-hover:opacity-100 z-0 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
            </motion.a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg shadow-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <span className="relative group-hover:animate-[pulse_1s_ease-in-out_infinite] font-semibold">
                View My Work
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}