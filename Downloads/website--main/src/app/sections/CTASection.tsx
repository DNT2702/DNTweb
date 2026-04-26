import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Bell } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function CTASection({ scrollTo, openBookingModal }: { scrollTo: (id: string) => void, openBookingModal: () => void }) {
  const [email, setEmail] = useState('');

  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2">
        {/* CTA Left */}
        <motion.div {...fadeInUp} className="relative bg-[#1B3A6B] p-10 md:p-16 flex flex-col justify-center items-start min-h-[320px] overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" alt="Doctor" className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B] to-[#1B3A6B]/80" />
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white/10 rounded-full px-3 py-1 mb-4 text-white/70 text-xs font-semibold uppercase tracking-wider">
              Our Health Care
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              Experience The Ways<br />Homeopathy!
            </h2>
            <button onClick={() => scrollTo('contact')}
              className="bg-white text-[#1B3A6B] px-8 py-3.5 rounded-full font-bold hover:bg-white/90 transition-all shadow-lg inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Us Now
            </button>
          </div>
        </motion.div>

        {/* Newsletter Right */}
        <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="bg-[#4A7CC9] p-10 md:p-16 flex flex-col justify-center items-center min-h-[320px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6">
              <Bell className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Lora' }}>Subscribe to Newsletter</h3>
            <div className="flex gap-2 max-w-sm">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full bg-white/15 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50" />
              <button className="bg-white text-[#4A7CC9] px-6 py-3 rounded-full font-bold text-sm hover:bg-white/90 transition-all flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
