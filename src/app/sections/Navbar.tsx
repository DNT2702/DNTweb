import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import logoImg from '../../assets/logo-transparent.png';
import arhLogo from '../../assets/arh-logo-transparent.png';

export default function Navbar({ scrollTo, openBookingModal }: { scrollTo: (id: string) => void, openBookingModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Why Homeopathy', path: '/why-homeopathy' },
    { 
      label: 'Services', 
      path: '/services',
      subLinks: [
        { label: 'Cardiovascular Care', path: '/services#cardiovascular-critical-conditions' },
        { label: 'Respiratory Diseases', path: '/services#respiratory-diseases' },
        { label: 'Headache & Migraine', path: '/services#headache-migraine' },
        { label: 'Endocrine Support', path: '/services#endocrine-metabolic-disorders' },
        { label: 'Pediatric Care', path: '/services#pediatric-care' }
      ]
    },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/#contact', id: 'contact' }
  ];

  const handleLinkClick = (link: any) => {
    setMenuOpen(false);
    if (link.id === 'contact') {
      if (pathname !== '/') {
        navigate('/#contact');
      } else {
        scrollTo('contact');
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#1B3A6B]/5' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 cursor-pointer">
            <img src={logoImg} alt="Dr. Arun Homeopathy" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              link.subLinks ? (
                <div key={link.label} className="relative group">
                  <Link to={link.path} className={`flex items-center gap-1 text-[#1A1A2E] hover:text-[#1B3A6B] transition-colors text-sm font-bold relative group ${pathname.includes(link.path) ? 'text-[#1B3A6B]' : ''}`}>
                    {link.label} <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#C62828] transition-all group-hover:w-full ${pathname.includes(link.path) ? 'w-full' : 'w-0'}`} />
                  </Link>
                  <div className="absolute top-full left-0 pt-4 -ml-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-xl border border-[#1B3A6B]/5 p-2 w-56 flex flex-col">
                      {link.subLinks.map(sub => (
                        <Link key={sub.label} to={sub.path} className="px-4 py-2.5 text-sm font-medium text-[#5A6077] hover:text-[#1B3A6B] hover:bg-[#F0F4FA] rounded-lg transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.path.startsWith('/#') ? (
                <button key={link.label} onClick={() => handleLinkClick(link)}
                  className="text-[#1A1A2E] hover:text-[#1B3A6B] transition-colors text-sm font-bold relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C62828] transition-all group-hover:w-full" />
                </button>
              ) : (
                <Link key={link.label} to={link.path} onClick={() => setMenuOpen(false)}
                  className={`text-[#1A1A2E] hover:text-[#1B3A6B] transition-colors text-sm font-bold relative group ${pathname === link.path ? 'text-[#1B3A6B]' : ''}`}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#C62828] transition-all group-hover:w-full ${pathname === link.path ? 'w-full' : 'w-0'}`} />
                </Link>
              )
            ))}
            <button onClick={openBookingModal}
              className="bg-[#1B3A6B] text-white px-5 py-2.5 rounded-full hover:bg-[#2A4F8A] transition-all shadow-md hover:shadow-lg text-sm font-bold animate-pulse-glow">
              Book Appointment
            </button>
            <img src={arhLogo} alt="ARH - Choose Homeopathy" className="h-12 w-auto object-contain" />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#1B3A6B]">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} className="lg:hidden py-4 border-t border-[#1B3A6B]/10 overflow-hidden bg-white/95 backdrop-blur-md">
              <div className="flex flex-col gap-1">
                {navLinks.map(link => (
                  link.subLinks ? (
                    <div key={link.label} className="flex flex-col">
                      <Link to={link.path} onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 text-[#1A1A2E] hover:text-[#1B3A6B] font-bold text-sm ${pathname.includes(link.path) ? 'bg-[#1B3A6B]/5 text-[#1B3A6B]' : ''}`}>
                        {link.label}
                      </Link>
                      <div className="pl-6 flex flex-col gap-1 border-l-2 border-[#1B3A6B]/10 ml-4 mb-2 mt-1">
                        {link.subLinks.map(sub => (
                          <Link key={sub.label} to={sub.path} onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-[#5A6077] hover:text-[#1B3A6B] font-medium transition-colors rounded-lg hover:bg-[#F0F4FA]">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : link.path.startsWith('/#') ? (
                    <button key={link.label} onClick={() => handleLinkClick(link)}
                      className="block w-full text-left px-4 py-3 text-[#1A1A2E] hover:text-[#1B3A6B] font-bold text-sm">
                      {link.label}
                    </button>
                  ) : (
                    <Link key={link.label} to={link.path} onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 text-[#1A1A2E] hover:text-[#1B3A6B] font-bold text-sm ${pathname === link.path ? 'bg-[#1B3A6B]/5 text-[#1B3A6B]' : ''}`}>
                      {link.label}
                    </Link>
                  )
                ))}
                <div className="px-4 py-3 mt-2">
                  <button onClick={() => {
                    setMenuOpen(false);
                    openBookingModal();
                  }}
                    className="w-full bg-[#1B3A6B] text-white px-6 py-3 rounded-full font-bold shadow-lg">Book Appointment</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

