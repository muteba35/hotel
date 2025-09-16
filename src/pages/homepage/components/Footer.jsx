import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Experience',
      links: [
        { name: 'Rooms & Suites', path: '/rooms-suites-showcase' },
        { name: 'Dining', path: '/culinary-journey' },
        { name: 'Spa & Wellness', path: '/experiences-gallery' },
        { name: 'Local Experiences', path: '/experiences-gallery' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Concierge', path: '/contact-booking-hub' },
        { name: 'Business Center', path: '/contact-booking-hub' },
        { name: 'Event Planning', path: '/contact-booking-hub' },
        { name: 'Transportation', path: '/contact-booking-hub' }
      ]
    },
    {
      title: 'Policies',
      links: [
        { name: 'Booking Terms', path: '/contact-booking-hub' },
        { name: 'Privacy Policy', path: '/contact-booking-hub' },
        { name: 'Cancellation', path: '/contact-booking-hub' },
        { name: 'Accessibility', path: '/contact-booking-hub' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
  ];

  const contactInfo = {
    address: "123 Luxury Avenue, Heritage District, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "reservations@luxehaven.com",
    hours: "24/7 Concierge Service"
  };

  const awards = [
    "Forbes 5-Star Hotel",
    "AAA Five Diamond",
    "Conde Nast Gold List",
    "Travel + Leisure World\'s Best"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-7 h-7 text-secondary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 11h8v2H8z" fill="var(--color-primary)"/>
                  <path d="M10 8h4v2h-4z" fill="var(--color-primary)"/>
                  <path d="M9 14h6v2H9z" fill="var(--color-primary)"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold">Luxe Haven</h3>
                <p className="text-xs text-primary-foreground/70 tracking-wider uppercase">Hotel</p>
              </div>
            </Link>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Where luxury meets authenticity. Experience curated hospitality that transforms your stay into an unforgettable journey.
            </p>

            {/* Awards */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-secondary mb-3">Recognition</h4>
              {awards?.map((award, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Award" size={14} className="text-secondary flex-shrink-0" />
                  <span className="text-xs text-primary-foreground/70">{award}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections?.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-heading font-semibold mb-6 text-secondary">
                {section?.title}
              </h4>
              <ul className="space-y-3">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link?.path}
                      className="text-primary-foreground/80 hover:text-secondary elegant-transition text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                Address
              </h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {contactInfo?.address}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                Phone
              </h4>
              <a 
                href={`tel:${contactInfo?.phone}`}
                className="text-sm text-primary-foreground/80 hover:text-secondary elegant-transition"
              >
                {contactInfo?.phone}
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                Email
              </h4>
              <a 
                href={`mailto:${contactInfo?.email}`}
                className="text-sm text-primary-foreground/80 hover:text-secondary elegant-transition"
              >
                {contactInfo?.email}
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                Service
              </h4>
              <p className="text-sm text-primary-foreground/80">
                {contactInfo?.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/70 mr-2">Follow us:</span>
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center elegant-transition group"
                  aria-label={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="text-primary-foreground/70 group-hover:text-secondary-foreground" 
                  />
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                iconName="Phone"
                iconPosition="left"
              >
                Call Now
              </Button>
              <Button
                variant="default"
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-primary/80">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
              <p>&copy; {currentYear} Luxe Haven Hotel. All rights reserved.</p>
              <span className="hidden md:inline">|</span>
              <p className="hidden md:inline">Crafted with excellence since 1985</p>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Award" size={14} />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;