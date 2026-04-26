import { useState } from 'react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const departments = ['All', 'Rhinology', 'Ophthalmology', 'Cardiologist', 'Pulmonary', 'Psychiatry', 'Dental'];

const schedule = [
  { dept: 'Rhinology', day: 'Monday', time: '8:00 AM - 10:00 AM', proc: 'Biopsy', color: '#1B3A6B' },
  { dept: 'Ophthalmology', day: 'Monday', time: '12:00 PM - 4:00 PM', proc: 'Laparoscopy', color: '#4A7CC9' },
  { dept: 'Cardiologist', day: 'Monday', time: '2:00 PM - 4:00 PM', proc: 'Cardiology', color: '#C62828' },
  { dept: 'Pulmonary', day: 'Monday', time: '6:00 PM - 8:00 PM', proc: 'Routine', color: '#059669' },
  { dept: 'Psychiatry', day: 'Wednesday', time: '8:00 AM - 10:00 AM', proc: 'Consultation', color: '#7C3AED' },
  { dept: 'Dental', day: 'Wednesday', time: '10:00 AM - 12:00 PM', proc: 'Cavities', color: '#D97706' },
  { dept: 'Cardiologist', day: 'Saturday', time: '8:00 AM - 10:00 AM', proc: 'Cardiology', color: '#C62828' },
  { dept: 'Pulmonary', day: 'Saturday', time: '2:00 PM - 4:00 PM', proc: 'Routine', color: '#059669' },
  { dept: 'Rhinology', day: 'Sunday', time: '10:00 AM - 12:00 PM', proc: 'Biopsy', color: '#1B3A6B' },
];

export default function Timetable() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? schedule : schedule.filter(s => s.dept === filter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-10">
          <div className="inline-flex items-center bg-[#1B3A6B]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase">Timetable</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
            Weekly <span className="text-[#1B3A6B]">Schedule</span>
          </h2>
        </motion.div>

        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-2 mb-10">
          {departments.map(d => (
            <button key={d} onClick={() => setFilter(d)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === d
                ? 'bg-[#1B3A6B] text-white shadow-md' : 'bg-[#F0F4FA] text-[#5A6077] hover:bg-[#1B3A6B]/10'}`}>
              {d}
            </button>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <motion.div key={`${item.dept}-${item.day}-${i}`} initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-[#F0F4FA] rounded-xl p-5 border border-[#1B3A6B]/5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: item.color }}>
                  {item.dept}
                </span>
                <span className="text-xs text-[#5A6077] font-medium">{item.day}</span>
              </div>
              <p className="text-sm font-semibold text-[#1A1A2E] mb-1">{item.time}</p>
              <p className="text-xs text-[#5A6077]">{item.proc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
