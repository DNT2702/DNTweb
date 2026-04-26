import { motion } from 'motion/react';
import { Calendar, MapPin, Phone } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function FeatureCards() {
  return (
    <section className="relative z-20 -mt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Schedule */}
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-[#1B3A6B] to-[#4A7CC9] rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Lora' }}>Schedule Hours</h3>
              <Calendar className="w-8 h-8 opacity-60" />
            </div>
            <div className="h-px bg-white/20 mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold">08:00 - 18:00</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="font-semibold">09:30 - 17:30</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="font-semibold">09:00 - 15:30</span></div>
            </div>
            <div className="mt-4 inline-flex items-center bg-white/15 rounded-full px-3 py-1 text-xs font-semibold">
              ● 24/7 Service Available
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="bg-[#1A1A2E] rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Lora' }}>Our Locations</h3>
              <MapPin className="w-8 h-8 opacity-60" />
            </div>
            <div className="h-px bg-white/20 mb-4" />
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Visakhapatnam · Vizinagaram · Vijayawada · Vissannapeta
            </p>
            <a href="https://maps.app.goo.gl/ByNiBtrkdp8z8JUK7" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
              Get Directions →
            </a>
          </motion.div>

          {/* Emergency */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80" alt="Emergency"
              className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/90 via-[#1B3A6B]/60 to-[#1B3A6B]/30" />
            <div className="relative p-6 text-white flex flex-col justify-end min-h-[220px]">
              <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Lora' }}>Appointments</h3>
              <p className="text-white/80 text-xs mb-4">Emergency Medical Services available</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C62828] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider">Emergency Cases</p>
                  <p className="text-xl font-bold text-white">+91 72071 15599</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
