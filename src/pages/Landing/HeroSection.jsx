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
  tiktok: ['Followers', 'Likes', 'Views', 'Comments'],
  instagram: ['Followers', 'Likes', 'Views', 'Comments'],
  youtube: ['Subscribers', 'Views', 'Likes', 'Comments']
};

const QUANTITIES = [500, 1000, 2500, 5000];

const HeroSection = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState('tiktok');
  const [selectedService, setSelectedService] = useState('Followers');
  const [quantity, setQuantity] = useState(1000);

  const handleNext = () => {
    navigate('/dashboard');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative"
      style={{ background: 'linear-gradient(135deg, #FAFBFC 0%, #E8F4F8 50%, #F0F4F8 100%)' }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-[#FF00C8] rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-[#020A1B]">2.4M+ Orders Delivered</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-[#020A1B] leading-tight">
            #1 Trusted Site to Turn Your <span className="bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">TikTok Profile</span> into a Powerful Platform
          </h1>

          <p className="text-base text-[#64748B] max-w-lg">
            Grow your audience and increase engagement. Create an impressive online presence and expand your reach with TikyTop's proven growth services.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#020A1B]">Rated 4.9 on Trustscore</span>
            <div className="flex text-[#FF00C8]">★★★★★</div>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { value: '2M+', label: 'Orders' },
              { value: '99.9%', label: 'Success' },
              { value: '4.9/5', label: 'Rating' }
            ].map((stat, i) => (
              <div key={i} className="px-4 py-2">
                <div className="text-xl font-black text-[#020A1B]">{stat.value}</div>
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

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#020A1B] mb-3">Select Platform</label>
            <div className="flex gap-4">
              {PLATFORMS.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`p-4 rounded-2xl transition-all duration-300 ${
                    selectedPlatform === platform.id
                      ? 'bg-gradient-to-br from-[#FF00C8]/20 to-[#00F5D4]/20 ring-2 ring-[#FF00C8]'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <img src={platform.icon} alt={platform.name} className="w-12 h-12" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#020A1B] mb-3">Service</label>
            <div className="flex gap-2 flex-wrap">
              {SERVICES[selectedPlatform].map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedService === service
                      ? 'bg-[#FF00C8] text-white shadow-lg shadow-[#FF00C8]/30'
                      : 'bg-white text-[#64748B] hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#020A1B] mb-3">Quantity</label>
            <div className="flex gap-2">
              {QUANTITIES.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuantity(q)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    quantity === q
                      ? 'bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] text-white shadow-lg'
                      : 'bg-white text-[#64748B] hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {q >= 1000 ? (q/1000) + 'K' : q}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white hover:shadow-xl hover:shadow-[#FF00C8]/30 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;