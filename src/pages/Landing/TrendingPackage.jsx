import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TikTokIcon from '../../assets/icon/icons8-tiktok-50.svg';
import InstagramIcon from '../../assets/icon/icons8-instagram-50.svg';
import YouTubeIcon from '../../assets/icon/icons8-youtube-50.svg';

const PACKAGES = [
  {
    id: "tiktok",
    platform: "TikTok",
    service: "Growth Services",
    description: "Likes, Views, Followers, Comments & more",
    type: "tiktok",
    icon: TikTokIcon,
    services: ["Likes", "Views", "Followers", "Comments", "Shares", "Saves"]
  },
  {
    id: "instagram",
    platform: "Instagram", 
    service: "Growth Services",
    description: "Followers, Likes, Views, Reels & more",
    type: "instagram",
    icon: InstagramIcon,
    services: ["Followers", "Likes", "Views", "Reels", "Story Views", "Impressions"]
  },
  {
    id: "youtube",
    platform: "YouTube",
    service: "Growth Services", 
    description: "Subscribers, Views, Likes & more",
    type: "youtube",
    icon: YouTubeIcon,
    services: ["Subscribers", "Video Views", "Shorts Views", "Likes", "Comments"]
  }
];

const TrendingPackage = () => {
  const navigate = useNavigate();

  const getGradient = (type) => {
    switch (type) {
      case 'tiktok': return 'linear-gradient(135deg, #FF00C8 0%, #7E22CE 100%)';
      case 'instagram': return 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)';
      case 'youtube': return 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)';
      default: return 'linear-gradient(135deg, #FF00C8 0%, #00F5D4 100%)';
    }
  };

  const getHoverGradient = (type) => {
    switch (type) {
      case 'tiktok': return 'linear-gradient(135deg, #FF00C8/10 0%, #7E22CE/10 100%)';
      case 'instagram': return 'linear-gradient(135deg, #833AB4/10 0%, #FD1D1D/10 50%, #FCB045/10 100%)';
      case 'youtube': return 'linear-gradient(135deg, #FF0000/10 0%, #CC0000/10 100%)';
      default: return 'linear-gradient(135deg, #FF00C8/10 0%, #00F5D4/10 100%)';
    }
  };

  return (
    <section id="packages" className="py-16 px-4 relative"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FC 100%)' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF00C8]/10 mb-4">
            <span className="text-sm font-bold text-[#FF00C8]">Buy TikTok Likes | Buy TikTok Views</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#020A1B] tracking-tight mb-3">
            Elite Growth Packages
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            100% Authentic & Safe • High-Quality Results • Affordable Packages • No Password Required • 24/7 Support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => navigate('/dashboard')}
              className="relative overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: getHoverGradient(pkg.type) }}>
              </div>
              
              <div className="relative bg-white rounded-3xl p-6 border border-gray-100 group-hover:border-transparent group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-2xl" style={{ background: getGradient(pkg.type) }}>
                  <img src={pkg.icon} alt={pkg.platform} className="w-10 h-10" />
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-black text-[#020A1B] mb-1">{pkg.platform}</h3>
                  <p className="text-sm text-[#FF00C8] font-semibold">{pkg.service}</p>
                </div>

                <p className="text-sm text-[#64748B] text-center mb-4">{pkg.description}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {pkg.services.slice(0, 4).map((service) => (
                    <span key={service} className="px-2 py-1 text-xs bg-gray-100 text-[#64748B] rounded-lg">
                      {service}
                    </span>
                  ))}
                  {pkg.services.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-[#64748B] rounded-lg">
                      +{pkg.services.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); navigate('/dashboard'); }}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:shadow-lg"
                  style={{ background: getGradient(pkg.type) }}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#64748B] mb-4">Ready to Take the Spotlight on Social Media?</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white hover:shadow-xl hover:shadow-[#FF00C8]/30 transition-all"
          >
            Step Into the Spotlight
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingPackage;