import { motion } from 'motion/react';
import { Shield, Heart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80" alt="Homeopathic Treatment"
                className="w-full h-[480px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1B3A6B]/10 rounded-full hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[#4A7CC9]/20 rounded-full hidden lg:block" />
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <div className="inline-flex items-center bg-[#1B3A6B]/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase">About Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Lora' }}>
              Safe & Effective Homeopathic Treatment{' '}
              <span className="text-[#1B3A6B]">Tailored Just for You</span>
            </h2>
            <p className="text-[#5A6077] leading-relaxed mb-8">
              The field of homeopathy goes beyond standard medicine by focusing on natural remedies that work in harmony with your body. Dr. Arun Homeopathy is committed to providing high-quality, cost-effective care, ensuring that every patient receives personalized attention and the best treatment options available.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
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
  );
}
