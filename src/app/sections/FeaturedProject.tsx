import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import {
  Heart, Smartphone, Search, Video,
  Calendar, MonitorSmartphone, ArrowRight,
} from 'lucide-react';

const highlights = [
  { icon: Heart, label: 'Professional Healthcare Branding' },
  { icon: MonitorSmartphone, label: 'Responsive Design' },
  { icon: Search, label: 'SEO-Oriented Structure' },
  { icon: Video, label: 'Online Consultation Features' },
  { icon: Calendar, label: 'Appointment Booking' },
  { icon: Smartphone, label: 'Mobile Optimization' },
];

function Interactive3DMonitor() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          width: '90%',
          maxWidth: 680,
          aspectRatio: '16/10',
          position: 'relative',
        }}
        className="glass-card"
      >
        {/* Glowing border inside perspective */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 16,
            border: '2.5px solid rgba(255, 255, 255, 0.08)',
            transform: 'translateZ(10px)',
            pointerEvents: 'none',
          }}
        />

        {/* Laptop Screen Simulator */}
        <div
          style={{
            position: 'absolute',
            inset: 12,
            borderRadius: 8,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #0A2463 0%, #0D47A1 50%, #1565C0 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateZ(25px)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Virtual Browser Top Bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 24,
            background: 'rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            gap: 6,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
            <div style={{
              flex: 1,
              height: 14,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.08)',
              margin: '0 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 8,
              color: 'rgba(255,255,255,0.3)',
            }}>
              drarunhomeopathy.com
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: 24, transform: 'translateZ(45px)' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', margin: '0 auto 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}>
              <Heart size={28} style={{ color: 'var(--white)' }} />
            </div>
            <h4 style={{ fontSize: 24, fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-heading)' }}>
              Dr Arun Homeopathy
            </h4>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 8, maxWidth: 300 }}>
              Personalized healthcare built on trust, empathy, and 15+ years of excellence.
            </p>
            <div style={{
              marginTop: 20, padding: '10px 24px', borderRadius: 30,
              background: 'var(--gradient-blue)', fontSize: 12, color: 'var(--white)',
              display: 'inline-block', fontWeight: 600, boxShadow: '0 10px 25px rgba(13,71,161,0.4)',
            }}>
              Book Appointment
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Exploded3DLayerMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
      }}
    >
      {/* Base Layer (Grid background) */}
      <motion.div
        animate={hovered ? { rotateX: 60, rotateZ: -25, scale: 0.9 } : { rotateX: 45, rotateZ: -15, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '80%',
          maxWidth: 500,
          aspectRatio: '16/10',
          background: 'rgba(14,14,17,0.4)',
          border: '1px solid var(--white-10)',
          borderRadius: 16,
          boxShadow: '0 30px 100px rgba(0,0,0,0.6)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="grid-overlay" style={{ borderRadius: 16 }} />
        <span style={{ fontSize: 12, color: 'var(--white-30)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          3D Perspective Canvas
        </span>

        {/* Floating Mobile mockup (Layer 1) */}
        <motion.div
          animate={hovered ? { translateZ: 140, x: -80, y: -20 } : { translateZ: 60, x: -20, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            width: 110,
            height: 190,
            borderRadius: 16,
            border: '2px solid rgba(255,255,255,0.2)',
            background: 'linear-gradient(180deg, #1B2838 0%, #0D1B2A 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div style={{ width: 32, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.3)', margin: '0 auto' }} />
          <div style={{ flex: 1, borderRadius: 8, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Smartphone size={24} style={{ color: 'rgba(255,255,255,0.3)' }} />
          </div>
          <div style={{ height: 10, borderRadius: 3, background: 'var(--blue-primary)', width: '60%', margin: '0 auto' }} />
        </motion.div>

        {/* Floating Appointment Booking Slot (Layer 2) */}
        <motion.div
          animate={hovered ? { translateZ: 200, x: 80, y: -50 } : { translateZ: 100, x: 40, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            width: 140,
            padding: 16,
            borderRadius: 12,
            background: 'rgba(24, 24, 28, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <Calendar size={14} style={{ color: 'var(--blue-light)' }} />
            <div style={{ fontSize: 9, fontWeight: 600, color: 'var(--white)', letterSpacing: '0.05em' }}>SCHEDULE NOW</div>
          </div>
          <div style={{ height: 6, borderRadius: 2, background: 'rgba(255,255,255,0.1)', width: '80%', marginBottom: 6 }} />
          <div style={{ height: 6, borderRadius: 2, background: 'rgba(255,255,255,0.1)', width: '60%' }} />
        </motion.div>

        {/* Floating Treatment Specialties (Layer 3) */}
        <motion.div
          animate={hovered ? { translateZ: 100, x: 60, y: 70 } : { translateZ: 30, x: 20, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            width: 160,
            padding: 12,
            borderRadius: 10,
            background: 'var(--gradient-blue)',
            boxShadow: '0 20px 40px rgba(13,71,161,0.4)',
            color: 'var(--white)',
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700 }}>Online Consultation</div>
          <div style={{ fontSize: 8, opacity: 0.7, marginTop: 4 }}>Access top homeopathic care from anywhere</div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function FeaturedProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Calculate translation of the horizontal track
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      id="featured-project"
      style={{
        height: '350vh', // Sets vertical scroll footprint for horizontal motion
        position: 'relative',
        background: 'var(--navy-deep)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Atmospheric depth */}
        <div className="floating-shape floating-shape-blue" style={{ width: 600, height: 600, top: '-15%', left: '5%' }} />
        <div className="floating-shape floating-shape-red" style={{ width: 500, height: 500, bottom: '-15%', right: '10%' }} />

        <motion.div
          style={{
            x: xTranslate,
            display: 'flex',
            gap: 96,
            paddingLeft: '10vw',
            width: '400vw',
          }}
        >
          {/* Card 1: Title Card */}
          <div
            style={{
              width: '80vw',
              height: '80vh',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className="section-label">Featured Case Study</div>
            <h2
              style={{
                fontSize: 'clamp(40px, 6vw, 76px)',
                fontWeight: 800,
                color: 'var(--white)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: 20,
              }}
            >
              Dr Arun<br />
              <span style={{
                background: 'var(--gradient-blue)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Homeopathy
              </span>
            </h2>
            <p style={{
              fontSize: 18,
              color: 'var(--white-50)',
              lineHeight: 1.6,
              maxWidth: 480,
              marginBottom: 40,
            }}>
              A premium, trust-building healthcare website that elevates digital identity,
              automates booking flows, and delivers a superior patient experience.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--white-30)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Swipe / Scroll to explore
              </span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={20} style={{ color: 'var(--white-30)' }} />
              </motion.div>
            </div>
          </div>

          {/* Card 2: Interactive 3D Mockup */}
          <div
            style={{
              width: '80vw',
              height: '80vh',
              flexShrink: 0,
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="showcase-grid"
          >
            <Interactive3DMonitor />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                01 / INTERACTIVE WORK
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Digital Healthcare Branding
              </h3>
              <p style={{ fontSize: 15, color: 'var(--white-50)', lineHeight: 1.7, marginBottom: 24 }}>
                We crafted a professional healthcare brand presence that projects absolute trust and
                credibility. Empathic copy combined with warm, secure brand colors establishes immediate trust.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Trust Building', 'Aesthetic', 'Responsive UI'].map((tag, i) => (
                  <span key={i} style={{ padding: '6px 16px', borderRadius: 20, background: 'var(--white-05)', fontSize: 12, border: '1px solid var(--white-10)', color: 'var(--white-70)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: 3D Exploded Layer View */}
          <div
            style={{
              width: '80vw',
              height: '80vh',
              flexShrink: 0,
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="showcase-grid"
          >
            <Exploded3DLayerMockup />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--red-glow)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                02 / EXPLODED LAYER VIEW
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Multi-Layered Architecture
              </h3>
              <p style={{ fontSize: 15, color: 'var(--white-50)', lineHeight: 1.7, marginBottom: 24 }}>
                Every component is modular, responsive, and performance-optimized. High-converting appointment
                scheduling modules reside alongside patients portal pages in a fluid, unified layout.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Mobile First', 'Appointment Scheduler', 'Z-Depth Layers'].map((tag, i) => (
                  <span key={i} style={{ padding: '6px 16px', borderRadius: 20, background: 'var(--white-05)', fontSize: 12, border: '1px solid var(--white-10)', color: 'var(--white-70)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Highlights / Summary */}
          <div
            style={{
              width: '80vw',
              height: '80vh',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              03 / PERFORMANCE & STATS
            </div>
            <h3 style={{ fontSize: 36, fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-heading)', marginBottom: 32 }}>
              Project Highlights
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
              maxWidth: 720,
            }}>
              {highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 20px',
                    borderRadius: 12,
                    background: 'var(--white-05)',
                    border: '1px solid var(--white-10)',
                    transition: 'all 0.4s var(--ease-out-expo)',
                  }}
                >
                  <item.icon size={18} style={{ color: i % 2 === 1 ? 'var(--red-glow)' : 'var(--blue-light)', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--white-70)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll progress indicator */}
        <div
          style={{
            position: 'absolute',
            left: '10vw',
            right: '10vw',
            bottom: 40,
            height: 2,
            borderRadius: 2,
            background: 'var(--white-10)',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              width: progressWidth,
              height: '100%',
              background: 'var(--gradient-signature)',
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
