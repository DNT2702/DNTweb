import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const banners = [
  { title: 'Asthma Management', subtitle: 'Take control of your asthma with the right care', color: 'from-[#1B3A6B] to-[#2A4F8A]',
    items: ['Respiratory infections', 'Genetic factors', 'Air Pollutants', 'Stress & Allergies'] },
  { title: 'Allergic Reactions', subtitle: 'Homeopathy treatment for itching & allergic reactions', color: 'from-[#C62828] to-[#E53935]',
    items: ['Skin rashes', 'Eczema', 'Contact dermatitis', 'Food allergies'] },
  { title: 'Orthopaedic Care', subtitle: 'From bones to muscles — complete care for everyone', color: 'from-[#1A1A2E] to-[#374151]',
    items: ['Joint pain', 'Arthritis', 'Sports injuries', 'Back pain'] },
  { title: 'Pulmonology', subtitle: 'Consultations for lung diseases & critical care', color: 'from-[#4A7CC9] to-[#6B9BE0]',
    items: ['Severe Asthma', 'Tuberculosis', 'Bronchitis', 'Interstitial Lung Disease'] },
];

export default function Banners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
            Our <span className="text-[#1B3A6B]">Specialties</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {banners.map((b, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${b.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
              <h3 className="text-lg font-bold mb-2 text-white" style={{ fontFamily: 'Lora' }}>{b.title}</h3>
              <p className="text-white/70 text-xs mb-4 leading-relaxed">{b.subtitle}</p>
              <ul className="space-y-1.5 mb-6">
                {b.items.map((item, j) => (
                  <li key={j} className="text-xs text-white/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/60 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-white/70 text-[10px]">
                <Phone className="w-3 h-3" /> +91 7207115599
              </div>
              <div className="flex items-center gap-2 text-white/50 text-[9px] mt-1">
                <MapPin className="w-3 h-3" /> Vizag · Vizianagaram · Vijayawada
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
