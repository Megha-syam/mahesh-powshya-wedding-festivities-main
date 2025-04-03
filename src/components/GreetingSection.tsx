
import React from 'react';

const GreetingSection = () => {
  return (
    <section className="py-20 px-4 relative bg-wedding-cream/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mandala.png')] bg-no-repeat bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto relative z-10 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-wedding-maroon mb-6">
          Welcome to Our Celebration
        </h2>
        
        <div className="h-1 w-16 bg-wedding-gold mx-auto mt-4 mb-8"></div>
        
        <div className="prose prose-lg mx-auto text-wedding-darkred">
          <p className="text-xl leading-relaxed mb-6">
            With the blessings of our parents and elders, we joyfully invite you to share in our happiness as we unite in marriage according to Telugu traditions.
          </p>
          
          <p className="text-xl leading-relaxed mb-6">
            Our journey of love began as a friendship and blossomed into a beautiful relationship. Now, as we prepare to embark on this sacred journey of marriage, we would be honored to have your presence and blessings on our special day.
          </p>
          
          <p className="text-2xl font-parisienne text-wedding-gold mt-8">
            "Two souls with but a single thought, two hearts that beat as one."
          </p>
        </div>

        <div className="h-1 w-16 bg-wedding-gold mx-auto mt-4 mb-8"></div>

<div className="prose prose-lg mx-auto text-wedding-darkred">
  <p className="text-xl leading-relaxed mb-6">
    మా తల్లిదండ్రుల మరియు పెద్దల ఆశీర్వాదాలతో, తెలుగు సంప్రదాయ ప్రకారం మేము వివాహ బంధంలో ఏకమవుతున్న ఈ సంతోషకర సందర్భాన్ని మీతో పంచుకోవడానికి మిమ్మల్ని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాం.
  </p>
  
  <p className="text-xl leading-relaxed mb-6">
    మా ప్రేమ ప్రయాణం స్నేహంగా ప్రారంభమై, అందమైన సంబంధంగా వికసించింది. ఇప్పుడు, ఈ పవిత్రమైన వివాహ జీవిత ప్రయాణాన్ని ప్రారంభించేందుకు సిద్ధమవుతున్నప్పుడు, మీ సాన్నిహిత్యం మరియు ఆశీర్వాదాలు మాకు ఎంతో ప్రాముఖ్యమైనవి.
  </p>
  
  <p className="text-2xl font-parisienne text-wedding-gold mt-8">
    "ఒకే ఆలోచనతో రెండు ప్రాణాలు, ఒకే తాకిడితో రెండు హృదయాలు."
  </p>
</div>

      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/telugu-pattern.png')] bg-repeat-x bg-contain opacity-20"></div>
    </section>
  );
};

export default GreetingSection;
