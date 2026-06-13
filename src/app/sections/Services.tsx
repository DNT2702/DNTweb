import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Monitor, Code2, Palette, Brush, Search, RefreshCw,
  Briefcase, Heart, User, FileText,
} from 'lucide-react';

const services = [
  { icon: Monitor, title: 'Website Design', description: 'Stunning, conversion-focused designs that make powerful first impressions.' },
  { icon: Code2, title: 'Website Development', description: 'Clean, scalable code built with modern technologies for peak performance.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Intuitive interfaces that delight users and maximize engagement.' },
  { icon: Brush, title: 'Branding', description: 'Cohesive brand identities that resonate with your target audience.' },
  { icon: Search, title: 'SEO Optimization', description: 'Data-driven strategies to boost visibility and drive organic traffic.' },
  { icon: RefreshCw, title: 'Website Redesign', description: 'Transform outdated websites into modern, high-performing digital assets.' },
  { icon: Briefcase, title: 'Business Websites', description: 'Professional websites that establish credibility and generate leads.' },
  { icon: Heart, title: 'Healthcare Websites', description: 'HIPAA-aware, patient-focused designs for medical professionals.' },
  { icon: User, title: 'Portfolio Websites', description: 'Showcase your work with elegance and make a lasting impression.' },
  { icon: FileText, title: 'Landing Pages', description: 'High-converting landing pages optimized for maximum conversions.' },
];

function ServiceCard({ service, i, isInView }: { service: any; i: number; isInView: boolean }) {
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
      transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
      className="interactive-glow-card"
      style={{
        padding: 32,
        cursor: 'default',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: 'linear-gradient(135deg, rgba(13, 71, 161, 0.15) 0%, rgba(13, 71, 161, 0.05) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            border: '1px solid rgba(13, 71, 161, 0.2)',
          }}
        >
          <service.icon size={24} style={{ color: 'var(--blue-light)' }} />
        </div>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: 'var(--white)',
            marginBottom: 8,
            fontFamily: 'var(--font-heading)',
          }}
        >
          {service.title}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--white-50)', lineHeight: 1.7 }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section" ref={sectionRef}>
      <div
        className="floating-shape"
        style={{ width: 400, height: 400, bottom: -100, left: -100, background: 'var(--red-primary)' }}
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
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
            style={{ margin: '0 auto' }}
          >
            What We{' '}
            <span style={{ background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Build
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '16px auto 0' }}
          >
            End-to-end digital solutions designed to elevate your business
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

