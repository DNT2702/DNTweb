import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const testimonials = [
  { name: 'Priya Sharma', issue: 'Hair Loss', text: 'After 6 months of treatment, my hair fall has reduced by 80%. The personalized approach really works!', rating: 5 },
  { name: 'Rajesh Kumar', issue: 'Thyroid', text: 'My thyroid levels are now normal without any side effects. Best decision to choose homeopathy.', rating: 5 },
  { name: 'Anita Reddy', issue: 'Skin Care', text: 'My chronic eczema has improved dramatically. The doctor is very knowledgeable and caring.', rating: 5 },
  { name: 'Sivaji Nakka', issue: 'General', text: '100% excellent treatment. Highly recommended for anyone looking for natural healing.', rating: 5 },
  { name: 'Ramesh Dalli', issue: 'Respiratory', text: 'Best homeo clinic in Vizag. My breathing issues resolved within weeks.', rating: 5 },
  { name: 'Maria Flynn', issue: 'Migraine', text: 'I would recommend practitioners at this center to everyone! They are excellent.', rating: 5 },
];

const reviews = [
  { name: 'Gorli Dileep', date: '2024-07-26', text: '100% Best results' },
  { name: 'Shyam Sekhar', date: '2024-07-26', text: 'Best homeo clinic in vizag' },
  { name: 'Chandu Yadav', date: '2024-07-23', text: '100% Best for skin' },
  { name: 'Durga Prasad', date: '2024-07-23', text: 'Best Treatment' },
  { name: 'Samit Kumar', date: '2024-07-23', text: 'Best homeopathic clinic' },
];

export default function Testimonials() {
  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <div className="inline-flex items-center bg-[#1B3A6B]/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase">Testimonials</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              What Our Patients <span className="text-[#1B3A6B]">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4 text-[#1B3A6B]/10">
                  <Quote className="w-10 h-10" />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#5A6077] text-sm mb-5 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#1B3A6B]/5">
                  <div className="w-10 h-10 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1A2E] text-sm">{t.name}</div>
                    <div className="text-xs text-[#5A6077]">{t.issue} Treatment</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xl font-bold text-[#1A1A2E]">4.9</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-1" style={{ fontFamily: 'Lora' }}>
              <span className="text-[#C62828]">945</span> Google Reviews
            </h3>
            <p className="text-sm text-[#5A6077]">Verified by Google</p>
          </motion.div>

          <motion.div {...fadeInUp} className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {reviews.map((r, i) => (
              <div key={i} className="flex-shrink-0 w-64 bg-[#F0F4FA] rounded-xl p-4 border border-[#1B3A6B]/5 snap-start">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-[#1A1A2E] font-medium mb-3">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1B3A6B]">{r.name}</span>
                  <span className="text-[10px] text-[#5A6077]">{r.date}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-8">
            <a href="https://g.co/kgs/DrArunHomeopathy" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#1B3A6B] text-[#1B3A6B] px-6 py-2.5 rounded-full hover:bg-[#1B3A6B] hover:text-white transition-all font-semibold text-sm">
              Write a Review
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
