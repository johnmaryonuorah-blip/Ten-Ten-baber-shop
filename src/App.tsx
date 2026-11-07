import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-charcoal selection:bg-gold selection:text-white"
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
