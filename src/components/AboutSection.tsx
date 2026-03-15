import { motion } from 'framer-motion';
import { BookIcon, Medal, PencilIcon, Code2 } from 'lucide-react';

export default function AboutSection({ isDark }: { isDark: boolean }) {
  const stats = [
    { icon: BookIcon, value: '100+', label: 'Tasks Done' },
    { icon: Medal, value: '15+', label: 'Achievements' },
    { icon: PencilIcon, value: '5+', label: 'Papers Published' },
    { icon: Code2, value: '2+', label: 'Years Coding' },
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay 65% yang konsisten dengan Project & Contact */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        
        {/* Main Glass Card */}
        <div className={`max-w-6xl mx-auto backdrop-blur-xl border rounded-[2.5rem] p-8 md:p-14 transition-all duration-500 
          ${isDark 
            ? 'bg-black/45 border-white/10 shadow-2xl' 
            : 'bg-white/85 border-white shadow-xl'}`}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`font-black mb-2 block uppercase tracking-[0.3em] text-[10px] ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>
              Who Am I?
            </span>
            <h2 className={`font-display text-4xl md:text-6xl font-extrabold mb-6 italic tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Getting to <span className="text-orange-500">Know Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE: Visual Journey */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`aspect-square rounded-[2rem] overflow-hidden border-2 transition-all duration-500 
                ${isDark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-slate-50 border-white shadow-lg'}`}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[10rem] md:text-[13rem] select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-pulse">👨🏻‍🎓</span>
                </div>
              </div>
              
              {/* Badge 9+ Years */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`absolute -bottom-6 -right-4 p-6 rounded-2xl border backdrop-blur-2xl shadow-2xl
                  ${isDark ? 'bg-orange-500/20 border-orange-500/40' : 'bg-white/90 border-orange-200'}`}
              >
                <p className={`font-black text-3xl italic ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>9+ Years</p>
                <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-slate-500'}`}>Learning Journey</p>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Narrative & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className={`font-black text-2xl md:text-3xl italic uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  Student at <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8">MAN 1 Banda Aceh</span>
                </h3>
                <p className={`leading-relaxed text-sm md:text-base font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Yo! I'm <span className="font-black text-orange-500">Muhammad Daffah Aqiilah</span>. 
                  Currently crushing it as a student at <span className="italic font-bold">MAN 1 Banda Aceh (Pre-International Class)</span>. 
                </p>
                <p className={`leading-relaxed text-sm md:text-base font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  I started my journey back at MTsN 1 Banda Aceh, diving deep into robotics and C++. Now, I'm all about leveling up my skills in web development and scientific writing. 🚀
                </p>
              </div>

              {/* STATS GRID - Gaya Card yang sinkron dengan Skills */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5, borderColor: 'rgba(249, 115, 22, 0.5)' }}
                    className={`p-5 rounded-2xl border transition-all duration-300 group
                      ${isDark 
                        ? 'bg-white/5 border-white/5' 
                        : 'bg-white border-slate-100 shadow-sm'}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors
                      ${isDark ? 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white' : 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <p className={`font-black text-2xl italic ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
                    <p className={`text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
