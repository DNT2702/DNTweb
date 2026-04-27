import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import BookingModal from './components/BookingModal';
import Chatbot from './components/Chatbot';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhyHomeopathyPage from './pages/WhyHomeopathyPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const pos = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: pos - offset, behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
}

function MainLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    // If not on home page, navigation will handle via hash in ScrollToTop
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="bg-[#F0F4FA] min-h-screen">
      <ScrollToTop />
      <Navbar scrollTo={scrollTo} openBookingModal={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage scrollTo={scrollTo} openBookingModal={openBookingModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-homeopathy" element={<WhyHomeopathyPage openBookingModal={openBookingModal} />} />
          <Route path="/services" element={<ServicesPage openBookingModal={openBookingModal} />} />
          <Route path="/testimonials" element={<TestimonialsPage openBookingModal={openBookingModal} />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>

      <Footer scrollTo={scrollTo} openBookingModal={openBookingModal} />

      {/* Chatbot */}
      <Chatbot />

      {/* Floating WhatsApp */}
      <motion.a href="https://wa.me/917207115599" target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors z-40">
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Floating Book */}
      <motion.button onClick={openBookingModal}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-[#1B3A6B] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#2A4F8A] transition-colors z-40 font-semibold text-sm">
        Book Now
      </motion.button>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 w-11 h-11 rounded-full bg-[#C62828] text-white flex items-center justify-center shadow-lg hover:bg-[#E53935] transition-colors z-40">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MainLayout />
    </BrowserRouter>
  );
}