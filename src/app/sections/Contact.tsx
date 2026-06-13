import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', phone: '', details: '' });
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div
        className="floating-shape floating-shape-blue"
        style={{ width: 500, height: 500, top: -100, left: -200 }}
      />
      <div
        className="floating-shape floating-shape-red"
        style={{ width: 400, height: 400, bottom: -100, right: -150 }}
      />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64, maxWidth: 800, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
              style={{ justifyContent: 'center' }}
            >
              Get In Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
              style={{ margin: '0 auto' }}
            >
              Let's Build Something{' '}
              <span style={{
                background: 'var(--gradient-signature)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Extraordinary
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle"
              style={{ margin: '16px auto 0' }}
            >
              Ready to transform your digital presence? Tell us about your project
              and we'll get back to you within 24 hours.
            </motion.p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card-featured"
              style={{
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--white-50)',
                      marginBottom: 8,
                      letterSpacing: '0.02em',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--white-50)',
                      marginBottom: 8,
                      letterSpacing: '0.02em',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--white-60)',
                    marginBottom: 8,
                    letterSpacing: '0.02em',
                  }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="form-input"
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--white-60)',
                    marginBottom: 8,
                    letterSpacing: '0.02em',
                  }}
                >
                  Project Details
                </label>
                <textarea
                  name="details"
                  value={formState.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="form-input"
                  rows={5}
                  style={{ resize: 'vertical', minHeight: 120 }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: 8,
                  padding: '18px 36px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {submitted ? (
                    <>Thank You! We'll Be In Touch <CheckCircle size={18} /></>
                  ) : (
                    <>Get Started <Send size={18} /></>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
