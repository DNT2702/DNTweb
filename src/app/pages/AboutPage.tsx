import { motion } from 'motion/react';
import { Shield, Heart, Award, Users, CheckCircle, Stethoscope, GraduationCap, Building2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const milestones = [
  { year: '2009', title: 'Clinic Founded', desc: 'Dr. Arun established the first homeopathy clinic in Visakhapatnam.' },
  { year: '2013', title: 'Expanded Services', desc: 'Introduced specialized pediatric and dermatology departments.' },
  { year: '2018', title: '5,000+ Patients', desc: 'Milestone of treating over 5,000 patients successfully.' },
  { year: '2022', title: '4 Locations', desc: 'Grew to 4 clinic locations across Visakhapatnam.' },
  { year: '2024', title: '10,000+ Patients', desc: 'Crossed 10,000 patients with 945+ Google reviews.' },
];

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every patient is treated with genuine care and empathy.' },
  { icon: Shield, title: 'Safety First', desc: 'All treatments are natural, non-toxic, and free of side effects.' },
  { icon: CheckCircle, title: 'Evidence-Based', desc: 'We combine tradition with modern diagnostic approaches.' },
  { icon: Users, title: 'Patient-Centric', desc: 'Personalized treatment plans tailored to each individual.' },
];

const team = [
  { name: 'Dr. Arun', role: 'Founder & Lead Homeopath', exp: '15+ Years', specialization: 'General Homeopathy, Chronic Diseases' },
  { name: 'Dr. Priya', role: 'Pediatric Specialist', exp: '10+ Years', specialization: 'Children\'s Health, Immunology' },
  { name: 'Dr. Ramesh', role: 'Dermatology Expert', exp: '8+ Years', specialization: 'Skin Care, Hair Treatment' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B3A6B] to-[#2A4F8A] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=60')] bg-cover bg-center opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7CC9]/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              Healing With Nature,<br />
              <span className="text-[#6B9BE0]">Caring With Heart</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              For over 15 years, Dr. Arun Homeopathy has been at the forefront of natural healing in Visakhapatnam, combining the time-tested wisdom of homeopathy with modern diagnostic techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="rounded-3xl overflow-hidden shadow-xl relative">
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80" alt="Homeopathic Treatment"
                  className="w-full h-[480px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1B3A6B]/10 rounded-full hidden lg:block" />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Lora' }}>
                Our <span className="text-[#1B3A6B]">Story</span>
              </h2>
              <p className="text-[#5A6077] leading-relaxed mb-6">
                The field of homeopathy goes beyond standard medicine by focusing on natural remedies that work in harmony with your body. Dr. Arun Homeopathy is committed to providing high-quality, cost-effective care, ensuring that every patient receives personalized attention and the best treatment options available.
              </p>
              <p className="text-[#5A6077] leading-relaxed mb-8">
                Founded in 2009, our clinic has grown from a single-room practice to a network of 4 locations across Visakhapatnam, treating over 10,000+ patients with a 4.9-star Google rating. We believe in treating the root cause, not just the symptoms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-[#F0F4FA] rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A2E] text-sm">Infection Prevention</h4>
                    <p className="text-xs text-[#5A6077]">Natural immunity boosting</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#F0F4FA] rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-[#C62828] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A2E] text-sm">Personalized Care</h4>
                    <p className="text-xs text-[#5A6077]">Customized for each patient</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Our Core <span className="text-[#1B3A6B]">Values</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#1B3A6B]/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-[#1B3A6B]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2" style={{ fontFamily: 'Lora' }}>{v.title}</h3>
                <p className="text-sm text-[#5A6077]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Our <span className="text-[#1B3A6B]">Journey</span>
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-[#1B3A6B]/15" />
            {milestones.map((m, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-[#F0F4FA] rounded-2xl p-5 border border-[#1B3A6B]/5 hover:shadow-md transition-shadow">
                    <span className="text-[#C62828] font-bold text-sm">{m.year}</span>
                    <h4 className="font-bold text-[#1A1A2E] mt-1">{m.title}</h4>
                    <p className="text-sm text-[#5A6077] mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#1B3A6B] border-4 border-white shadow z-10" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Meet Our <span className="text-[#1B3A6B]">Team</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-[#1B3A6B] to-[#4A7CC9] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <Stethoscope className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>{t.name}</h3>
                  <p className="text-[#C62828] font-semibold text-sm mt-1">{t.role}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#5A6077]">
                      <GraduationCap className="w-4 h-4 text-[#1B3A6B]" />
                      <span>{t.exp} Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5A6077]">
                      <Building2 className="w-4 h-4 text-[#1B3A6B]" />
                      <span>{t.specialization}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[#1B3A6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, num: '15+', label: 'Years Experience' },
              { icon: Users, num: '10,000+', label: 'Patients Treated' },
              { icon: Building2, num: '4', label: 'Clinic Locations' },
              { icon: CheckCircle, num: '945+', label: 'Google Reviews' },
            ].map((s, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="text-center">
                <s.icon className="w-8 h-8 text-[#6B9BE0] mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1">{s.num}</div>
                <div className="text-sm text-white/60">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
