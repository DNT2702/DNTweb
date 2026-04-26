import { Link, useLocation, useNavigate } from 'react-router';
import logoImg from '../../assets/logo-transparent.png';
import arhLogo from '../../assets/arh-logo-transparent.png';

export default function Footer({ scrollTo, openBookingModal }: { scrollTo: (id: string) => void, openBookingModal: () => void }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (pathname !== '/') {
      navigate('/#contact');
    } else {
      scrollTo('contact');
    }
  };

  return (
    <footer className="bg-[#1A1A2E] text-white">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/60">
            {['Our Mission', 'Awards', 'Experience', 'Success Story'].map(item => (
              <span key={item} className="hover:text-white cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-5 bg-white/95 p-3.5 rounded-2xl w-fit shadow-lg">
              <img src={logoImg} alt="Dr. Arun Homeopathy" className="h-11 w-auto object-contain" />
              <div className="w-[1px] h-8 bg-[#1B3A6B]/20" />
              <img src={arhLogo} alt="ARH Logo" className="h-9 w-auto object-contain mt-1" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Trusted homeopathy care for a healthier tomorrow. Choose Homeopathy — Effective · Gentle · Safe.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Useful Links</h4>
            <div className="space-y-2.5">
              <Link to="/" className="block text-white/50 hover:text-white text-sm transition-colors">Home</Link>
              <Link to="/about" className="block text-white/50 hover:text-white text-sm transition-colors">About Us</Link>
              <Link to="/services" className="block text-white/50 hover:text-white text-sm transition-colors">Services</Link>
              <Link to="/blog" className="block text-white/50 hover:text-white text-sm transition-colors">Blog</Link>
              <button onClick={handleContactClick} className="block text-white/50 hover:text-white text-sm transition-colors">Contact</button>
              <button onClick={openBookingModal} className="block text-[#C62828] font-bold hover:text-white text-sm transition-colors">Book Appointment</button>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Working Time</h4>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex justify-between"><span>Mon – Fri</span><span className="text-white/70">9:00 AM – 8:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="text-white/70">10:00 AM – 6:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-[#C62828]">Closed</span></div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Our Address</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Sri Sai Nivas, Opp: Hindu paper office, 50-43-/4/3, TPT Colony, Balayya Sastri Layout, Seethammadara, Visakhapatnam, AP 530013
            </p>
            <p className="text-white/70 font-semibold text-sm mt-3">📞 +91 72071 15599</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">© 2026 Dr. Arun Homeopathy. All rights reserved.</p>
          <div className="flex gap-6 text-white/40 text-xs">
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
