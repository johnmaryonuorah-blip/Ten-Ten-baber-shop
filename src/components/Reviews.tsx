import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "James Wilson",
    rating: 5,
    text: "Best fade in Liverpool. The attention to detail is unmatched. Highly recommend Topten for anyone looking for a premium experience.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "Great atmosphere and even better service. The booking system is so easy to use. I'll definitely be coming back.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "David Roberts",
    rating: 5,
    text: "Top tier barbers. They really know how to handle different hair types. The shop is clean and modern.",
    date: "3 weeks ago"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Client Voices<span className="text-gold">.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md">
              Don't just take our word for it. Here's what our community has to say about their Topten experience.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-6 py-3 border border-white/10">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="font-bold">4.9/5 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 relative"
            >
              <Quote className="absolute top-6 right-8 text-white/5 w-16 h-16" />
              <div className="flex text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-lg italic mb-8 relative z-10">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase tracking-widest text-sm">{review.name}</span>
                <span className="text-white/30 text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
