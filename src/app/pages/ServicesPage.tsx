import { motion } from 'motion/react';
import { HeartPulse, Wind, Brain, Activity, Baby, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const services = [
  { icon: HeartPulse, title: 'Cardiovascular & Critical Conditions', desc: 'Comprehensive care for hypertension, coronary artery disease, and other critical heart conditions using natural remedies.', img: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=800&q=80', tag: 'Primary Care' },
  { icon: Wind, title: 'Respiratory Diseases', desc: 'Holistic approach to asthma, bronchitis, and interstitial lung disease focusing on long-term immunity.', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80', tag: 'Specialized' },
  { icon: Brain, title: 'Headache & Migraine', desc: 'Scientific treatments to alleviate chronic pain and reduce the frequency of migraine attacks effectively.', img: 'https://images.unsplash.com/photo-1616012480717-fd5e170a4e18?w=800&q=80', tag: 'Neurological' },
  { icon: Activity, title: 'Endocrine & Metabolic Disorders', desc: 'Restoring hormonal balance and treating metabolic issues through personalized homeopathic protocols.', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', tag: 'Metabolic' },
  { icon: Baby, title: 'Pediatric Care', desc: 'Gentle and safe healing for childhood conditions, ensuring healthy development without side effects.', img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80', tag: 'Child Health' },
];

export default function ServicesPage({ openBookingModal }: { openBookingModal: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B3A6B] to-[#2A4F8A] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=60')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">Our Expertise</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              Comprehensive Homeopathic<br />
              <span className="text-[#6B9BE0]">Treatment Solutions</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              We specialize in treats a wide array of acute and chronic conditions. Our focus is on restoring your health naturally and permanently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div key={i} id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className={`flex flex-col gap-12 items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2 relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img src={service.img} alt={service.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur shadow-lg rounded-full px-4 py-1 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C62828]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1B3A6B]">{service.tag}</span>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B3A6B]/5 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#1B3A6B]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Lora' }}>{service.title}</h2>
                  <div className="h-1 w-20 bg-[#C62828]/20 rounded-full mb-6" />
                  <p className="text-[#5A6077] text-lg leading-relaxed mb-8">
                    {service.desc} Homeopathy treatment for this condition focus on stimulating your body's natural healing abilities. We look at the full symptom picture to provide a personalized remedy that addresses the root cause for lasting relief.
                  </p>
                  <button onClick={openBookingModal} 
                    className="group inline-flex items-center gap-2 text-[#1B3A6B] font-bold text-base hover:text-[#C62828] transition-colors">
                    Consult about this condition <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Service Section */}
      <section className="py-20 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Why Choose Our <span className="text-[#1B3A6B]">Services</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Safe Treatment', desc: '100% natural and free of side effects, safe for everyone.' },
              { icon: Clock, title: 'Long-term Cure', desc: 'Focus on permanent recovery rather than temporary relief.' },
              { icon: Users, title: 'Personalized Attention', desc: 'Every patient gets a customized protocol for their unique body.' },
            ].map((f, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#1B3A6B]/10 flex items-center justify-center mx-auto mb-6">
                  <f.icon className="w-8 h-8 text-[#1B3A6B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3" style={{ fontFamily: 'Lora' }}>{f.title}</h3>
                <p className="text-[#5A6077]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1B3A6B] rounded-[32px] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Lora' }}>
                Didn't see your condition listed?
              </h2>
              <p className="text-white/70 text-lg mb-10">
                We treat many more conditions than listed here. Contact us to discuss your specific health concern with Dr. Arun.
              </p>
              <button onClick={openBookingModal} 
                className="bg-white text-[#1B3A6B] px-10 py-4 rounded-full hover:bg-[#F0F4FA] transition-all font-bold shadow-lg">
                Ask a Question
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

