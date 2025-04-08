
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
              Mahesh is the eldest son of Mr. LakshmiNarayana Gupta and Mrs. Sobha Rani. He was born and brought up in Putlagatlagudem. After completing his education in Electronics and Communication Engineering, he is now working as a Technical Lead at a leading tech company.
              </p>
              <p className="text-gray-700">
              Known for his calm nature, intelligence, and kindness, Mahesh is admired by family and friends. He enjoys playing cricket, reading philosophy, listening music and has a passion for acting, dance. With a perfect blend of traditional values and modern outlook, he loves spending quality time with his loved ones.
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
                Powshya Sri Lakshmi is the beloved daughter of Mr. Venkata Apparao and Mrs. Venkata Naga Prabharamba. Growing up in a traditional Telugu household, she has always valued her cultural roots. She holds Bachelor's degree in Computer Science and Engineering and works as a Software Engineer in a Leading tech Company.
              </p>
              <p className="text-gray-700">
              Her vibrant personality, artistic talent in dance, and warm heart naturally draw people to her. Powshya loves paper crafting, dancing, and experimenting with traditional Telugu cuisine with a modern twist.
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
