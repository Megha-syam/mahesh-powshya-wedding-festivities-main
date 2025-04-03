import React from 'react';
import { MapPin } from 'lucide-react';

const LocationCard = ({
  title,
  address,
  mapUrl,
  directions
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-wedding-gold/20">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-wedding-maroon mb-3">
          <span className="flex items-center gap-2">
            <MapPin className="text-wedding-gold" />
            {title}
          </span>
        </h3>
        <p className="text-gray-700 mb-4">{address}</p>
        <div className="h-64 mb-4 rounded overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 italic">{directions}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-wedding-maroon text-white rounded hover:bg-wedding-darkred transition duration-300"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

const LocationSection = () => {
  const venues = [
    {
      title: "Wedding Venue",
      address: "Arya Vysya Wedding Hall, Akividu, Andhra Pradesh, 534235",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2714782774985!2d78.38272927437898!3d17.4526899014816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d3d3f3f3f3%3A0x3bcb93d3d3f3f3f3!2sArya%20Vysya%20Wedding%20Hall!5e0!3m2!1sen!2sin!4v1708452222222!5m2!1sen!2sin",
      directions: "Located in Akividu with easy accessibility."
    },
    {
      title: "Reception Venue",
      address: "SVR Function Hall, Jangareddygudem, Andhra Pradesh, 534447",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2714782774985!2d78.38272927437898!3d17.4526899014816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d3d3f3f3f3%3A0x3bcb93d3d3f3f3f3!2sSVR%20Function%20Hall!5e0!3m2!1sen!2sin!4v1708452222222!5m2!1sen!2sin",
      directions: "Located in the heart of Jangareddygudem. Ample parking space available."
    }
  ];

  return (
    <section id="location" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-maroon">Venue Locations</h2>
          <div className="h-1 w-16 bg-wedding-gold mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">Find directions to our wedding and reception venues.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <LocationCard key={index} {...venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
