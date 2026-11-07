import Logo from './Logo';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <Logo iconSize={48} className="items-start text-left" />

          <div className="flex gap-8">
            <a 
              href="https://x.com/cuttingrooms18?t=WMvSkbv32Xn2JMoJb558CA&s=09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.instagram.com/toptenbarbers?igsh=MWcwMmx6Y2djdW8xOA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          <p className="text-white/20 text-xs uppercase tracking-widest">
            © 2024 Topten Barber Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
