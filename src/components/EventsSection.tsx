
import React from 'react';
import { Calendar } from 'lucide-react';

const EventCard = ({ 
  title, 
  date, 
  time, 
  location, 
  description, 
  imageSrc 
}: { 
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-wedding-gold/20 transition-transform duration-300 hover:scale-105">
      <div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-wedding-maroon mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-wedding-darkred mb-2">
          <Calendar className="h-5 w-5" />
          <span>{date} • {time}</span>
        </div>
        <p className="text-gray-700 font-medium mb-3">{location}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const events = [
    {
      title: "Haldi Ceremony",
      date: "April 13th, 2025",
      time: "7:00 AM",
      location: "Groom's Residence, Putlagatlagudem",
      description: "Join us for the traditional Haldi ceremony where turmeric paste is applied to the bride and groom for blessing and beautification.",
      imageSrc: "/haldi.png"
    },
    {
      title: "Wedding Ceremony",
      date: "On the night of April 16th, 2025 (Wednesday)",
      time: "At 1:24 AM (early hours of April 17th)",
      location: "Arya Vysya Wedding Hall, Akividu",
      description: "The auspicious wedding ceremony will be performed according to Telugu traditions with all rituals and customs.",
      imageSrc: "/marriage.png"
    },
    {
      title: "Reception Celebration",
      date: "April 17th, 2025",
      time: "7:00 PM onwards",
      location: "S.V.R Function Hall, Jangareddygudem",
      description: "Join us for an evening of celebration, feasting and blessings as we start our new journey together.",
      imageSrc: "/reception.png"
    }
  ];

  return (
    <section id="events" className="py-20 px-4 relative bg-wedding-cream/50">
      <div className="absolute inset-0 bg-[url('/mandala.png')] bg-repeat bg-center opacity-5 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-maroon">Wedding Events</h2>
          <div className="h- w-16 bg-wedding-gold mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">Join us for these special celebrations as we begin our journey together.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
