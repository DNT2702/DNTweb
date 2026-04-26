import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Cpu, Trophy, ShieldCheck, Stethoscope } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const pills = [
  { icon: Cpu, label: 'Modern Technology' },
  { icon: Trophy, label: 'Success of Treatment' },
  { icon: ShieldCheck, label: 'Certified Doctors' },
  { icon: Stethoscope, label: 'Medical Advice' },
];

const tabs = [
  { title: 'We are here to hear and heal', items: ['COVID-19 Assistance', 'Comprehensive Inpatient Care', 'Medical And Surgical Services', 'Specialised Support Service', 'Instant Operation & Appointment'] },
  { title: 'Treatment patients in primary care', items: ['Chronic Disease Management', 'Preventive Health Checkups', 'Personalized Treatment Plans', 'Follow-up Consultations', 'Holistic Health Assessment'] },
  { title: 'Accreditation within specialties', items: ['Quality Assured Treatments', 'Evidence-Based Protocols', 'Certified Practitioners', 'Patient Safety Standards', 'Continuous Improvement'] },
  { title: 'Better Health While Aging', items: ['Geriatric Care Programs', 'Mobility & Joint Health', 'Cognitive Wellness', 'Nutrition Counseling', 'Lifestyle Management'] },
];

export default function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-[#F0F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <div className="inline-flex items-center bg-[#1B3A6B]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
            We Provide Various <span className="text-[#1B3A6B]">Directions</span>
          </h2>
        </motion.div>

        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-3 mb-10">
          {pills.map((p, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-[#1B3A6B]/10 rounded-full px-4 py-2 shadow-sm">
              <p.icon className="w-4 h-4 text-[#1B3A6B]" />
              <span className="text-sm font-medium text-[#1A1A2E]">{p.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-3">
          {tabs.map((tab, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#1B3A6B]/5">
              <button onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F0F4FA]/50 transition-colors">
                <span className={`font-semibold ${open === i ? 'text-[#1B3A6B]' : 'text-[#1A1A2E]'}`}>{tab.title}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className={`w-5 h-5 ${open === i ? 'text-[#1B3A6B]' : 'text-[#5A6077]'}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <div className="h-px bg-[#1B3A6B]/10 mb-4" />
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {tab.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-[#5A6077]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7CC9]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
