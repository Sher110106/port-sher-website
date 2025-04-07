"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from './ui/navbar';
import Footer from './ui/footer';

// Loader component with SHER text
const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div
        className="relative h-16 w-16"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-t-transparent border-l-transparent border-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute text-gradient font-bold text-xl tracking-widest mt-24"
        >
          SHER
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Increased loading time to show SHER for longer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>
      
      <div className={`min-h-screen flex flex-col ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
} 