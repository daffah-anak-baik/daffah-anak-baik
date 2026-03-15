import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThreeScene from './ThreeScene'

export default function HeroSection({ isDark }: { isDark: boolean }) {

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 -z-10">
        <ThreeScene />
      </div>

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 container mx-auto px-4">

        <div className={`max-w-7xl mx-auto backdrop-blur-2xl border rounded-[3rem] p-8 md:p-16 transition-all duration-500 
          ${isDark 
            ? 'bg-black/45 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]' 
            : 'bg-white/85 border-white shadow-2xl'}`}>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border transition-all duration-500
                  ${isDark ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 'bg-orange-50 text-orange-700 border-orange-200'}`}
              >
                <Sparkles className="w-3 h-3" />
                Welcome to my digital space
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-5xl md:text-7xl font-black mb-6 italic tracking-tighter leading-[0.9] transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                HELLO, I'M <br />
                <span className="text-orange-500">DAFFAH</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`mb-10 leading-relaxed transition-colors duration-500 text-base md:text-lg max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600 font-medium'}`}
              >
                A student at <span className="text-orange-500 font-bold">MAN 1 Banda Aceh</span>. 
                Passionate about programming and scientific research. 🚀
              </motion.p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-10">
                <Button
                  size="lg"
                  className="rounded-xl px-10 font-black italic uppercase tracking-wider bg-orange-600 hover:bg-orange-500 text-white h-14 shadow-lg transition-all active:scale-95"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className={`rounded-xl px-10 font-black italic uppercase tracking-wider h-14 border-2 transition-all active:scale-95
                    ${isDark 
                      ? 'border-white/20 bg-white/5 text-white hover:bg-white/10' 
                      : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'}`}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                {[
                  { icon: Github, href: "https://github.com/daffah-anak-baik" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-daffah-4906a1379" },
                  { icon: Instagram, href: "https://www.instagram.com/_.daffah" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border
                      ${isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-orange-500' : 'bg-white border-slate-200 text-slate-600 hover:text-orange-600 shadow-sm'}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-orange-500/30 rounded-[2.5rem] -z-10" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-white/10 rounded-[2.5rem] -z-10" />
                
                <div className={`relative p-2 rounded-[2.5rem] border backdrop-blur-sm shadow-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-white'}`}>
                  <img
                    src="/foto.jpg"
                    alt="Daffah's Photo"
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[2rem] object-cover"
                  />
                  <div className={`absolute -bottom-6 -right-6 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl animate-bounce
                    ${isDark ? 'bg-orange-500 text-white' : 'bg-orange-600 text-white'}`}>
                    <span className="text-[10px] font-black italic tracking-widest uppercase">Open for Collaboration</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-4 rounded-full border transition-all duration-500
          ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-lg'}`}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>

    </section>
  )
}
