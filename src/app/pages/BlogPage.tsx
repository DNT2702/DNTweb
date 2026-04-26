import { motion } from 'motion/react';
import { Clock, User, Calendar, ArrowRight, Share2, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const blogs = [
  { 
    title: "What's the reason so many older adults aren't active?", 
    cat: 'Wellness', 
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    date: 'Oct 12, 2024',
    author: 'Dr. Arun',
    desc: 'Physical activity is vital for health as we age, yet many older adults face barriers. This post explores the common challenges and how homeopathy can help in maintaining vitality.'
  },
  { 
    title: 'Blood Cancers: Early Signs, Symptoms & Care', 
    cat: 'Oncology', 
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    date: 'Sep 28, 2024',
    author: 'Medical Staff',
    desc: 'Understanding the early warning signs of blood-related disorders is crucial. We discuss how holistic care can support energy levels and immunity during treatment.' 
  },
  { 
    title: 'Best Orthopaedic Surgeons & Care Practices', 
    cat: 'Ortho', 
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    date: 'Aug 15, 2024',
    author: 'Dr. Arun',
    desc: 'Joint pain and bone health are common concerns. In this post, we look at non-invasive ways to manage orthopaedic pain and improve mobility naturally.'
  },
  { 
    title: "Do's and Don'ts After Cataract Surgery", 
    cat: 'Eye Care', 
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80',
    date: 'Jul 05, 2024',
    author: 'Medical Staff',
    desc: 'Recovery after eye surgery requires careful attention. We provide a comprehensive guide on post-operative care and how natural remedies can aid healing.' 
  },
];

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B3A6B] to-[#2A4F8A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7CC9]/20 rounded-full blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">Health Insights</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Lora' }}>
              Our <span className="text-[#6B9BE0]">Blog</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Explore our latest articles, guides, and research on holistic health, homeopathy, and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {blogs.map((b, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="bg-[#F0F4FA] rounded-[32px] overflow-hidden hover:shadow-2xl transition-all group flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-[#1B3A6B] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{b.cat}</div>
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[10px] text-[#5A6077] mb-4">
                      <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider">
                        <Calendar className="w-3 h-3 text-[#1B3A6B]" /> {b.date}
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider">
                        <User className="w-3 h-3 text-[#1B3A6B]" /> {b.author}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Lora' }}>{b.title}</h3>
                    <p className="text-[#5A6077] text-sm leading-relaxed mb-6 line-clamp-3">
                      {b.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-[#1B3A6B]/10">
                    <button className="text-[#1B3A6B] font-bold text-sm flex items-center gap-1.5 hover:gap-3 transition-all">
                      Continue Reading <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                       <button className="p-2 rounded-full hover:bg-white transition-colors text-[#5A6077]"><Share2 className="w-4 h-4" /></button>
                       <button className="p-2 rounded-full hover:bg-white transition-colors text-[#5A6077]"><MessageCircle className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-16">
            <button className="inline-flex items-center gap-2 border-2 border-[#1B3A6B] text-[#1B3A6B] px-8 py-3 rounded-full font-bold hover:bg-[#1B3A6B] hover:text-white transition-all">
              Load More Posts
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stay Informed Banner */}
      <section className="py-20 bg-[#F0F4FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#1B3A6B] rounded-[32px] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-16 -mr-16" />
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Lora' }}>
                  Never Miss a Health Tip
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                  Our blog is updated weekly with insights and tips to keep you and your family healthy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto">
                    <input type="email" placeholder="Your email address" className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50" />
                    <button className="bg-white text-[#1B3A6B] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-white/90 transition-all">Subscribe</button>
                </div>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
