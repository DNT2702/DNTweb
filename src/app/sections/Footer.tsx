import { motion } from 'motion/react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Website Design', id: 'services' },
      { label: 'Web Development', id: 'services' },
      { label: 'UI/UX Design', id: 'services' },
      { label: 'Branding', id: 'services' },
      { label: 'SEO Optimization', id: 'services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', id: 'about' },
      { label: 'Our Work', id: 'featured-project' },
      { label: 'Process', id: 'process' },
      { label: 'Testimonials', id: 'testimonials' },
      { label: 'Contact', id: 'contact' },
    ],
  },
];

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer
      style={{
        background: 'var(--navy-deep)',
        borderTop: '1px solid var(--white-05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient accent line */}
      <div style={{
        height: 2,
        background: 'var(--gradient-signature)',
        opacity: 0.5,
      }} />

      <div className="container" style={{ padding: '80px 24px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            marginBottom: 64,
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--font-heading)',
                fontSize: 32,
                fontWeight: 700,
                color: 'var(--white)',
                letterSpacing: '-0.03em',
                marginBottom: 16,
              }}
            >
              <span style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--gradient-signature)',
                boxShadow: '0 0 12px rgba(33,150,243,0.5)',
              }} />
              DNT<span style={{ color: 'var(--blue-bright)' }}>Web</span>
            </div>
            <p style={{
              fontSize: 15,
              color: 'var(--white-60)',
              lineHeight: 1.7,
              marginBottom: 24,
            }}>
              Design • Development • Branding • Digital Growth
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="mailto:hello@dntweb.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  color: 'var(--white-50)',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-50)')}
              >
                <Mail size={16} />
                hello@dntweb.com
              </a>
              <a
                href="tel:+919876543210"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  color: 'var(--white-50)',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-50)')}
              >
                <Phone size={16} />
                +91 98765 43210
              </a>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: 'var(--white-50)',
                fontSize: 14,
              }}>
                <MapPin size={16} style={{ flexShrink: 0 }} />
                India
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--white)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: 20,
                fontFamily: 'var(--font-heading)',
              }}>
                {col.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((link, j) => (
                  <button
                    key={j}
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--white-50)',
                      fontSize: 14,
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      fontFamily: 'var(--font-body)',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-50)')}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Column */}
          <div>
            <h4 style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--white)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: 20,
              fontFamily: 'var(--font-heading)',
            }}>
              Start a Project
            </h4>
            <p style={{
              fontSize: 14,
              color: 'var(--white-60)',
              lineHeight: 1.7,
              marginBottom: 20,
            }}>
              Ready to elevate your digital presence? Let's talk.
            </p>
            <button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              style={{ padding: '12px 28px', fontSize: 13 }}
            >
              <span>Get Started</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 24,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--white-30)' }}>
            © {new Date().getFullYear()} DNTWeb. All rights reserved.
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'var(--white-05)',
              border: '1px solid var(--white-10)',
              color: 'var(--white)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--white-10)';
              e.currentTarget.style.borderColor = 'var(--blue-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--white-05)';
              e.currentTarget.style.borderColor = 'var(--white-10)';
            }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
