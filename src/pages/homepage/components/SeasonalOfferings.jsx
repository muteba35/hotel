import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

import Image from '../../../components/AppImage';

const SeasonalOfferings = () => {
  const offerings = [
    {
      id: 1,
      title: "Autumn Wine Harvest Experience",
      description: "Join our sommelier for an exclusive vineyard tour and tasting session featuring rare vintage selections from our private cellar.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "From $450",
      duration: "4 hours",
      category: "Experience",
      highlights: ["Private vineyard tour", "Wine tasting", "Gourmet pairing"],
      available: true
    },
    {
      id: 2,
      title: "Spa Sanctuary Retreat",
      description: "Indulge in our signature wellness journey featuring therapeutic treatments inspired by ancient healing traditions.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "From $320",
      duration: "3 hours",
      category: "Wellness",
      highlights: ["Signature massage", "Aromatherapy", "Private relaxation"],
      available: true
    },
    {
      id: 3,
      title: "Cultural Heritage Tour",
      description: "Discover the rich history and architectural marvels of our region with our expert cultural guide and exclusive access.",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "From $280",
      duration: "5 hours",
      category: "Culture",
      highlights: ["Expert guide", "Exclusive access", "Historical insights"],
      available: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-wider uppercase mb-4">
            Curated Experiences
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Seasonal Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated seasonal experiences designed to create unforgettable moments during your stay.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings?.map((offering) => (
            <div
              key={offering?.id}
              className="luxury-card group cursor-pointer luxury-hover"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-lg h-64">
                <Image
                  src={offering?.image}
                  alt={offering?.title}
                  className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 elegant-transition" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {offering?.category}
                  </span>
                </div>

                {/* Availability Badge */}
                {offering?.available && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-success text-success-foreground px-2 py-1 rounded-full text-xs">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                      <span>Available</span>
                    </div>
                  </div>
                )}

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 elegant-transition">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Book Experience
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary elegant-transition">
                    {offering?.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">{offering?.price}</p>
                    <p className="text-sm text-muted-foreground">{offering?.duration}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {offering?.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {offering?.highlights?.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    iconName="Calendar"
                  >
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/experiences-gallery">
            <Button
              variant="outline"
              size="lg"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore All Experiences
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeasonalOfferings;