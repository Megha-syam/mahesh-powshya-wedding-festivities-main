
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
          With the blessings of our parents and elders, we are delighted to invite you to join us in celebrating the beginning of our new journey together as we unite in marriage according to Telugu traditions.
          </p>
          
          <p className="text-xl leading-relaxed mb-6">
          Brought together by the love and guidance of our families, we are excited to start this sacred chapter of life. As we step into this bond of togetherness, your presence and blessings on our special day would mean a lot to us.
          </p>
          
          <p className="text-3xl font-parisienne text-wedding-gold mt-8">
            "<b>Two souls but with a single thought, two hearts that beat as one.</b>"
          </p>
        </div>

        <div className="h-1 w-16 bg-wedding-gold mx-auto mt-4 mb-8"></div>

<div className="prose prose-lg mx-auto text-wedding-darkred">
  <p className="text-xl leading-relaxed mb-6">
  తల్లిదండ్రులు మరియు పెద్దల ఆశీర్వాదాలతో,
తెలుగు సంప్రదాయాల మేరకు మేము వివాహ బంధంతో ఒక్కటవుతున్నాము.
ఈ పవిత్ర క్షణాన్ని మీతో పంచుకోవాలని మనస్ఫూర్తిగా కోరుకుంటున్నాము.
మీ సాన్నిధ్యం మాకు వెలకట్టలేని ఆనందాన్ని కలిగిస్తుంది.
  </p>
  
  <p className="text-xl leading-relaxed mb-6">
  మీ ఆశీర్వాదాలు మా జీవితానికి శుభారంభం కావాలని ఆకాంక్షిస్తున్నాము.
  ఈ శుభసమయాన్ని మీతో కలిసి జరుపుకోవాలని ఎదురుచూస్తున్నాము.
  </p>
  
  <p className="text-2xl font-parisienne text-wedding-gold mt-8">
    "ఒకే ఆలోచనతో రెండు ప్రాణాలు, ఒకే భావంతో స్పందిస్తున్న రెండు హృదయాలు."
  </p>
</div>

      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/telugu-pattern.png')] bg-repeat-x bg-contain opacity-20"></div>
    </section>
  );
};

export default GreetingSection;
