import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LogoProps {
  className?: string;
  iconSize?: number;
  showSubtext?: boolean;
}

export default function Logo({ className, iconSize = 40, showSubtext = true }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      {/* Straight Razor SVG Icon */}
      <svg 
        width={iconSize} 
        height={iconSize * 0.6} 
        viewBox="0 0 120 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mb-2"
      >
        <g transform="rotate(-15 60 40)">
          {/* Blade */}
          <path 
            d="M10 45 L80 30 L82 42 L12 57 Z" 
            fill="#D4AF37" 
            className="drop-shadow-sm"
          />
          {/* Handle */}
          <path 
            d="M80 30 C88 25 98 32 95 42 L80 85 C77 92 68 90 65 85 L80 30" 
            fill="#D4AF37" 
          />
          {/* Pivot point */}
          <circle cx="80" cy="35" r="3" fill="#121212" />
        </g>
      </svg>

      <div className="flex flex-col items-center">
        <span className="text-white font-black text-2xl md:text-3xl tracking-[0.2em] leading-none uppercase">
          Topten
        </span>
        
        {showSubtext && (
          <div className="flex items-center w-full mt-1">
            <div className="h-[1px] flex-grow bg-gold opacity-50"></div>
            <span className="text-gold text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase px-3 whitespace-nowrap">
              Barber Shop
            </span>
            <div className="h-[1px] flex-grow bg-gold opacity-50"></div>
          </div>
        )}
      </div>
    </div>
  );
}
