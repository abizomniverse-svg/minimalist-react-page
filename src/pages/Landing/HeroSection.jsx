import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';
import { THEME, GLOBAL_CONFIG } from '../../utils/constants';
import TikTokIcon from '../../assets/icon/icons8-tiktok-50.svg';
import InstagramIcon from '../../assets/icon/icons8-instagram-50.svg';
import YouTubeIcon from '../../assets/icon/icons8-youtube-50.svg';

const PLATFORMS = [
  { id: 'tiktok', name: 'TikTok', icon: TikTokIcon, color: '#FF00C8' },
  { id: 'instagram', name: 'Instagram', icon: InstagramIcon, color: '#00F5D4' },
  { id: 'youtube', name: 'YouTube', icon: YouTubeIcon, color: '#A6FF00' }
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
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState('tiktok');
  const [profileUrl, setProfileUrl] = useState('');
  const [selectedService, setSelectedService] = useState('followers');
  const [quantity, setQuantity] = useState(1000);

  const currentServices = SERVICES[selectedPlatform] || [];
  const activeService = currentServices.find(s => s.id === selectedService) || currentServices[0];
  const totalPrice = activeService ? ((activeService.price * quantity) / 1000).toFixed(2) : '0.00';

  const handleOrder = () => {
    if (!profileUrl) return;
    if (isAuthenticated()) {
      navigate('/order', { state: { selectedPlatform, selectedService, quantity, profileUrl } });
    } else {
      navigate('/login');
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAFBFC 0%, #F0F4F8 50%, #E8F4F8 100%)'
      }}>
      {/* Parallax Background */}
      <div className="hero-bg absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-particle absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-full blur-3xl"></div>
        <div className="floating-particle absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-[#00F5D4]/10 to-[#A6FF00]/10 rounded-full blur-3xl"></div>
        <div className="floating-particle absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-[#A6FF00]/10 to-[#FF00C8]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#FF00C8]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#00F5D4]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#A6FF00]/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
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
          {/* Transparent glass card */}
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#020A1B]/80 to-[#1a1a2e]/80 px-6 py-3">
              <h3 className="text-white font-bold">⚡ Quick Order</h3>
            </div>

            <div className="p-5 space-y-4">
              {/* Platform */}
              <div>
                <label className="block text-xs font-semibold text-[#64748B] mb-2">Platform</label>
                <div className="flex gap-2">
                  {PLATFORMS.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => { setSelectedPlatform(platform.id); setSelectedService(SERVICES[platform.id][0].id); }}
                      className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all flex items-center justify-center gap-1 ${
                        selectedPlatform === platform.id
                          ? 'border-[#FF00C8] bg-[#FF00C8]/10 text-[#FF00C8]'
                          : 'border-gray-200 text-[#64748B] hover:border-gray-300'
                      }`}
                    >
                      <img src={platform.icon} alt={platform.name} className="w-5 h-5" />
                      {platform.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-semibold text-[#64748B] mb-2">Service</label>
                <div className="flex gap-2">
                  {currentServices.slice(0, 4).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                        selectedService === service.id
                          ? 'bg-[#FF00C8] text-white'
                          : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                      }`}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* URL */}
              <input
                type="url"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder={`@username`}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white/80 focus:border-[#FF00C8] outline-none text-sm"
              />

              {/* Quantity */}
              <div className="flex gap-2">
                {[500, 1000, 2500, 5000].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuantity(q)}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                      quantity === q
                        ? 'bg-[#020A1B] text-white'
                        : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                    }`}
                  >
                    {q >= 1000 ? (q/1000) + 'K' : q}
                  </button>
                ))}
              </div>

              {/* Price & Submit */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-xl p-3">
                  <div className="text-xs text-[#64748B]">Total</div>
                  <div className="text-xl font-black text-[#020A1B]">${totalPrice}</div>
                </div>
                <button
                  onClick={handleOrder}
                  disabled={!profileUrl}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                    profileUrl
                      ? 'bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;