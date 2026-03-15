import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar({ isDark, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efek untuk mendeteksi scroll agar navbar bisa berubah transparansinya
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? (isDark ? 'py-2' : 'py-2') 
        : 'py-4 md:py-6'
    }`}>
      {/* Menggunakan max-w-[95%] agar lebih lebar ke pinggir tapi tetap rapi */}
      <div className={`mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between transition-all duration-500 rounded-full max-w-[98%] md:max-w-[95%] border backdrop-blur-xl ${
        isDark 
          ? `${scrolled ? 'bg-black/60 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'}` 
          : `${scrolled ? 'bg-white/80 border-slate-200 shadow-xl' : 'bg-transparent border-transparent'}`
      }`}>
        
        {/* Logo dengan style Bold & Italic agar senada dengan section lain */}
        <a href="#home" className={`font-black text-xl md:text-2xl italic tracking-tighter transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          DAFFAH<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                isDark ? 'text-white/70 hover:text-orange-400' : 'text-slate-600 hover:text-orange-600'
              }`}
            >
              {item}
              {/* Garis bawah animasi saat hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <div className={`h-6 w-[1px] ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />

          <Button 
            onClick={toggleTheme} 
            variant="ghost" 
            size="icon" 
            className={`rounded-full transition-transform hover:rotate-45 ${isDark ? 'hover:bg-orange-500/20' : 'hover:bg-orange-50'}`}
          >
            {isDark ? <Sun className="text-orange-400 w-5 h-5" /> : <Moon className="text-slate-700 w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-full">
            {isDark ? <Sun className="text-orange-400" /> : <Moon className="text-slate-700" />}
          </Button>
          <Button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            variant="ghost" 
            size="icon" 
            className={`rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100'}`}
          >
            {isMobileMenuOpen ? <X className={isDark ? 'text-white' : 'text-slate-900'} /> : <Menu className={isDark ? 'text-white' : 'text-slate-900'} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 rounded-[2rem] border backdrop-blur-2xl z-50 shadow-2xl"
            style={{ backgroundColor: isDark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.95)', borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white hover:text-orange-400' : 'text-slate-900 hover:text-orange-600'}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
