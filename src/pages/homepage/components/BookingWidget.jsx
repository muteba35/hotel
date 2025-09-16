import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const BookingWidget = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1'
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [availability, setAvailability] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5+ Guests' }
  ];

  const roomOptions = [
    { value: '1', label: '1 Room' },
    { value: '2', label: '2 Rooms' },
    { value: '3', label: '3 Rooms' },
    { value: '4', label: '4+ Rooms' }
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckAvailability = async () => {
    if (!bookingData?.checkIn || !bookingData?.checkOut) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setAvailability({
        available: true,
        rooms: [
          {
            type: 'Heritage Suite',
            price: 450,
            available: 2
          },
          {
            type: 'Garden Suite',
            price: 380,
            available: 3
          },
          {
            type: 'Executive Suite',
            price: 320,
            available: 1
          }
        ],
        totalNights: calculateNights()
      });
      setIsExpanded(true);
      setIsLoading(false);
    }, 1500);
  };

  const calculateNights = () => {
    if (!bookingData?.checkIn || !bookingData?.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const diffTime = Math.abs(checkOut - checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-md">
      <div className="luxury-card p-6 backdrop-luxury">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Book Your Stay
            </h3>
            <p className="text-sm text-muted-foreground">
              Check availability & rates
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-muted rounded-full elegant-transition"
          >
            <Icon 
              name={isExpanded ? "ChevronDown" : "ChevronUp"} 
              size={20} 
              className="text-muted-foreground" 
            />
          </button>
        </div>

        {/* Booking Form */}
        <div className="space-y-4">
          {/* Date Inputs */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="date"
              label="Check-in"
              value={bookingData?.checkIn}
              onChange={(e) => handleInputChange('checkIn', e?.target?.value)}
              min={new Date()?.toISOString()?.split('T')?.[0]}
              className="text-sm"
            />
            <Input
              type="date"
              label="Check-out"
              value={bookingData?.checkOut}
              onChange={(e) => handleInputChange('checkOut', e?.target?.value)}
              min={bookingData?.checkIn || new Date()?.toISOString()?.split('T')?.[0]}
              className="text-sm"
            />
          </div>

          {/* Guest and Room Selection */}
          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Guests"
              options={guestOptions}
              value={bookingData?.guests}
              onChange={(value) => handleInputChange('guests', value)}
            />
            <Select
              label="Rooms"
              options={roomOptions}
              value={bookingData?.rooms}
              onChange={(value) => handleInputChange('rooms', value)}
            />
          </div>

          {/* Check Availability Button */}
          <Button
            variant="default"
            fullWidth
            loading={isLoading}
            onClick={handleCheckAvailability}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            iconName="Search"
            iconPosition="left"
            disabled={!bookingData?.checkIn || !bookingData?.checkOut}
          >
            {isLoading ? 'Checking...' : 'Check Availability'}
          </Button>
        </div>

        {/* Availability Results */}
        {isExpanded && availability && (
          <div className="mt-6 pt-6 border-t border-border animate-in slide-in-from-top duration-300">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">Available Rooms</h4>
                <div className="text-sm text-muted-foreground">
                  {availability?.totalNights} {availability?.totalNights === 1 ? 'night' : 'nights'}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {formatDate(bookingData?.checkIn)} - {formatDate(bookingData?.checkOut)}
              </div>
            </div>

            <div className="space-y-3">
              {availability?.rooms?.map((room, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 elegant-transition cursor-pointer"
                >
                  <div>
                    <h5 className="font-medium text-foreground text-sm">{room?.type}</h5>
                    <p className="text-xs text-muted-foreground">
                      {room?.available} available
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">${room?.price}</p>
                    <p className="text-xs text-muted-foreground">per night</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="default"
              fullWidth
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              iconName="Calendar"
              iconPosition="left"
            >
              Reserve Now
            </Button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <button className="text-secondary hover:text-secondary/80 elegant-transition flex items-center space-x-1">
              <Icon name="Phone" size={14} />
              <span>Call Us</span>
            </button>
            <button className="text-secondary hover:text-secondary/80 elegant-transition flex items-center space-x-1">
              <Icon name="MessageCircle" size={14} />
              <span>Live Chat</span>
            </button>
            <button className="text-secondary hover:text-secondary/80 elegant-transition flex items-center space-x-1">
              <Icon name="Mail" size={14} />
              <span>Email</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: slide-in-from-top 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BookingWidget;