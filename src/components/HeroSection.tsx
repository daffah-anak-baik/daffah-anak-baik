import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">

        {/* GRID 2 KOLOM */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* FOTO KIRI - DIPERBESAR DAN DIBUAT BULAT SEMPURNA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Efek Cahaya di belakang foto */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <img
                src="/foto.jpg"
                alt="Foto Daffah"
                className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full object-cover shadow-2xl border-4 border-white/20 aspect-square"
              />
            </div>
          </motion.div>


          {/* TEKS KANAN */}
          <div className="text-center md:text-left"> {/* Ditambah agar lebih rapi di mobile */}

            <motion.span
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              Hai 👋
              <br />
              <span className="text-gradient">Selamat Datang</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0"
            >
              Saya Muhammad Daffah Aqiilah salah satu siswa di Man 1 Banda Aceh di kelas X-2 
              (Pre-International), Ini adalah web pertama saya yang merupakan tugas 1 pelajaran coding.
            </motion.p>


            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-10"
            >
              <Button
                size="lg"
                className="rounded-full px-8 shadow-glow"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 "
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>


            {/* SOCIAL MEDIA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center md:justify-start gap-6">
              {[
                { icon: Github, href: "https://github.com/daffah-anak-baik", label: 'GitHub' },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-daffah-4906a1379", label: 'LinkedIn' },
                { icon: Instagram, href: "https://www.instagram.com/_.daffah", label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>


      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>

    </section>
  );
}
