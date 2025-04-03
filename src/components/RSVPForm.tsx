
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const RSVPForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfGuests: 1,
    attending: 'yes',
    events: {
      haldi: false,
      wedding: false,
      reception: false
    },
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('events.')) {
      const eventName = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        events: {
          ...prev.events,
          [eventName]: (e.target as HTMLInputElement).checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We look forward to celebrating with you!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      numberOfGuests: 1,
      attending: 'yes',
      events: {
        haldi: false,
        wedding: false,
        reception: false
      },
      message: ''
    });
  };

  return (
    <section id="rsvp" className="py-20 px-4 relative bg-white">
      <div className="absolute inset-0 bg-[url('/telugu-pattern.png')] bg-repeat bg-top opacity-5 z-0"></div>
      <div className="container max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-maroon">RSVP</h2>
          <div className="h-1 w-16 bg-wedding-gold mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We would be honored to have your presence at our wedding celebration.
            Please let us know if you can join us by August 1, 2024.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-wedding-gold/20">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                  placeholder="Your email address"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="attending" className="block text-gray-700 font-medium mb-2">Will you attend?</label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
            </div>
            
            {formData.attending === 'yes' && (
              <>
                <div className="mb-6">
                  <label htmlFor="numberOfGuests" className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                  <input
                    type="number"
                    id="numberOfGuests"
                    name="numberOfGuests"
                    min="1"
                    max="5"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Events you will attend</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="events.haldi"
                        name="events.haldi"
                        checked={formData.events.haldi}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-wedding-gold focus:ring-wedding-gold"
                      />
                      <label htmlFor="events.haldi" className="text-gray-700">Haldi Ceremony (Aug 13)</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="events.wedding"
                        name="events.wedding"
                        checked={formData.events.wedding}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-wedding-gold focus:ring-wedding-gold"
                      />
                      <label htmlFor="events.wedding" className="text-gray-700">Wedding Ceremony (Aug 15)</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="events.reception"
                        name="events.reception"
                        checked={formData.events.reception}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-wedding-gold focus:ring-wedding-gold"
                      />
                      <label htmlFor="events.reception" className="text-gray-700">Reception Celebration (Aug 16)</label>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message for the Couple (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                placeholder="Share your wishes..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-wedding-maroon text-white rounded-md hover:bg-wedding-darkred transition duration-300 shadow-md"
              >
                Submit RSVP
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
