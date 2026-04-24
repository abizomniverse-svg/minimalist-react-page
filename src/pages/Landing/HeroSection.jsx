import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    { id: 'followers', name: 'Followers' },
    { id: 'likes', name: 'Likes' },
    { id: 'views', name: 'Views' },
    { id: 'comments', name: 'Comments' }
  ],
  instagram: [
    { id: 'followers', name: 'Followers' },
    { id: 'likes', name: 'Likes' },
    { id: 'views', name: 'Views' },
    { id: 'comments', name: 'Comments' }
  ],
  youtube: [
    { id: 'subscribers', name: 'Subscribers' },
    { id: 'views', name: 'Views' },
    { id: 'likes', name: 'Likes' },
    { id: 'comments', name: 'Comments' }
  ]
};

const QUANTITIES = [500, 1000, 2500, 5000];

const HeroSection = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState('tiktok');
  const [profileUrl, setProfileUrl] = useState('');
  const [selectedService, setSelectedService] = useState('followers');
  const [quantity, setQuantity] = useState(1000);

  const currentServices = SERVICES[selectedPlatform] || [];

  const handleNext = () => {
    navigate('/dashboard');
  };

  const handleGuestOrder = () => {
    navigate('/order', { state: { selectedPlatform, selectedService, quantity, profileUrl } });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAFBFC 0%, #F0F4F8 50%, #E8F4F8 100%)'
      }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-[#FF00C8] rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-[#020A1B]">2.4M+ Orders Delivered</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-black text-[#020A1B] leading-tight">
            Grow Your <span className="bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">Social Media</span> Fast
          </h1>

          <p className="text-sm text-[#64748B] max-w-md">
            Get real followers, likes, views from active users. 100% safe, 30-day refill guarantee.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { value: '2M+', label: 'Orders' },
              { value: '99.9%', label: 'Success' },
              { value: '4.9/5', label: 'Rating' }
            ].map((stat, i) => (
              <div key={i} className="px-4 py-2 rounded-xl">
                <div className="text-lg font-black text-[#020A1B]">{stat.value}</div>
                <div className="text-xs text-[#64748B]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/32?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" />
              ))}
            </div>
            <div className="text-sm text-[#020A1B]">50K+ Happy Users</div>
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 overflow-hidden">
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#64748B] mb-2">Select Platform</label>
                <div className="flex gap-2">
                  {PLATFORMS.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => { setSelectedPlatform(platform.id); setSelectedService(SERVICES[platform.id][0].id); }}
                      className={`flex-1 py-3 rounded-xl border-2 transition-all flex items-center justify-center ${
                        selectedPlatform === platform.id
                          ? 'border-[#FF00C8] bg-[#FF00C8]/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#64748B] mb-2">Service</label>
                <div className="flex gap-1.5 flex-wrap">
                  {currentServices.slice(0, 4).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
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

              <input
                type="url"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder="@username"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF00C8] outline-none text-sm"
              />

              <div className="flex gap-1.5">
                {QUANTITIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuantity(q)}
                    className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                      quantity === q
                        ? 'bg-[#020A1B] text-white'
                        : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                    }`}
                  >
                    {q >= 1000 ? (q/1000) + 'K' : q}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 rounded-xl font-bold text-sm bg-[#020A1B] text-white hover:bg-[#1a1a2e] transition-all"
                >
                  Next
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