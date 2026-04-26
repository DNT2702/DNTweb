import { motion } from 'motion/react';
import { Leaf, ShieldCheck, HeartPulse, Sparkles, CheckCircle, ArrowRight, Pill, Droplets, Sun, TreePine } from 'lucide-react';
import { useNavigate } from 'react-router';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const benefits = [
  { icon: ShieldCheck, title: 'No Side Effects', desc: 'Homeopathic medicines are derived from natural substances and are completely safe for all ages, including infants and elderly.' },
  { icon: HeartPulse, title: 'Treats Root Cause', desc: 'Unlike conventional medicine that masks symptoms, homeopathy addresses the underlying root cause of diseases for permanent relief.' },
  { icon: Sparkles, title: 'Holistic Healing', desc: 'Treats the whole person — mind, body, and spirit — not just individual symptoms, leading to comprehensive wellness.' },
  { icon: Leaf, title: 'Natural Remedies', desc: 'All medicines are derived from natural sources like plants, minerals, and animal products, working in harmony with your body.' },
  { icon: Pill, title: 'Non-Addictive', desc: 'Homeopathic treatments are non-addictive and can be safely discontinued once the condition is cured.' },
  { icon: Droplets, title: 'Cost Effective', desc: 'Homeopathic treatments are significantly more affordable compared to conventional treatments for chronic conditions.' },
];

const comparisons = [
  { aspect: 'Approach', homeopathy: 'Treats root cause holistically', conventional: 'Treats symptoms only' },
  { aspect: 'Side Effects', homeopathy: 'None — completely safe', conventional: 'Often significant' },
  { aspect: 'Treatment', homeopathy: 'Personalized for each patient', conventional: 'Standardized protocols' },
  { aspect: 'Recovery', homeopathy: 'Permanent & long-lasting', conventional: 'Often temporary relief' },
  { aspect: 'Cost', homeopathy: 'Affordable & accessible', conventional: 'Can be expensive' },
  { aspect: 'Addiction', homeopathy: 'Non-addictive medicines', conventional: 'Risk of dependency' },
];

const conditions = [
  'Respiratory Diseases', 'Headache & Migraine', 'Skin Disorders', 'Hair Loss',
  'Thyroid Issues', 'Digestive Problems', 'Joint & Bone Pain', 'Allergies',
  'Anxiety & Depression', 'Pediatric Conditions', 'Women\'s Health', 'Autoimmune Disorders'
];

export default function WhyHomeopathyPage({ openBookingModal }: { openBookingModal: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B3A6B] to-[#2A4F8A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7CC9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C62828]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">Why Homeopathy</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              The Science of<br />
              <span className="text-[#6B9BE0]">Natural Healing</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Homeopathy is a 200-year-old system of medicine that stimulates the body's own healing mechanisms. Discover why millions worldwide choose homeopathy for safe, effective, and lasting health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Sun className="w-10 h-10 text-[#C62828] mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] leading-relaxed italic" style={{ fontFamily: 'Lora' }}>
              "Homeopathic doctors give emphasis on long-term benefits, not only short-term relief. Cure is possible — no shifting of disease from one part to another."
            </blockquote>
            <p className="text-[#5A6077] mt-4 font-medium">— Dr. Arun, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Benefits of <span className="text-[#1B3A6B]">Homeopathy</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#1B3A6B]/10 flex items-center justify-center mb-4">
                  <b.icon className="w-7 h-7 text-[#1B3A6B]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2" style={{ fontFamily: 'Lora' }}>{b.title}</h3>
                <p className="text-sm text-[#5A6077] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Homeopathy vs <span className="text-[#C62828]">Conventional Medicine</span>
            </h2>
          </motion.div>
          <motion.div {...fadeInUp} className="rounded-2xl overflow-hidden shadow-lg border border-[#1B3A6B]/10">
            <div className="grid grid-cols-3 bg-[#1B3A6B] text-white text-sm font-bold">
              <div className="p-4">Aspect</div>
              <div className="p-4 text-center">Homeopathy</div>
              <div className="p-4 text-center">Conventional</div>
            </div>
            {comparisons.map((c, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#F0F4FA]' : 'bg-white'}`}>
                <div className="p-4 font-semibold text-[#1A1A2E]">{c.aspect}</div>
                <div className="p-4 text-center text-[#1B3A6B] font-medium flex items-center justify-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{c.homeopathy}</span>
                </div>
                <div className="p-4 text-center text-[#5A6077]">{c.conventional}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Conditions We <span className="text-[#1B3A6B]">Treat</span>
            </h2>
          </motion.div>
          <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {conditions.map((c, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-3 border border-[#1B3A6B]/5">
                <TreePine className="w-5 h-5 text-[#1B3A6B] flex-shrink-0" />
                <span className="text-sm font-medium text-[#1A1A2E]">{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1B3A6B] to-[#2A4F8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Lora' }}>
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Book a consultation today and experience the difference of personalized homeopathic care.
            </p>
            <button onClick={openBookingModal}
              className="bg-[#C62828] text-white px-8 py-4 rounded-full hover:bg-[#E53935] transition-all shadow-lg text-base font-semibold inline-flex items-center gap-2">
              Book Appointment <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
