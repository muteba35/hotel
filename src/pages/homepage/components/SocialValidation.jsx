import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialValidation = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentNotification, setCurrentNotification] = useState(0);

  const mockNotifications = [
    {
      id: 1,
      type: 'booking',
      guest: 'Sarah M.',
      action: 'just booked the Heritage Suite',
      timeframe: 'for next weekend',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      timestamp: new Date(Date.now() - 300000) // 5 minutes ago
    },
    {
      id: 2,
      type: 'experience',
      guest: 'Michael R.',
      action: 'booked the Wine Harvest Experience',
      timeframe: 'for tomorrow',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      timestamp: new Date(Date.now() - 480000) // 8 minutes ago
    },
    {
      id: 3,
      type: 'spa',
      guest: 'Emma T.',
      action: 'reserved the Spa Sanctuary Retreat',
      timeframe: 'for this afternoon',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      timestamp: new Date(Date.now() - 720000) // 12 minutes ago
    },
    {
      id: 4,
      type: 'dining',
      guest: 'James C.',
      action: 'made a reservation at our restaurant',
      timeframe: 'for tonight',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      timestamp: new Date(Date.now() - 900000) // 15 minutes ago
    },
    {
      id: 5,
      type: 'booking',
      guest: 'Lisa K.',
      action: 'extended their stay',
      timeframe: 'by 2 more nights',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
      timestamp: new Date(Date.now() - 1200000) // 20 minutes ago
    }
  ];

  useEffect(() => {
    setNotifications(mockNotifications);
  }, []);

  useEffect(() => {
    if (notifications?.length === 0) return;

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [notifications?.length]);

  const getIcon = (type) => {
    switch (type) {
      case 'booking':
        return 'Calendar';
      case 'experience':
        return 'Camera';
      case 'spa':
        return 'Heart';
      case 'dining':
        return 'ChefHat';
      default:
        return 'Bell';
    }
  };

  const getTimeAgo = (timestamp) => {
    const minutes = Math.floor((Date.now() - timestamp?.getTime()) / 60000);
    if (minutes < 1) return 'just now';
    if (minutes === 1) return '1 minute ago';
    return `${minutes} minutes ago`;
  };

  if (notifications?.length === 0) return null;

  const notification = notifications?.[currentNotification];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <div className="bg-card border border-border rounded-lg shadow-luxury p-4 backdrop-luxury animate-in slide-in-from-left duration-500">
        <div className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <Image
              src={notification?.avatar}
              alt={notification?.guest}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full flex items-center justify-center">
              <Icon 
                name={getIcon(notification?.type)} 
                size={8} 
                className="text-success-foreground" 
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <p className="text-sm font-medium text-foreground truncate">
                {notification?.guest}
              </p>
              <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0" />
              <p className="text-xs text-muted-foreground flex-shrink-0">
                {getTimeAgo(notification?.timestamp)}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-tight">
              {notification?.action} {notification?.timeframe}
            </p>
          </div>

          {/* Close Button */}
          <button
            className="flex-shrink-0 p-1 hover:bg-muted rounded-full elegant-transition"
            aria-label="Dismiss notification"
          >
            <Icon name="X" size={12} className="text-muted-foreground" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-secondary rounded-full animate-pulse"
            style={{
              width: '100%',
              animation: 'progress 4s linear infinite'
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SocialValidation;