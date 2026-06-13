import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'featured-project' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => scrollToSection(id), 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '12px 0' : '20px 0',
          background: isScrolled ? 'rgba(5, 10, 24, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--white-05)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 28,
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            DNT<span style={{ color: 'var(--blue-bright)' }}>Web</span>
          </motion.div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNav(link.id)}
                whileHover={{ y: -2 }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--white-70)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease',
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-70)')}
              >
                {link.label}
              </motion.button>
            ))}
            <button className="btn-primary" onClick={() => handleNav('contact')} style={{ padding: '12px 28px', fontSize: 14 }}>
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Burger */}
          <button
            className="mobile-burger"
            onClick={() => setMobileOpen(true)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(5, 10, 24, 0.98)',
              backdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'none',
                border: 'none',
                color: 'var(--white)',
                cursor: 'pointer',
              }}
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNav(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 32,
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNav('contact')}
              style={{ marginTop: 16 }}
            >
              <span>Get Started</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
