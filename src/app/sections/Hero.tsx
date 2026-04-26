import { motion } from 'motion/react';
import { Award, Users, MessageCircle } from 'lucide-react';

export default function Hero({ scrollTo, openBookingModal }: { scrollTo: (id: string) => void, openBookingModal: () => void }) {
  return (
    <section id="home" className="pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A6B]/5 via-[#F0F4FA] to-[#4A7CC9]/10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#4A7CC9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B3A6B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-[#1B3A6B]/15 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase">Tradition · Quality · Progress</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              Driving Innovation{' '}
              <span className="text-[#1B3A6B]">To Wellness</span>
            </h1>
            <p className="text-lg text-[#5A6077] mb-8 max-w-lg leading-relaxed">
              Safe, natural & personalized homeopathic treatment in Visakhapatnam. Experience the power of holistic healing with Dr. Arun.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => scrollTo('contact')}
                className="bg-[#1B3A6B] text-white px-8 py-4 rounded-full hover:bg-[#2A4F8A] transition-all shadow-lg hover:shadow-xl text-base font-semibold">
                Contact Us
              </button>
              <a href="https://wa.me/917207115599" target="_blank" rel="noopener noreferrer"
                className="bg-white border-2 border-[#1B3A6B] text-[#1B3A6B] px-8 py-4 rounded-full hover:bg-[#1B3A6B]/5 transition-all text-base font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#1B3A6B]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1A1A2E]">15+ Years</div>
                  <div className="text-sm text-[#5A6077]">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#C62828]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1A1A2E]">10,000+</div>
                  <div className="text-sm text-[#5A6077]">Patients Treated</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" alt="Dr. Arun Homeopathy"
                className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-[#1B3A6B] font-bold text-sm">Dr. Arun Homeopathy</p>
                  <p className="text-[#5A6077] text-xs">Choose Homeopathy — Effective · Gentle · Safe</p>
                </div>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#4A7CC9]/20 rounded-full hidden lg:block" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#C62828]/10 rounded-full hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
