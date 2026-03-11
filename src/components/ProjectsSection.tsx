import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, MessageSquare, Globe, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/myknerqe", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Pesan Berhasil Terkirim! ✨");
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      alert("Gagal mengirim pesan, silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-all placeholder:text-gray-600";

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#020617] text-white">
      {/* Background Glow - Gradasi Cahaya */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] font-medium mb-2 block uppercase tracking-[0.3em] text-xs">Kontak</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Kontak dengan Ikon Tambahan */}
          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mari Berkolaborasi!</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "Selalu terbuka untuk diskusi tentang project baru atau ide kreatif."
              </p>
            </div>

            <div className="space-y-4">
              {/* Kontak 1: Email */}
              <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#3b82f6]/50 transition-all">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#3b82f6]/10 rounded-lg text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all">
                        <Mail size={22} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Utama</p>
                        <p className="font-medium">muhammaddaffah01@gmail.com</p>
                    </div>
                </div>
                {/* Ikon Tambahan di Sebelah Kanan */}
                <div className="hidden sm:flex gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <MessageSquare size={16} className="text-[#3b82f6]" />
                    <ArrowRight size={16} />
                </div>
              </div>

              {/* Kontak 2: Telepon */}
              <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#10b981]/50 transition-all">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#10b981]/10 rounded-lg text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-all">
                        <Phone size={22} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp / Telp</p>
                        <p className="font-medium">+62 895 3391 54312</p>
                    </div>
                </div>
                <div className="hidden sm:flex gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <MessageSquare size={16} className="text-[#10b981]" />
                    <ArrowRight size={16} />
                </div>
              </div>

              {/* Kontak 3: Lokasi */}
              <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl group hover:border-orange-400/50 transition-all">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-400/10 rounded-lg text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all">
                        <MapPin size={22} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Lokasi Sekarang</p>
                        <p className="font-medium">Aceh, Indonesia</p>
                    </div>
                </div>
                <div className="hidden sm:flex gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Globe size={16} className="text-orange-400" />
                    <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <form onSubmit={handleSubmit} className="p-8 bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text"
                placeholder="Nama Lengkap" 
                className={inputClass}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                type="email"
                placeholder="Alamat Email" 
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <input 
              type="text"
              placeholder="Subjek (Contoh: Tawaran Project)" 
              className={inputClass}
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
            />
            <textarea 
              placeholder="Tuliskan pesan detail Anda di sini..." 
              rows={5} 
              className={inputClass + " resize-none"}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-3 group"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <span>Kirim Pesan</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
