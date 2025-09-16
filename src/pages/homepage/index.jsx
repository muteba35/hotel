import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SeasonalOfferings from './components/SeasonalOfferings';
import TestimonialCarousel from './components/TestimonialCarousel';
import SocialValidation from './components/SocialValidation';
import BookingWidget from './components/BookingWidget';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Luxe Haven Hotel - Where Luxury Meets Authenticity</title>
        <meta 
          name="description" 
          content="Experience curated luxury at Luxe Haven Hotel. Discover transformative hospitality with seasonal experiences, world-class amenities, and personalized service in the heart of New York." 
        />
        <meta name="keywords" content="luxury hotel, boutique hotel, New York hotel, premium accommodation, luxury travel, hotel experiences" />
        <meta property="og:title" content="Luxe Haven Hotel - Where Luxury Meets Authenticity" />
        <meta property="og:description" content="Experience curated luxury at Luxe Haven Hotel with seasonal experiences and world-class amenities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxehaven.com" />
        <link rel="canonical" href="https://luxehaven.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header Navigation */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section with Cinematic Experience */}
          <HeroSection />

          {/* Seasonal Offerings Preview */}
          <SeasonalOfferings />

          {/* Guest Testimonial Carousel */}
          <TestimonialCarousel />

          {/* Newsletter Signup */}
          <NewsletterSignup />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Elements */}
        <SocialValidation />
        <BookingWidget />
      </div>
    </>
  );
};

export default Homepage;