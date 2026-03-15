import { motion } from 'framer-motion';
import { Play, Globe, Brain, Clapperboard, GraduationCap, Rocket, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectsProps {
  isDark: boolean;
}

export default function ProjectsSection({ isDark }: ProjectsProps) {
  const projects = [
    { title: 'Learning Hub', description: 'Interactive simulations for students.', tags: ['STEM'], icon: GraduationCap, color: 'from-orange-600/20 to-orange-400/20', link: 'https://phet.colorado.edu', type: 'web' },
    { title: 'Emotional AI', description: 'AI companion for deep conversations.', tags: ['AI Expert'], icon: Brain, color: 'from-orange-600/20 to-orange-400/20', link: 'https://www.character.ai', type: 'web' },
    { title: 'Visual Generator', description: 'Generate high-quality images and art.', tags: ['Design'], icon: Sparkles, color: 'from-orange-600/20 to-orange-400/20', link: 'https://leonardo.ai', type: 'web' },
    { title: 'Cloud Editor', description: 'Edit footage in browser with AI tools.', tags: ['VFX'], icon: Clapperboard, color: 'from-orange-600/20 to-orange-400/20', link: 'https://www.capcut.com/editor', type: 'watch' },
    { title: 'Dev Roadmap', description: 'Structured paths for engineering.', tags: ['Guide'], icon: Rocket, color: 'from-orange-600/20 to-orange-400/20', link: 'https://roadmap.sh', type: 'web' },
    { title: 'Code Library', description: 'Curated programming best practices.', tags: ['Coding'], icon: Code2, color: 'from-orange-600/20 to-orange-400/20', link: 'https://www.freecodecamp.org/learn', type: 'web' },
  ];

  return (
    <section 
      id="projects" 
      className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* OVERLAY TEPAT DI 65% - Keseimbangan Sempurna */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        
        {/* KOTAK GLASS CARD (Sedikit lebih bening agar gradasi 65% menyatu) */}
        <div className={`max-w-6xl mx-auto backdrop-blur-xl border rounded-[2rem] p-6 md:p-10 transition-all duration-500 
          ${isDark 
            ? 'bg-black/45 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.4)]' 
            : 'bg-white/85 border-white shadow-xl'}`}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className={`font-black mb-2 block uppercase tracking-[0.2em] text-[10px] ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>
              Featured Works
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Creative <span className="text-orange-500">Innovation</span>
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.7)]" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className={`h-full p-6 rounded-[1.5rem] border transition-all duration-300 flex flex-col relative overflow-hidden
                  ${isDark 
                    ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-orange-500/40' 
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-lg'}`}>
                  
                  {/* ICON SECTION */}
                  <div className={`w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br shadow-lg ${project.color}`}>
                    <project.icon className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
                  </div>
                  
                  <div className="space-y-3 flex-grow">
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-[11px] leading-relaxed line-clamp-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Button size="sm" className="w-full rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold h-9 text-xs shadow-lg transition-all active:scale-95" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.type === 'web' ? <Globe className="mr-2 h-3.5 w-3.5" /> : <Play className="mr-2 h-3.5 w-3.5" />}
                        {project.type === 'web' ? 'Explore' : 'Launch'}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
