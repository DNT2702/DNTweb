import { motion } from 'motion/react';

export default function TickerAndMarquee() {
  const tips = [
    { emoji: '🚫', text: 'Avoid ultra-processed foods' },
    { emoji: '🥩', text: 'Don\'t eat heavy meats' },
    { emoji: '🍬', text: 'Minimize sugar intake' },
    { emoji: '🌙', text: 'Avoid bright lights before sleep' },
    { emoji: '💧', text: 'Drink only safe water' },
    { emoji: '🍷', text: 'Avoid harmful use of alcohol' }
  ];

  const marqueeItems = [
    'Mental Health', 'Musculoskeletal', 'Respiratory Care',
    'Pediatric Care', 'Cardiovascular', 'Dermatology', 'Endocrine'
  ];

  return (
    <div className="overflow-hidden">
      {/* Preventive Care Ticker - High Contrast */}
      <section className="py-5 bg-[#1B3A6B] relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1B3A6B] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1B3A6B] to-transparent z-10" />
        
        <div className="animate-ticker whitespace-nowrap flex">
          {[...tips, ...tips, ...tips].map((tip, i) => (
            <span key={i} className="inline-flex items-center mx-10 text-xs sm:text-sm font-bold tracking-wide">
              <span className="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-inner">{tip.emoji}</span>
              <span className="text-white/90">{tip.text}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Premium Multi-style Marquee */}
      <section className="py-12 bg-white relative group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="inline-flex items-center group-hover:[animation-play-state:paused] transition-all">
              <span className={`text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter mx-8 transition-colors duration-500 ${
                i % 2 === 0 
                  ? 'text-[#1B3A6B]/5 [text-shadow:1px_1px_0_#1B3A6B,2px_2px_0_#1B3A6B]' 
                  : 'text-[#C62828]'
              }`}
                style={{ fontFamily: 'Lora' }}>
                {item}
              </span>
              <div className="w-4 h-4 rounded-full bg-[#4A7CC9]/20" />
            </div>
          ))}
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-4 left-1/4 w-32 h-32 bg-[#4A7CC9]/5 rounded-full blur-2xl" />
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-4 right-1/4 w-40 h-40 bg-[#C62828]/5 rounded-full blur-3xl" />
        </div>
      </section>

      <style>{`
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
