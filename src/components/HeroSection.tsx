
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      {/* Background image with adjusted brightness */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/Wedding-1.jpeg')", 
          backgroundSize: "cover",
          filter: "brightness(1.0)" // Increased brightness from 0.5
        }}
      ></div>
      
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      <div className="absolute inset-0 bg-[url('/mandala.png')] bg-no-repeat bg-center opacity-10 z-0 animate-float"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
       
        {/* Highlighted invitation text with improved background */}
        <h2 className="text-wedding-gold text-2xl md:text-3xl font-bold mb-6 p-2 bg-wedding-maroon/40 rounded-lg inline-block shadow-lg">
          Kambhampati's Wedding Invitation
        </h2>
        
        <h1 className="font-parisienne text-5xl md:text-7xl lg:text-8xl text-wedding-cream mb-4 text-shadow">
          Mahesh <span className="text-wedding-gold">&</span> Powshya
        </h1>
        <div className="mb-4">
          <p className="text-wedding-cream text-xl md:text-2xl font-medium">#PoshPelli</p>
        </div>
        
        <div className="h-0.5 w-24 bg-wedding-gold mx-auto my-6"></div>
        
        <p className="text-xl md:text-2xl text-wedding-cream font-semibold mb-2">We are getting married</p>
        
        <p className="text-2xl md:text-3xl text-wedding-gold font-bold mb-8">April 16th & 17th, 2025</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <a 
            href="#events" 
            className="px-6 py-3 bg-wedding-maroon text-white rounded-lg hover:bg-wedding-darkred transition duration-300 shadow-lg"
          >
            View Events
          </a>
          <a 
            href="#location" 
            className="px-6 py-3 border-2 border-wedding-gold text-wedding-cream rounded-lg hover:bg-wedding-gold hover:text-wedding-maroon transition duration-300 shadow-lg"
          >
            Venue Location
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/telugu-pattern.png')] bg-repeat-x bg-contain"></div>
    </section>
  );
};

export default HeroSection;
