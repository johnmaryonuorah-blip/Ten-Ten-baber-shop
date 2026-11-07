import { motion } from 'motion/react';

const services = [
  {
    name: "Haircut",
    price: "£12",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Skinfade Haircut",
    price: "£12",
    image: "https://images.unsplash.com/photo-1621605815841-2dddb7a69e3d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Haircut & Beard Trim with Blade",
    price: "£20",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Haircut & Beard Trim",
    price: "£18",
    image: "https://images.unsplash.com/photo-1590540179852-211d6b45e390?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Beard Trim",
    price: "£8",
    image: "https://images.unsplash.com/photo-1622286332618-f28020ee7158?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Wash",
    price: "£5",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Scissor Cut",
    price: "£11",
    image: "https://images.unsplash.com/photo-1593702295094-ada74bc4a39d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Kids",
    price: "£10",
    image: "https://images.unsplash.com/photo-1512690196252-741d2fd3f305?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Students",
    price: "£8",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Shape-Up",
    price: "£8",
    image: "https://images.unsplash.com/photo-1621605815841-2dddb7a69e3d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Pensioner",
    price: "£8",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Full Set (Haircut & Beard Trim with Blade)",
    price: "£25",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Our Services<span className="text-gold">.</span>
          </h2>
          <div className="w-24 h-1 bg-gold"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-[4/5] group cursor-pointer overflow-hidden border border-white/10"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              {/* Price & Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex flex-col gap-1">
                  <span className="text-gold font-black text-2xl tracking-tighter">
                    {service.price}
                  </span>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm leading-tight group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                </div>
                
                {/* Subtle Gold Accent Line */}
                <div className="w-0 group-hover:w-12 h-[2px] bg-gold mt-3 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
