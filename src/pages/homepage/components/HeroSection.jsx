import React, { useState, useEffect } from 'react';

import Button from '../../../components/ui/Button';

import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [currentSeason, setCurrentSeason] = useState('autumn');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const seasonalContent = {
    autumn: {
      title: "Autumn Wine Harvest",
      subtitle: "Experience the golden season of luxury",
      description: "Immerse yourself in the warmth of autumn with our exclusive wine harvest experiences and cozy fireside evenings.",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Discover Autumn"
    },
    winter: {
      title: "Winter Sanctuary",
      subtitle: "Embrace the season of tranquility",
      description: "Find warmth in our luxurious winter retreat with crackling fireplaces and intimate dining experiences.",
      image: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Winter Escape"
    },
    spring: {
      title: "Spring Awakening",
      subtitle: "Bloom with nature\'s renewal",
      description: "Celebrate spring's arrival in our garden paradise with fresh culinary experiences and outdoor adventures.",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Spring Journey"
    },
    summer: {
      title: "Summer Terrace",
      subtitle: "Bask in golden hour luxury",
      description: "Enjoy endless summer evenings on our terrace with al fresco dining and sunset cocktails.",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Summer Bliss"
    }
  };

  useEffect(() => {
    const month = new Date()?.getMonth();
    if (month >= 2 && month <= 4) setCurrentSeason('spring');
    else if (month >= 5 && month <= 7) setCurrentSeason('summer');
    else if (month >= 8 && month <= 10) setCurrentSeason('autumn');
    else setCurrentSeason('winter');
  }, []);

  const currentContent = seasonalContent?.[currentSeason];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentContent?.image}
          alt="Luxe Haven Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40 delay-1000" />
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="mb-8">
            <p className="text-secondary font-body text-sm md:text-base tracking-wider uppercase mb-4 opacity-90">
              {currentContent?.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Where luxury meets
              <span className="block text-secondary">authenticity</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-body leading-relaxed max-w-2xl mx-auto">
              {currentContent?.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-medium"
              iconName="Calendar"
              iconPosition="left"
            >
              Reserve Your Stay
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium"
              iconName="Play"
              iconPosition="left"
            >
              Virtual Tour
            </Button>
          </div>

          {/* Scroll Indicator */}
        </div>
      </div>
      {/* Parallax Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary/20 rounded-full animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default HeroSection;