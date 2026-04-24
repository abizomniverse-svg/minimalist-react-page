import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { THEME, GLOBAL_CONFIG } from '../../utils/constants';

const PLATFORMS = [
  { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#FF00C8' },
  { id: 'instagram', name: 'Instagram', icon: '📸', color: '#00F5D4' },
  { id: 'youtube', name: 'YouTube', icon: '▶️', color: '#A6FF00' }
];

const SERVICES = {
  tiktok: [
    { id: 'followers', name: 'Followers', price: 5.60, icon: '👥' },
    { id: 'likes', name: 'Likes', price: 0.08, icon: '❤️' },
    { id: 'views', name: 'Views', price: 0.02, icon: '👁️' },
    { id: 'comments', name: 'Comments', price: 1.20, icon: '💬' },
    { id: 'shares', name: 'Shares', price: 2.50, icon: '🔄' },
    { id: 'saves', name: 'Saves', price: 1.80, icon: '🔖' }
  ],
  instagram: [
    { id: 'followers', name: 'Followers', price: 3.20, icon: '👥' },
    { id: 'likes', name: 'Likes', price: 0.15, icon: '❤️' },
    { id: 'views', name: 'Views', price: 0.05, icon: '👁️' },
    { id: 'comments', name: 'Comments', price: 2.10, icon: '💬' },
    { id: 'saves', name: 'Saves', price: 1.80, icon: '🔖' },
    { id: 'storyviews', name: 'Story Views', price: 0.035, icon: '📱' }
  ],
  youtube: [
    { id: 'subscribers', name: 'Subscribers', price: 13.90, icon: '🔔' },
    { id: 'views', name: 'Views', price: 0.03, icon: '👁️' },
    { id: 'likes', name: 'Likes', price: 0.25, icon: '👍' },
    { id: 'comments', name: 'Comments', price: 3.50, icon: '💬' },
    { id: 'shares', name: 'Shares', price: 4.20, icon: '🔄' }
  ]
};

const QUANTITIES = [100, 500, 1000, 2500, 5000, 10000];

const HeroSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('tiktok');
  const [profileUrl, setProfileUrl] = useState('');
  const [selectedService, setSelectedService] = useState('followers');
  const [quantity, setQuantity] = useState(1000);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentServices = SERVICES[selectedPlatform] || [];
  const currentService = currentServices.find(s => s.id === selectedService) || currentServices[0];
  const totalPrice = currentService ? (currentService.price * quantity).toFixed(2) : '0.00';

  const handleOrder = async () => {
    if (!selectedPlatform || !profileUrl || !selectedService) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setProfileUrl('');
      }, 3000);
    }, 2000);
  };

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-8"
      style={{
        background: 'linear-gradient(135deg, #FAFBFC 0%, #F0F4F8 50%, #E8F4F8 100%)'
      }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <span className="w-2 h-2 bg-[#FF00C8] rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-[#020A1B]">🔥 Trending Now: 2.4M+ Orders Delivered</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-[#020A1B] leading-tight">
            Grow Your <span className="bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">Social Media</span> Fast
          </h1>

          <p className="text-lg text-[#64748B] max-w-lg">
            Get real followers, likes, views, and more from active users. 
            100% safe, 30-day refill guarantee. Start in seconds.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { value: '2M+', label: 'Orders' },
              { value: '99.9%', label: 'Success' },
              { value: '4.9/5', label: 'Rating' }
            ].map((stat, i) => (
              <div key={i} className="bg-white px-5 py-3 rounded-2xl shadow-sm">
                <div className="text-xl font-black text-[#020A1B]">{stat.value}</div>
                <div className="text-xs text-[#64748B]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" />
              ))}
            </div>
            <div>
              <div className="text-sm font-bold text-[#020A1B]">50,000+ Happy Users</div>
              <div className="flex text-[#A6FF00] text-sm">★ ★ ★ ★ ★</div>
            </div>
          </div>
        </div>

        {/* Right - Order Card */}
        <div className="relative">
          {/* Gradient glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF00C8]/20 via-[#00F5D4]/20 to-[#A6FF00]/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#020A1B] to-[#1a1a2e] px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">⚡ Quick Order</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Sale ends in {timeLeft.hours}h {timeLeft.minutes}m
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Platform */}
              <div>
                <label className="block text-sm font-bold text-[#020A1B] mb-3">Select Platform</label>
                <div className="grid grid-cols-4 gap-2">
                  {PLATFORMS.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => { setSelectedPlatform(platform.id); setSelectedService(SERVICES[platform.id][0].id); }}
                      className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                        selectedPlatform === platform.id
                          ? 'border-[#FF00C8] bg-[#FF00C8]/5'
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-xl">{platform.icon}</span>
                      <span className="text-xs font-medium">{platform.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-bold text-[#020A1B] mb-3">Select Service</label>
                <div className="grid grid-cols-3 gap-2">
                  {currentServices.slice(0, 6).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`py-2 px-3 rounded-xl border-2 transition-all flex flex-col items-center ${
                        selectedService === service.id
                          ? 'border-[#FF00C8] bg-[#FF00C8]/5'
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-lg mb-1">{service.icon}</span>
                      <span className="text-xs font-bold text-[#020A1B]">{service.name}</span>
                      <span className="text-xs text-[#FF00C8]">${service.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* URL */}
              <div>
                <label className="block text-sm font-bold text-[#020A1B] mb-3">Profile URL</label>
                <input
                  type="url"
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  placeholder={`https://${selectedPlatform}.com/@yourusername`}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF00C8] outline-none text-sm"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-bold text-[#020A1B] mb-3">Quantity</label>
                <div className="grid grid-cols-6 gap-1 mb-3">
                  {QUANTITIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuantity(q)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        quantity === q
                          ? 'bg-[#FF00C8] text-white'
                          : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                      }`}
                    >
                      {formatNumber(q)}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 10)}
                  min="10"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF00C8] outline-none text-center font-bold"
                />
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#64748B]">Total</div>
                    <div className="text-xs text-[#64748B]">Instant delivery • Refill guarantee</div>
                  </div>
                  <div className="text-3xl font-black text-[#020A1B]">${totalPrice}</div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleOrder}
                disabled={!profileUrl || isProcessing}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  profileUrl && !isProcessing
                    ? 'bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white hover:shadow-xl hover:shadow-pink-500/25'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : showSuccess ? (
                  <>✅ Order Placed!</>
                ) : (
                  <>🚀 Order Now - ${totalPrice}</>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 text-xs text-[#64748B]">
                <span className="flex items-center gap-1">🔒 Secure</span>
                <span className="flex items-center gap-1">⚡ Instant</span>
                <span className="flex items-center gap-1">🔄 Refill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;