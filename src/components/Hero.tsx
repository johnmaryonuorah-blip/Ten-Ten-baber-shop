import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000"
          alt="Barber Shop Hero"
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-8 opacity-90">
            <Logo iconSize={80} showSubtext={true} className="items-start text-left" />
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tighter uppercase mb-6">
            Liverpool's <br />
            <span className="text-gold italic font-serif lowercase text-4xl md:text-6xl">finest cuts</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium mb-10 tracking-wide">
            Where Style Meets Innovation Daily.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="btn-primary text-center"
            >
              Book Appointment
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+441517929715"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-8 bottom-24 hidden lg:block">
        <span className="text-white/10 text-9xl font-black uppercase tracking-tighter vertical-text select-none" style={{ writingMode: 'vertical-rl' }}>
          EST. 2024
        </span>
      </div>
    </section>
  );
}
