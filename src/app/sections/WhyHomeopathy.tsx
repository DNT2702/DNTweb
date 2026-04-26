import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function WhyHomeopathy({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center bg-[#C62828]/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#C62828] text-xs font-semibold tracking-wider uppercase">Motivation</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A2E] mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              Why Choose<br /><span className="text-[#1B3A6B]">Homeopathy</span>
            </h2>
            <p className="text-[#5A6077] leading-relaxed mb-8 text-lg">
              Homeopathic doctor gives emphasis on long-term benefits not only short term relief. Patient can tolerate short suffering for long lasting relief or cure. Cure is possible in Homeopathy, no such shifting of disease from one part to another part. Treatment can be started even before the diagnostic procedure.
            </p>
            <button onClick={() => scrollTo('services')}
              className="bg-[#1B3A6B] text-white px-8 py-3.5 rounded-full hover:bg-[#2A4F8A] transition-all shadow-md hover:shadow-lg font-semibold inline-flex items-center gap-2">
              Read More <span className="text-lg">→</span>
            </button>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="grid grid-cols-2 gap-4">
            {[
              { num: '15+', label: 'Years Experience', color: '#1B3A6B' },
              { num: '10K+', label: 'Patients Treated', color: '#C62828' },
              { num: '945', label: 'Google Reviews', color: '#4A7CC9' },
              { num: '4', label: 'Clinic Locations', color: '#1A1A2E' }
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#F0F4FA] rounded-2xl p-6 text-center border border-[#1B3A6B]/5 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.num}</div>
                <div className="text-xs text-[#5A6077] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
