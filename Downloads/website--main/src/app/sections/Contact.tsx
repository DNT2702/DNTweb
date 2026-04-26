import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Contact() {
  const contactItems = [
    { icon: MapPin, label: 'Address', value: 'Sri Sai Nivas, Opp: Hindu paper office, 50-43-/4/3, TPT Colony, Seethammadara, Visakhapatnam, AP 530013' },
    { icon: Phone, label: 'Phone', value: '+91 72071 15599' },
    { icon: Mail, label: 'Email', value: 'info@drarunhomeopathy.com' },
    { icon: Clock, label: 'Clinic Timings', value: 'Mon-Sat: 9:00 AM - 8:00 PM\nSunday: Closed' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <div className="inline-flex items-center bg-[#1B3A6B]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase">Get in Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Lora' }}>
            Visit Our <span className="text-[#1B3A6B]">Clinic</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp} className="space-y-5">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#F0F4FA] rounded-xl p-5 border border-[#1B3A6B]/5">
                <div className="w-10 h-10 rounded-xl bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] text-sm mb-0.5">{item.label}</h4>
                  <p className="text-sm text-[#5A6077] whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Booking Section */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} id="booking">
            <div className="bg-[#1B3A6B] rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Lora' }}>Book Appointment</h3>
              <BookingForm dark={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
