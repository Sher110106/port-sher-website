import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Background gradient for the entire page */}
      <div className="fixed inset-0 bg-black -z-10" />
      
      {/* Subtle animated lights */}
      <div className="fixed inset-0 -z-5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>
      
      {/* Content sections */}
      <div className="w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
