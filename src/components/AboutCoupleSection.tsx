
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const AboutCoupleSection = () => {
  return (
    <section className="py-20 px-4 relative mandala-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-maroon">About the Couple</h2>
          <div className="h-1 w-16 bg-wedding-gold mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">The story of Mahesh and Powshya</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Groom */}
          <Card className="overflow-hidden border-wedding-gold/20 hover:shadow-xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src="/1.png"
                alt="Mahesh"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-wedding-maroon mb-3">Mahesh</h3>
              <p className="text-gray-700 mb-4">
                Mahesh is the eldest son of Mr. LakshmiNarayana Gupta and Mrs. SobhaRani. Born and raised in Putlagatlagudem, he completed his education in Electronics and Communication Engineering  and now works as a Software Engineer at a leading tech company. His calm demeanor, intelligence, and compassionate nature make him beloved by family and friends alike.
              </p>
              <p className="text-gray-700">
                He enjoys playing cricket, reading philosophy books, and has a passion for Telugu classical music. Mahesh's dedication to his family traditions while embracing modern values makes him a perfect blend of tradition and contemporary thinking.
              </p>
            </CardContent>
          </Card>
          
          {/* Bride */}
          <Card className="overflow-hidden border-wedding-gold/20 hover:shadow-xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src="/bride.jpeg"
                alt="Powshya"
                className="w-full h-150 object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-wedding-maroon mb-3">Powshya</h3>
              <p className="text-gray-700 mb-4">
                Powshya Sri lakshmi is the beloved daughter of Mr. Venkata Apparao and Mrs. Venkata Naga Prabharamba. Growing up in a traditional Telugu household, she has always valued her cultural roots. She holds Bachelor's degree in Computer Science and Engineering and works as a Software Engineer in a Leading tech Company.
              </p>
              <p className="text-gray-700">
                Her vibrant personality, artistic talents in classical dance, and warm heart have always drawn people to her. Powshya loves painting, Kuchipudi dance, and experimenting with traditional Telugu cuisine with modern twists.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="relative">
            <div className="h-0.5 w-24 bg-wedding-gold my-6"></div>
            <Heart className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 text-wedding-gold fill-wedding-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoupleSection;
