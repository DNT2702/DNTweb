import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Blog() {
  const navigate = useNavigate();

  const blogs = [
    { title: "What's the reason so many older adults aren't active?", cat: 'Wellness', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
    { title: 'Blood Cancers: Early Signs, Symptoms & Care', cat: 'Oncology', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80' },
    { title: 'Best Orthopaedic Surgeons & Care Practices', cat: 'Ortho', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80' },
    { title: "Do's and Don'ts After Cataract Surgery", cat: 'Eye Care', img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80' },
    { title: 'Dental Implants: What is the Best Option?', cat: 'Dental', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80' },
    { title: 'Safety Guide For Swine Flu Season', cat: 'Prevention', img: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&q=80' },
  ];

  return (
    <section className="py-20 bg-[#F0F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center bg-[#1B3A6B]/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase">Latest News</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
              Our <span className="text-[#1B3A6B]">Blog</span>
            </h2>
          </div>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x scroll-smooth">
          {blogs.map((b, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => navigate('/blog')}
              className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all snap-start cursor-pointer group">
              <div className="relative h-40 overflow-hidden">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#1B3A6B] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">{b.cat}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-[10px] text-[#5A6077] mb-2">
                  <Clock className="w-3 h-3" /> 5 min read
                </div>
                <h4 className="text-sm font-bold text-[#1A1A2E] leading-snug mb-3 line-clamp-2">{b.title}</h4>
                <div className="flex items-center gap-1 text-[#1B3A6B] text-xs font-semibold group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
