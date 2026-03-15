import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer({ isDark }: { isDark: boolean }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/daffah-anak-baik", label: 'GitHub' },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-daffah-4906a1379", label: 'LinkedIn' },
    { icon: Instagram, href: "https://www.instagram.com/_.daffah", label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* CSS Injection: Memaksa warna tanpa peduli settingan lain */}
      <style dangerouslySetInnerHTML={{ __html: `
        .force-footer-dark { 
          background-color: #000000 !important; 
          color: #ffffff !important; 
        }
        .force-footer-light { 
          background-color: #ffffff !important; 
          color: #0f172a !important; 
        }
      `}} />

      <footer 
        className={`relative z-50 w-full py-12 border-t transition-all duration-500 ${
          isDark ? 'force-footer-dark border-white/10' : 'force-footer-light border-slate-100'
        }`}
      >
        <div className="max-w-[95%] mx-auto px-6">
          
          {/* Decorative Orange Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent mb-12" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* LEFT SIDE: BRANDING */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-black italic tracking-tighter"
              >
                DAFFAH<span className="text-orange-500">.</span>
              </motion.a>
              <p className={`text-[9px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                Personal Portfolio v2.0
              </p>
            </div>

            {/* MIDDLE: FULL NAME */}
            <div className="flex flex-col items-center gap-1 order-3 md:order-2">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-center">
                © {currentYear} <span className="text-orange-500">MUHAMMAD DAFFAH AQIILAH</span>
              </p>
              <p className={`text-[9px] font-medium italic ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}>
                All Rights Reserved
              </p>
            </div>

            {/* RIGHT SIDE: SOCIALS & BACK TO TOP */}
            <div className="flex items-center gap-6 order-2 md:order-3">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${isDark ? 'text-zinc-400 hover:text-orange-500' : 'text-slate-500 hover:text-orange-600'}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <div className={`h-8 w-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

              <button
                onClick={scrollToTop}
                className={`p-3 rounded-xl border transition-all duration-300 group ${
                  isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-12 text-center">
              <p className="text-[9px] font-black italic uppercase tracking-[0.4em] opacity-20">
                In Science and Technology we Trust
              </p>
          </div>
        </div>
      </footer>
    </>
  );
}
