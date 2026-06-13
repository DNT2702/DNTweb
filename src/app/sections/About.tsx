import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Target, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Premium Design',
    description: 'Award-worthy designs that captivate audiences and elevate your brand above the competition.',
  },
  {
    icon: Target,
    title: 'Strategic Approach',
    description: 'Every pixel is purposeful. We align design decisions with your business goals for maximum impact.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast websites optimized for speed, SEO, and conversion that grow with your business.',
  },
  {
    icon: Globe,
    title: 'Digital Growth',
    description: 'End-to-end digital solutions from branding to development that drive measurable results.',
  },
];

function AboutCard({ feature, i, isInView }: { feature: any; i: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isRed = i % 2 === 1;

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
      transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
      className="interactive-glow-card"
      style={{ padding: 32 }}
    >
      {/* Decorative index numeral */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          right: 20,
          fontFamily: 'var(--font-heading)',
          fontSize: 52,
          fontWeight: 700,
          color: 'var(--white-05)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          pointerEvents: 'none',
        }}
      >
        {String(i + 1).padStart(2, '0')}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: isRed
              ? 'linear-gradient(135deg, rgba(255,82,82,0.16) 0%, rgba(255,82,82,0.04) 100%)'
              : 'linear-gradient(135deg, rgba(33,150,243,0.16) 0%, rgba(33,150,243,0.04) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            border: isRed ? '1px solid rgba(255,82,82,0.22)' : '1px solid rgba(33,150,243,0.22)',
          }}
        >
          <feature.icon size={24} style={{ color: isRed ? 'var(--red-glow)' : 'var(--blue-light)' }} />
        </div>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: 'var(--white)',
            marginBottom: 8,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.01em',
          }}
        >
          {feature.title}
        </h3>
        <p style={{ fontSize: 15, color: 'var(--white-60)', lineHeight: 1.7 }}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" ref={sectionRef} style={{ background: 'var(--navy)' }}>
      {/* Decorative shape */}
      <div
        className="floating-shape"
        style={{
          width: 500,
          height: 500,
          top: -100,
          right: -200,
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'center' }}>
          {/* Text */}
          <div style={{ maxWidth: 700 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              About DNTWeb
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Crafting Digital{' '}
              <span style={{ background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Excellence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 17,
                color: 'var(--white-50)',
                lineHeight: 1.8,
                marginTop: 24,
                maxWidth: 580,
              }}
            >
              DNTWeb is a premium digital agency that helps businesses create exceptional digital experiences.
              Through modern design, cutting-edge development, strategic branding, and data-driven growth strategies,
              we transform your online presence into a powerful business asset.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 17,
                color: 'var(--white-50)',
                lineHeight: 1.8,
                marginTop: 16,
                maxWidth: 580,
              }}
            >
              We believe every business deserves a world-class digital presence. Our team combines creative
              vision with technical excellence to deliver solutions that not only look stunning but also
              drive real, measurable results.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {features.map((feature, i) => (
              <AboutCard key={i} feature={feature} i={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
