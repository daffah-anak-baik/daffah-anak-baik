import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactProps {
  isDark: boolean;
}

export default function ContactSection({ isDark }: ContactProps) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myknerqe", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSucceeded(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay 65% Konsisten */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className={`max-w-6xl mx-auto backdrop-blur-xl border rounded-[2.5rem] p-8 md:p-14 transition-all duration-500 
          ${isDark ? 'bg-black/45 border-white/10 shadow-2xl' : 'bg-white/85 border-white shadow-xl'}`}>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* SISI KIRI: INFO KONTAK (TEMA ORANGE) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <span className={`font-black mb-2 block uppercase tracking-[0.3em] text-[10px] ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>
                  GET IN TOUCH
                </span>
                <h2 className={`font-display text-4xl md:text-6xl font-extrabold mb-6 italic tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Connect <span className="text-orange-500">With Me</span>
                </h2>
                <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                
                <h3 className={`text-xl font-black mb-4 uppercase italic ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  LET'S COLLABORATE!
                </h3>
                <p className={`text-sm leading-relaxed max-w-md ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Have an interesting research idea or want to collaborate on a project? 
                  Reach out to me through any of the platforms below.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'EMAIL', value: 'muhammaddaffah01@gmail.com' },
                  { icon: MessageSquare, label: 'WHATSAPP', value: '+62 895 3391 54312' },
                  { icon: MapPin, label: 'LOCATION', value: 'Aceh, Indonesia' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-5 p-5 rounded-2xl border transition-all hover:translate-x-2
                    ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-100 shadow-sm'}`}>
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-[10px] font-black tracking-widest ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>{item.label}</p>
                      <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SISI KANAN: FORM & ANIMASI THANK YOU (TEMA ORANGE) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {!succeeded ? (
                  <motion.div
                    key="form-container"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`p-8 md:p-10 rounded-[2rem] border ${isDark ? 'bg-black/30 border-white/5' : 'bg-white border-slate-200'}`}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className={`text-[10px] font-black uppercase tracking-widest ml-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Full Name</label>
                          <input required name="name" type="text" placeholder="Your Name" className={`w-full p-4 rounded-xl text-xs border outline-none transition-all ${isDark ? 'bg-black/40 border-white/10 text-white focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-500'}`} />
                        </div>
                        <div className="space-y-2">
                          <label className={`text-[10px] font-black uppercase tracking-widest ml-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email Address</label>
                          <input required name="email" type="email" placeholder="email@example.com" className={`w-full p-4 rounded-xl text-xs border outline-none transition-all ${isDark ? 'bg-black/40 border-white/10 text-white focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-500'}`} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className={`text-[10px] font-black uppercase tracking-widest ml-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
                        <textarea required name="message" rows={6} placeholder="How can I help you?" className={`w-full p-4 rounded-xl text-xs border outline-none transition-all resize-none ${isDark ? 'bg-black/40 border-white/10 text-white focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-500'}`} />
                      </div>

                      <Button disabled={submitting} type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black italic rounded-xl py-8 transition-all active:scale-95 shadow-lg shadow-orange-900/30">
                        {submitting ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Send className="w-5 h-5 mr-2" />}
                        {submitting ? 'SENDING...' : 'SEND MESSAGE'}
                      </Button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center p-12 py-20 rounded-[2rem] border border-orange-500/30 bg-orange-500/5 backdrop-blur-md"
                  >
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-orange-500/50">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className={`text-3xl font-black mb-4 italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Received!</h3>
                    <p className={`leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                      Thank you for the message,<br />
                      <span className="text-orange-500 text-xl font-black block mt-2">Daffah will reply soon.</span>
                    </p>
                    <Button onClick={() => setSucceeded(false)} variant="ghost" className="mt-10 text-xs font-black tracking-widest text-orange-500 hover:text-orange-400 uppercase">
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
