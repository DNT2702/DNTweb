import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Compass, Map, PenTool, Code2, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Discovery',
    description: 'We dive deep into understanding your business goals, target audience, and competitive landscape.',
    color: '#2196F3',
  },
  {
    icon: Map,
    title: 'Planning',
    description: 'Creating detailed wireframes, sitemaps, and project roadmaps to ensure a clear path forward.',
    color: '#1E88E5',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Crafting stunning visuals and intuitive user interfaces that align with your brand identity.',
    color: '#1976D2',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Building your project with clean, scalable code using the latest technologies and best practices.',
    color: '#1565C0',
  },
  {
    icon: CheckCircle,
    title: 'Testing',
    description: 'Rigorous quality assurance across all devices and browsers to ensure a flawless experience.',
    color: '#0D47A1',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploying your project to the world with ongoing support and optimization for continued success.',
    color: '#C62828',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="process" className="section" ref={sectionRef} style={{ background: 'var(--navy)' }}>
      <div
        className="floating-shape"
        style={{ width: 400, height: 400, top: '30%', left: -200, background: 'var(--blue-primary)' }}
      />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
            style={{ justifyContent: 'center' }}
          >
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            How We{' '}
            <span style={{ background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Work
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '16px auto 0' }}
          >
            A proven methodology that delivers exceptional results every time
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 2,
              height: '100%',
              background: 'linear-gradient(180deg, var(--blue-primary) 0%, var(--red-primary) 100%)',
              opacity: 0.2,
            }}
            className="timeline-center-line"
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: 24,
                  marginBottom: i < steps.length - 1 ? 48 : 0,
                  alignItems: 'center',
                }}
                className="timeline-item"
              >
                {/* Left Content */}
                <div
                  style={{
                    textAlign: isLeft ? 'right' : 'left',
                    order: isLeft ? 1 : 3,
                  }}
                  className={isLeft ? 'timeline-content-left' : 'timeline-content-right'}
                >
                  <div
                    className="glass-card"
                    style={{
                      padding: 28,
                      display: 'inline-block',
                      textAlign: 'left',
                      maxWidth: 360,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${step.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 16,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <step.icon size={22} style={{ color: step.color }} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: step.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                      Step {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 style={{
                      fontSize: 20, fontWeight: 600, color: 'var(--white)',
                      fontFamily: 'var(--font-heading)', marginBottom: 8,
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--white-50)', lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div style={{ order: 2, display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12, type: 'spring' }}
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: step.color,
                      border: '3px solid var(--navy)',
                      boxShadow: `0 0 20px ${step.color}50`,
                      position: 'relative',
                      zIndex: 2,
                    }}
                  />
                </div>

                {/* Empty Side */}
                <div style={{ order: isLeft ? 3 : 1 }} className={isLeft ? 'timeline-content-right' : 'timeline-content-left'} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-center-line {
            left: 20px !important;
          }
          .timeline-item {
            grid-template-columns: auto 1fr !important;
            gap: 16px !important;
          }
          .timeline-item > div:nth-child(1),
          .timeline-item > div:nth-child(3) {
            order: unset !important;
          }
          .timeline-content-left,
          .timeline-content-right {
            text-align: left !important;
          }
          .timeline-item > div:last-child:empty,
          .timeline-item > div:first-child:empty {
            display: none !important;
          }
          .timeline-item > div[style*="order: 2"] {
            order: 1 !important;
          }
          .timeline-content-left .glass-card,
          .timeline-content-right .glass-card {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
