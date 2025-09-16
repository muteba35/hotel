import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "New York, NY",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Transformative Experience",
      content: `Luxe Haven exceeded every expectation. The attention to detail, from the hand-selected linens to the personalized concierge service, created an experience that felt truly bespoke.\n\nThe autumn wine harvest tour was absolutely magical - our sommelier's knowledge and passion made it unforgettable.`,
      experience: "Heritage Suite • Wine Harvest Experience",
      date: "October 2024",
      verified: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "San Francisco, CA",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Business Travel Redefined",
      content: `As someone who travels frequently for business, I can confidently say Luxe Haven sets the gold standard for luxury hospitality.\n\nThe seamless check-in, world-class amenities, and impeccable service made my stay both productive and rejuvenating.`,
      experience: "Executive Suite • Business Services",
      date: "November 2024",
      verified: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Anniversary Perfection",
      content: `Our 10th anniversary celebration at Luxe Haven was nothing short of magical. Every detail was thoughtfully orchestrated to create moments of genuine delight.\n\nThe spa sanctuary retreat was the perfect way to reconnect and celebrate our milestone.`,
      experience: "Romantic Suite • Spa Sanctuary",
      date: "September 2024",
      verified: true
    },
    {
      id: 4,
      name: "James Chen",
      location: "Singapore",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Cultural Immersion",
      content: `The cultural heritage tour opened my eyes to the rich history and architectural significance of the region. Our guide's expertise and exclusive access to historical sites made this trip truly educational and inspiring.\n\nLuxe Haven doesn't just provide accommodation - they curate experiences.`,
      experience: "Garden Suite • Cultural Heritage Tour",
      date: "August 2024",
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-wider uppercase mb-4">
            Guest Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Authentic Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover what makes Luxe Haven special through the stories of our valued guests.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-card p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Icon name="Quote" size={128} className="text-secondary" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={20}
                  className="text-secondary fill-current"
                />
              ))}
            </div>

            {/* Testimonial Title */}
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
              "{currentTestimonial?.title}"
            </h3>

            {/* Testimonial Content */}
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {currentTestimonial?.content}
              </p>
            </div>

            {/* Guest Info */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src={currentTestimonial?.avatar}
                  alt={currentTestimonial?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                {currentTestimonial?.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-success-foreground" />
                  </div>
                )}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">{currentTestimonial?.name}</h4>
                <p className="text-sm text-muted-foreground">{currentTestimonial?.location}</p>
                <p className="text-xs text-secondary font-medium">{currentTestimonial?.date}</p>
              </div>
            </div>

            {/* Experience Details */}
            <div className="bg-muted rounded-lg p-4 mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Experience:</span> {currentTestimonial?.experience}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-10 h-10 p-0"
                iconName="ChevronLeft"
              />
              
              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full elegant-transition ${
                      index === currentIndex
                        ? 'bg-secondary' :'bg-border hover:bg-secondary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="w-10 h-10 p-0"
                iconName="ChevronRight"
              />
            </div>
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-muted-foreground hover:text-foreground elegant-transition flex items-center space-x-2 mx-auto"
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
            <span>{isAutoPlaying ? "Pause" : "Play"} Auto-rotation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;