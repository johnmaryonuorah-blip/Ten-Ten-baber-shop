import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              Visit Us<span className="text-gold">.</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Location</h4>
                  <p className="text-white/60">10 Greenbank Rd, Liverpool, L18 1HN</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Call Us</h4>
                  <a href="tel:+441517929715" className="text-white/60 hover:text-gold transition-colors">+44 151 792 9715</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Clock className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Opening Hours</h4>
                  <ul className="text-white/60 space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Sat</span> <span>9:00 - 19:00</span></li>
                    <li className="flex justify-between w-48"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=10+Greenbank+Rd,+Liverpool,+L18+1HN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="h-[500px] w-full border border-white/10 grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.644153860541!2d-2.929562723381621!3d53.385419972304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b204646700001%3A0x8f3c8d3e2d3e2d3e!2s10%20Greenbank%20Rd%2C%20Liverpool%20L18%201HN!5e0!3m2!1sen!2suk!4v1708440000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Topten Barber Shop Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
