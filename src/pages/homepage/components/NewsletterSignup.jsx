import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!email?.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: 'Star',
      title: 'Exclusive Offers',
      description: 'First access to seasonal packages and member-only rates'
    },
    {
      icon: 'Calendar',
      title: 'Early Booking',
      description: 'Priority reservations for special events and experiences'
    },
    {
      icon: 'Gift',
      title: 'Surprise Perks',
      description: 'Complimentary upgrades and personalized amenities'
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} className="text-success-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Welcome to the Family!
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Thank you for subscribing. You'll receive our exclusive seasonal guide and member-only offers in your inbox soon.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubscribed(false)}
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-secondary font-body text-sm tracking-wider uppercase mb-4">
              Exclusive Access
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Join Our Inner Circle
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive exclusive seasonal experiences, member-only access, and personalized luxury travel insights.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 elegant-transition">
                  <Icon 
                    name={benefit?.icon} 
                    size={24} 
                    className="text-secondary-foreground" 
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">
                  {benefit?.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                error={error}
                className="bg-primary-foreground text-primary"
                required
              />
              
              <Button
                type="submit"
                variant="default"
                fullWidth
                loading={isLoading}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3"
                iconName="Mail"
                iconPosition="left"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe Now'}
              </Button>
            </form>

            {/* Privacy Notice */}
            <div className="mt-6 text-center">
              <p className="text-xs text-primary-foreground/70 leading-relaxed">
                By subscribing, you agree to receive marketing emails from Luxe Haven. 
                You can unsubscribe at any time. We respect your privacy and will never share your information.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Icon name="Shield" size={16} />
                <span className="text-xs">Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Icon name="Lock" size={16} />
                <span className="text-xs">Private</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Icon name="UserX" size={16} />
                <span className="text-xs">No Spam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;