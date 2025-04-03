
import React, { useState } from 'react';
import { X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: "/outside.jpeg",
      alt: "Mahesh traditional",
    },
    {
      src: "/coupledance.jpeg",
      alt: "Mahesh and Powshya at a garden",
    },
    {
      src: "/bridelift.jpeg",
      alt: "Mahesh and Powshya at engagement", 
      
    },
    {
      src: "/engring.jpeg",
      alt: "Mahesh and Powshya traditional outfit",
    },
    {
      src: "/engaged.jpeg",
      alt: "Mahesh portrait",
    },
    {
      src: "/garland.jpeg",
      alt: "Powshya portrait",
    },
    
    {
      src: "/couple.jpeg",
      alt: "Powshya traditional",
    },
    {
      src: "/outside-2.jpeg",
      alt: "Mahesh and Powshya casual",
    },
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-wedding-cream/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-maroon">Our Gallery</h2>
          <div className="h-1 w-16 bg-wedding-gold mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">Glimpses of our journey together.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(photo.src)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-wedding-gold"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
