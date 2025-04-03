
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wedding-maroon text-white py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-parisienne text-3xl mb-4">Mahesh & Powshya</h2>
          
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="text-xs md:text-sm opacity-90">Celebrating Our Love Journey</span>
            <Heart className="h-4 w-4 text-wedding-gold fill-wedding-gold animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="text-xs md:text-sm opacity-90">#PoshPelli</span>
            <Heart className="h-4 w-4 text-wedding-gold fill-wedding-gold animate-pulse" />
          </div>
          
          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
              <a href="#events" className="hover:text-wedding-gold transition-colors">Events</a>
              <a href="#location" className="hover:text-wedding-gold transition-colors">Venue</a>
              <a href="#gallery" className="hover:text-wedding-gold transition-colors">Gallery</a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm opacity-80">For any queries, please contact:</p>
            <p className="text-sm opacity-80 mb-4">
              <a href="tel:+9866261041" className="hover:text-wedding-gold">+91 9866261041</a> | 
              <a href="tel:+9866261041" className="hover:text-wedding-gold">+91 9014844979</a> | 
              <a href="tel:+9866261041" className="hover:text-wedding-gold">+91 9392449346</a> 
            </p>
          </div>
          
          <div className="text-xs opacity-70 mt-4">
            <p>&copy; {new Date().getFullYear()} #PoshPelli. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-2 bg-wedding-gold"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/telugu-pattern.png')] bg-repeat-x bg-contain opacity-10"></div>
    </footer>
  );
};

export default Footer;
