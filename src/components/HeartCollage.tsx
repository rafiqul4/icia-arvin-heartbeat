import React from 'react';

interface HeartCollageProps {
  coupleImage: string;
  cakeImage: string;
}

const HeartCollage: React.FC<HeartCollageProps> = ({ coupleImage, cakeImage }) => {
  return (
    <div className="relative flex justify-center items-center py-12">
      {/* Floating petals animation */}
      <div className="floating-petals">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>
      
      {/* Heart-shaped collage container */}
      <div className="heart-glow relative">
        <div className="heart-shape relative">
          {/* Heart SVG as mask */}
          <svg 
            width="400" 
            height="360" 
            viewBox="0 0 400 360" 
            className="absolute inset-0"
            style={{ filter: 'drop-shadow(0 8px 32px rgba(194, 65, 108, 0.3))' }}
          >
            <defs>
              <clipPath id="heartMask">
                <path d="M200,320 C200,320 50,200 50,120 C50,80 80,50 120,50 C140,50 160,60 200,90 C240,60 260,50 280,50 C320,50 350,80 350,120 C350,200 200,320 200,320 Z" />
              </clipPath>
            </defs>
          </svg>
          
          {/* Heart container with images */}
          <div 
            className="relative w-[400px] h-[360px] overflow-hidden"
            style={{ clipPath: 'polygon(50% 15%, 85% 30%, 100% 55%, 85% 80%, 50% 100%, 15% 80%, 0% 55%, 15% 30%)' }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-romantic opacity-20"></div>
            
            {/* Left side - Couple photo */}
            <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
              <img 
                src={coupleImage}
                alt="Incia & Arvin - Glamorous couple portrait"
                className="w-full h-full object-cover object-center transform scale-110 hover:scale-115 transition-transform duration-700"
                style={{ 
                  clipPath: 'ellipse(80% 90% at 20% 50%)',
                  filter: 'sepia(10%) saturate(110%) brightness(105%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-wedding-rose/20"></div>
            </div>
            
            {/* Right side - Cake photo */}
            <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
              <img 
                src={cakeImage}
                alt="Wedding cake with beautiful floral decorations"
                className="w-full h-full object-cover object-center transform scale-110 hover:scale-115 transition-transform duration-700"
                style={{ 
                  clipPath: 'ellipse(80% 90% at 80% 50%)',
                  filter: 'sepia(5%) saturate(105%) brightness(110%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-wedding-gold/20"></div>
            </div>
            
            {/* Center divider with romantic accent */}
            <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-wedding-rose to-transparent transform -translate-x-0.5 opacity-60"></div>
            
            {/* Heart overlay with subtle pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-radial from-wedding-cream/40 via-transparent to-romantic/20"></div>
            </div>
          </div>
          
          {/* Decorative elements around the heart */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-wedding-rose rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-wedding-gold rounded-full animate-pulse delay-300"></div>
          </div>
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150"></div>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-romantic rounded-full animate-pulse delay-450"></div>
          </div>
        </div>
      </div>
      
      {/* Romantic caption below heart */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground italic font-light tracking-wide">
          "Two hearts, one beautiful story"
        </p>
      </div>
    </div>
  );
};

export default HeartCollage;