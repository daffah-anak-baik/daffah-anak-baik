import { motion } from 'framer-motion';
import { 
  Code2, Palette, Search, Users, 
  Zap, Monitor, Database, Cpu 
} from 'lucide-react';

export default function SkillsSection({ isDark }: { isDark: boolean }) {
  const skills = [
    { name: 'Science (Technology)', icon: Cpu, level: '85%', desc: 'Menerapkan konsep sains dalam pengembangan teknologi digital.' },
    { name: 'Web Development', icon: Code2, level: '90%', desc: 'Keahlian dalam membangun website modern yang responsif.' },
    { name: 'Portfolio Design', icon: Palette, level: '88%', desc: 'Menyusun elemen visual UI/UX untuk pengalaman pengguna.' },
    { name: 'Scientific Research', icon: Search, level: '95%', desc: 'Analisis mendalam dan pengumpulan data secara sistematis.' },
    { name: 'Data Analysis', icon: Database, level: '82%', desc: 'Mengolah informasi dan statistik untuk kesimpulan akurat.' },
    { name: 'People & Social', icon: Users, level: '88%', desc: 'Bekerja sama secara efektif dalam lingkungan tim.' },
    { name: 'Active & Proactive', icon: Zap, level: '89%', desc: 'Inisiatif tinggi dan energi positif dalam setiap project.' },
    { name: 'IT & Digital', icon: Monitor, level: '86%', desc: 'Kemampuan mengoperasikan berbagai perangkat digital.' },
  ];

  return (
    <section 
      id="skills" 
      className="relative py-20 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay 65% Konsisten dengan Section Lain */}
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
              Skills & Expertise
            </span>
            <h2 className={`font-display text-4xl md:text-6xl font-extrabold mb-6 italic tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              My Technical <span className="text-orange-500">Ability</span>
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
          </motion.div>

          {/* Grid Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border transition-all duration-300 group
                  ${isDark 
                    ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-orange-500/40' 
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-md'}`}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                    ${isDark 
                        ? 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white shadow-[0_0_15px_rgba(249,115,22,0.1)]' 
                        : 'bg-orange-50 text-orange-700 group-hover:bg-orange-600 group-hover:text-white'}`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black italic block ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
                
                <h3 className={`text-sm font-black mb-3 uppercase italic tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {skill.name}
                </h3>
                
                {/* Progress Bar Visual yang Lebih Menarik */}
                <div className="w-full h-1 bg-slate-200/20 dark:bg-white/5 rounded-full mb-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full relative ${isDark ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-orange-600'}`}
                  >
                    {/* Efek Kilatan pada Progress Bar */}
                    <div className="absolute top-0 right-0 h-full w-2 bg-white/30 blur-sm" />
                  </motion.div>
                </div>
                
                <p className={`text-[11px] leading-relaxed font-medium transition-colors duration-300 ${isDark ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-600'}`}>
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
