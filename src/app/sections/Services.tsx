import { motion } from 'motion/react';
import { HeartPulse, Wind, Brain, Activity, Baby, ArrowRight } from 'lucide-react';

const services = [
  { icon: HeartPulse, title: 'Cardiovascular Care', desc: 'Expert management of hypertension, coronary diseases, and metabolic heart health using personalized homeopathic protocols.', img: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=500&q=80', tag: 'HEART HEALTH' },
  { icon: Wind, title: 'Respiratory Diseases', desc: 'Safe and effective holistic approach to asthma, bronchitis, and chronic sinus conditions with long-term recovery focus.', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80', tag: 'LUNG CARE' },
  { icon: Brain, title: 'Headache & Migraine', desc: 'Deeply tailored treatments to alleviate chronic pain and reduce migraine frequency through constitutional remedies.', img: '/images/neurology.png', tag: 'NEUROLOGY' },
  { icon: Activity, title: 'Endocrine Support', desc: 'Restoring hormonal balance and treating thyroid disorders naturally by addressing the root cause of metabolic issues.', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80', tag: 'METABOLIC' },
  { icon: Baby, title: 'Pediatric Care', desc: 'Gentle, side-effect-free healing for children, supporting growth, immunity, and overall developmental wellness.', img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=500&q=80', tag: 'CHILD CARE' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, x: -50, filter: 'blur(10px)' },
  show: { 
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

const itemReverse = {
  hidden: { opacity: 0, x: 50, filter: 'blur(10px)' },
  show: { 
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

export default function Services({ openBookingModal }: { openBookingModal?: () => void }) {
  return (
    <section id="services" className="py-24 bg-[#F0F4FA] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1B3A6B]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} 
          className="text-center mb-16">
          <div className="inline-flex items-center bg-[#1B3A6B]/5 rounded-full px-4 py-1.5 mb-4 border border-[#1B3A6B]/10">
            <span className="text-[#1B3A6B] text-[10px] font-black tracking-[0.2em] uppercase">Holistic Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
            Conditions We <span className="text-[#C62828]">Heal</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#1B3A6B]/10 rounded-full mx-auto mt-6" />
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          className="space-y-10">
          {services.map((service, i) => (
            <motion.div key={i} variants={i % 2 === 0 ? item : itemReverse}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              onClick={openBookingModal}
              className={`bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col cursor-pointer group border border-[#1B3A6B]/5 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-[45%] relative overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-64 md:h-[350px] object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-[#1B3A6B]/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#C62828] animate-pulse" /> {service.tag}
                </div>
              </div>
              <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F4FA] flex items-center justify-center group-hover:bg-[#1B3A6B] group-hover:rotate-6 transition-all duration-300 shadow-inner">
                    <service.icon className="w-7 h-7 text-[#1B3A6B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A2E] group-hover:text-[#1B3A6B] transition-colors" style={{ fontFamily: 'Lora' }}>{service.title}</h3>
                </div>
                <p className="text-[#5A6077] text-base leading-relaxed mb-8 group-hover:text-[#1A1A2E]/80 transition-colors">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-[#C62828] font-black text-xs tracking-widest uppercase group-hover:gap-4 transition-all">
                  Consult Now <ArrowRight className="w-4 h-4" />
                </div>
                {/* Decorative background number */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-8xl font-black text-[#1B3A6B]/[0.02] pointer-events-none group-hover:text-[#1B3A6B]/[0.05] transition-colors" style={{ fontFamily: 'Lora' }}>0{i + 1}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4A7CC9]/5 rounded-full blur-[120px] -mr-48" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C62828]/5 rounded-full blur-[120px] -ml-48" />
    </section>
  );
}
