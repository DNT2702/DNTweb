import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const taglines = ["Web Design", "Web Development", "Branding", "UI/UX Design", "Digital Growth"];

function MagneticButton({ children, className, onClick, style }: any) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      ref.current.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `translate3d(0px, 0px, 0)`;
      ref.current.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
  };

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.style.transition = 'none';
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default function Hero({ scrollToSection }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tagIndex, setTagIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex(prev => (prev + 1) % taglines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Floating particles
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--navy-deep)',
      }}
    >
      {/* Dynamic Mesh Background */}
      <div className="grid-overlay" />

      {/* Floating Animated Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1.1, 1],
          x: [0, 100, -50, 80, 0],
          y: [0, -80, 120, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.3) 0%, transparent 60%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{
          scale: [1, 0.85, 1.15, 0.95, 1],
          x: [0, -120, 80, -60, 0],
          y: [0, 100, -70, 90, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(198, 40, 40, 0.18) 0%, transparent 60%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, -15, 0],
            opacity: [0.08, 0.3, 0.08],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'var(--blue-light)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="container"
      >
        <div style={{ maxWidth: 900, paddingTop: 80 }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-label"
          >
            Digital Agency Studio
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(56px, 10vw, 120px)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: 'var(--white)',
              marginBottom: 16,
              fontFamily: 'var(--font-heading)',
            }}
          >
            DNT<span style={{
              background: 'var(--gradient-blue)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Web</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: 'clamp(18px, 3vw, 26px)',
              color: 'var(--white-90)',
              lineHeight: 1.3,
              fontWeight: 500,
              maxWidth: 720,
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            Building Premium Digital Experiences For Modern Businesses.
          </motion.p>

          {/* Dynamic Rotating Taglines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              height: 48,
              marginBottom: 48,
            }}
          >
            <span style={{ fontSize: 16, color: 'var(--white-50)', fontWeight: 500 }}>
              Specializing in
            </span>
            <div style={{ position: 'relative', overflow: 'hidden', height: '100%', flex: 1 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={tagIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--blue-light)',
                    fontFamily: 'var(--font-heading)',
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  {taglines[tagIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <MagneticButton className="btn-primary" onClick={() => scrollToSection('featured-project')}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                View Projects <ArrowRight size={18} />
              </span>
            </MagneticButton>
            <MagneticButton className="btn-outline" onClick={() => scrollToSection('contact')}>
              <span>Start Your Project</span>
            </MagneticButton>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              display: 'flex',
              gap: 48,
              marginTop: 64,
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '25+', label: 'Happy Clients' },
              { value: '3+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="stat-number" style={{ fontSize: 36 }}>{stat.value}</div>
                <div style={{ color: 'var(--white-30)', fontSize: 13, marginTop: 4, fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 11, color: 'var(--white-30)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 18,
            height: 28,
            borderRadius: 9,
            border: '1.5px solid var(--white-20)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: 5,
          }}
        >
          <div style={{ width: 3, height: 6, borderRadius: 2, background: 'var(--blue-bright)' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}
