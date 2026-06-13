import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Smartphone, Palette, Zap, Search, Monitor, Brush,
  TrendingUp, Star,
} from 'lucide-react';

const points = [
  { icon: Smartphone, title: 'Mobile First Design', description: 'Every project starts with mobile — ensuring flawless experiences on all devices.' },
  { icon: Palette, title: 'Modern UI/UX', description: 'Clean, intuitive interfaces following the latest design trends and best practices.' },
  { icon: Zap, title: 'Fast Performance', description: 'Optimized for speed with sub-second load times and smooth interactions.' },
  { icon: Search, title: 'SEO Friendly', description: 'Built-in SEO best practices to maximize your organic search visibility.' },
  { icon: Monitor, title: 'Responsive Development', description: 'Pixel-perfect across every screen size, from smartphones to ultrawide monitors.' },
  { icon: Brush, title: 'Professional Branding', description: 'Cohesive visual identity that communicates trust and professionalism.' },
  { icon: TrendingUp, title: 'Future Scalability', description: 'Architecture designed to grow with your business needs and ambitions.' },
  { icon: Star, title: 'Premium User Experience', description: 'Every micro-interaction is crafted to delight and engage your audience.' },
];

const stats = [
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Responsive Designs' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="stat-number">
      {count}{suffix}
    </span>
  );
}

function PointCard({ point, i, isInView }: { point: any; i: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
      className="interactive-glow-card"
      style={{
        padding: 28,
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            width: 44,
            height: 44,
            minWidth: 44,
            borderRadius: 12,
            background: 'linear-gradient(135deg, rgba(13, 71, 161, 0.15) 0%, rgba(198, 40, 40, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(13, 71, 161, 0.15)',
          }}
        >
          <point.icon size={20} style={{ color: 'var(--blue-light)' }} />
        </div>
        <div>
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--white)',
              marginBottom: 4,
              fontFamily: 'var(--font-heading)',
            }}
          >
            {point.title}
          </h3>
          <p style={{ fontSize: 14, color: 'var(--white-50)', lineHeight: 1.6 }}>
            {point.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="why-choose" className="section" ref={sectionRef} style={{ background: 'var(--navy)' }}>
      <div
        className="floating-shape"
        style={{ width: 500, height: 500, top: '20%', right: -200, background: 'var(--blue-primary)' }}
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
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Why{' '}
            <span style={{ background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              DNTWeb
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '16px auto 0' }}
          >
            We don't just build websites. We craft digital experiences that drive growth.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 24,
            marginBottom: 64,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: 32,
                textAlign: 'center',
              }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={statsInView} />
              <div style={{ fontSize: 14, color: 'var(--white-50)', marginTop: 8, fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Points Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {points.map((point, i) => (
            <PointCard key={i} point={point} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
