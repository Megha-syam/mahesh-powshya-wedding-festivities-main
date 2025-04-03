
import React from 'react';
import HeroSection from '@/components/HeroSection';
import GreetingSection from '@/components/GreetingSection';
import AboutCoupleSection from '@/components/AboutCoupleSection';
import EventsSection from '@/components/EventsSection';
import LocationSection from '@/components/LocationSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GreetingSection />
      <AboutCoupleSection />
      <EventsSection />
      <LocationSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
