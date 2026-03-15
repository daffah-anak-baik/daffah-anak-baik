import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import Komponen (Pastikan nama file sesuai di folder components kamu)
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection"; 
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    // Menampilkan loading screen selama 3 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        /* --- Tampilan Loading --- */
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <div className="relative flex items-center justify-center w-32 h-32 mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-orange-500/20" />
            <div className="absolute inset-0 rounded-full border-t-4 border-orange-500 animate-spin" />
            <h1 className="text-4xl font-black italic text-white">D<span className="text-orange-500">.</span></h1>
          </div>
          <p className="text-white font-black italic tracking-[0.5em] uppercase text-[10px] animate-pulse">
            Loading Portfolio
          </p>
        </motion.div>
      ) : (
        /* --- Tampilan Utama Website --- */
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`min-h-screen w-full transition-colors duration-500 ${
            isDark ? "bg-black text-white" : "bg-white text-slate-900"
          }`}
        >
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main>
            <HeroSection isDark={isDark} />
            <AboutSection isDark={isDark} />
            <SkillsSection isDark={isDark} />
            <ProjectSection isDark={isDark} />
            <ContactSection isDark={isDark} />
          </main>
          <Footer isDark={isDark} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
