import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Arun Kumar',
    role: 'Founder, Dr Arun Homeopathy',
    text: 'DNTWeb transformed our online presence completely. The website they built not only looks stunning but has significantly increased our patient appointments. Their attention to detail and understanding of healthcare branding is exceptional.',
    rating: 5,
  },
  {
    name: 'Rahul Sharma',
    role: 'CEO, TechStart Solutions',
    text: 'Working with DNTWeb was a game-changer for our startup. They delivered a premium website that perfectly captures our brand essence. The modern design and smooth animations have impressed every investor we\'ve presented to.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Founder, Artisan Collective',
    text: 'The portfolio website DNTWeb created for us is absolutely gorgeous. It showcases our work beautifully and has led to a 40% increase in client inquiries. Their design sensibility is truly world-class.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Director, Singh Enterprises',
    text: 'DNTWeb delivered our corporate website ahead of schedule and beyond our expectations. The SEO optimization they implemented has already put us on the first page of Google for our key search terms.',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section" ref={sectionRef} style={{ background: 'var(--navy)' }}>
      <div
        className="floating-shape floating-shape-red"
        style={{ width: 450, height: 450, bottom: -100, right: -150 }}
      />
      <div
        className="floating-shape floating-shape-blue"
        style={{ width: 400, height: 400, top: -100, left: -150 }}
      />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
            style={{ justifyContent: 'center' }}
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            What Our Clients{' '}
            <span style={{ background: 'var(--gradient-red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Say
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: 720,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            className="glass-card-featured"
            style={{
              padding: '48px 40px',
              textAlign: 'center',
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Quote size={36} style={{ color: 'var(--blue-light)', opacity: 0.5, marginBottom: 24 }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 20 }}>
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <p style={{
                  fontSize: 18,
                  color: 'var(--white-70)',
                  lineHeight: 1.8,
                  marginBottom: 28,
                  fontStyle: 'italic',
                  letterSpacing: '-0.005em',
                }}>
                  "{testimonials[current].text}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: current % 2 === 1 ? 'var(--gradient-red)' : 'var(--gradient-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-heading)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--white)',
                    }}
                  >
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--white)' }}>
                      {testimonials[current].name}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--white-60)' }}>
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginTop: 32,
            alignItems: 'center',
          }}>
            <button
              onClick={prev}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'var(--white-05)',
                border: '1px solid var(--white-10)',
                color: 'var(--white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--white-10)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--white-05)'; }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: current === i ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: current === i ? 'var(--gradient-signature)' : 'var(--white-15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s var(--ease-out-expo)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'var(--white-05)',
                border: '1px solid var(--white-10)',
                color: 'var(--white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--white-10)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--white-05)'; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
