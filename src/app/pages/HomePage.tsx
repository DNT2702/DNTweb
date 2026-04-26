import Hero from '../sections/Hero';
import FeatureCards from '../sections/FeatureCards';
import About from '../sections/About';
import TickerAndMarquee from '../sections/TickerAndMarquee';
import WhyHomeopathy from '../sections/WhyHomeopathy';
import Services from '../sections/Services';
import Banners from '../sections/Banners';
import AccordionSection from '../sections/AccordionSection';
import Testimonials from '../sections/Testimonials';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

export default function HomePage({ scrollTo, openBookingModal }: { scrollTo: (id: string) => void, openBookingModal: () => void }) {
  return (
    <>
      <Hero scrollTo={scrollTo} openBookingModal={openBookingModal} />
      <FeatureCards />
      <About />
      <TickerAndMarquee />
      <WhyHomeopathy scrollTo={scrollTo} openBookingModal={openBookingModal} />
      <Services openBookingModal={openBookingModal} />
      <Banners openBookingModal={openBookingModal} />
      <AccordionSection />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
