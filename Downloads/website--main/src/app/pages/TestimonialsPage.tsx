import { motion } from 'motion/react';
import { Star, Quote, Heart, CheckCircle, Video } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const testimonials = [
  { name: 'Priya Sharma', issue: 'Chronic Hair Loss', text: 'After 6 months of treatment, my hair fall has reduced by 80%. I was skeptical about homeopathy but the results are undeniable. The personalized approach really works!', rating: 5, date: '2 months ago' },
  { name: 'Rajesh Kumar', issue: 'Thyroid Disorder', text: 'My thyroid levels are now normal without any heavy conventional medicines or side effects. Best decision to choose Dr. Arun for my healthcare.', rating: 5, date: '3 weeks ago' },
  { name: 'Anita Reddy', issue: 'Eczema & Skin Care', text: 'My chronic eczema has improved dramatically. After visiting many specialists, this clinic finally gave me the solution I needed. The doctor is very knowledgeable and caring.', rating: 5, date: '1 month ago' },
  { name: 'Sivaji Nakka', issue: 'General Wellness', text: '100% excellent treatment. Highly recommended for anyone looking for natural healing. Atmosphere is very welcoming.', rating: 5, date: '5 days ago' },
  { name: 'Ramesh Dalli', issue: 'Chronic Sinusitis', text: 'Best homeo clinic in Vizag. My breathing issues resolved within weeks. I havent used an inhaler since I started this treatment.', rating: 5, date: '4 months ago' },
  { name: 'Maria Flynn', issue: 'Migraine', text: 'I would recommend practitioners at this center to everyone! They are excellent and patient with explaining the process.', rating: 5, date: '2 months ago' },
];

const videoSuccess = [
  { title: 'Success Story: Chronic Asthma', img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=60' },
  { title: 'Recovering from Joint Pain', img: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?w=400&q=60' },
];

export default function TestimonialsPage({ openBookingModal }: { openBookingModal: () => void }) {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B3A6B] to-[#2A4F8A] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&q=60')] bg-cover bg-center opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">Patient Stories</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              Real Stories of<br />
              <span className="text-[#6B9BE0]">Holistic Recovery</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              We take pride in our patients' health. Read about the journeys and success stories of those who chose homeopathic wellness with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Header */}
      <section className="py-12 bg-white border-b border-[#1B3A6B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#F0F4FA] p-4 rounded-2xl flex items-center justify-center border border-[#1B3A6B]/10">
              <span className="text-3xl font-black text-[#1B3A6B]">4.9</span>
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[#5A6077] font-medium">945 Total Reviews on Google</p>
            </div>
          </div>
          <a href="https://g.co/kgs/DrArunHomeopathy" target="_blank" rel="noopener noreferrer"
            className="bg-[#1B3A6B] text-white px-8 py-3 rounded-full hover:bg-[#2A4F8A] transition-all font-bold flex items-center gap-2">
            Write a Review
          </a>
        </div>
      </section>

      {/* Detailed Testimonials Grid */}
      <section className="py-20 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all relative group">
                <div className="absolute top-8 right-8 text-[#1B3A6B]/5 group-hover:text-[#1B3A6B]/10 transition-colors">
                  <Quote className="w-16 h-16" />
                </div>
                
                <div className="flex gap-0.5 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2" style={{ fontFamily: 'Lora' }}>"{t.issue}"</h3>
                  <p className="text-[#5A6077] text-base leading-relaxed mb-10 italic">
                    {t.text}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#1B3A6B]/5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white font-black text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A2E]">{t.name}</div>
                      <div className="text-xs text-[#5A6077]">{t.date}</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C62828]/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#C62828] text-xs font-semibold tracking-wider uppercase">Watch Now</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Video Success <span className="text-[#1B3A6B]">Stories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoSuccess.map((v, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.2 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Video className="w-8 h-8 text-[#1B3A6B]" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg drop-shadow-lg">{v.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1B3A6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div {...fadeInUp}>
            <Heart className="w-12 h-12 text-[#6B9BE0] mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Lora' }}>Become Our Next Success Story</h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto italic">
              "Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity."
            </p>
            <button onClick={openBookingModal} className="bg-white text-[#1B3A6B] px-10 py-4 rounded-full hover:bg-white/90 transition-all font-black shadow-xl">
              Start Your Treatment Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
