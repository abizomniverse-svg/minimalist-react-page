import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TikTokIcon from '../../assets/icon/icons8-tiktok-50.svg';
import InstagramIcon from '../../assets/icon/icons8-instagram-50.svg';
import YouTubeIcon from '../../assets/icon/icons8-youtube-50.svg';

const TRENDING_PACKAGES = {
  sectionTitle: "Elite Growth Packages",
  sectionSubtitle: "Join 2.4 million satisfied users worldwide.",
  packages: [
    {
      id: "tiktok-followers",
      platform: "TikTok",
      service: "Followers",
      price: "$5.60",
      originalPrice: "$8.99",
      type: "tiktok",
      badge: "TOP SELLER",
      icon: TikTokIcon,
      orders: "847K+"
    },
    {
      id: "instagram-likes",
      platform: "Instagram", 
      service: "Likes",
      price: "$2.99",
      originalPrice: "$4.99",
      type: "instagram",
      badge: "BEST VALUE",
      icon: InstagramIcon,
      orders: "623K+"
    },
    {
      id: "youtube-subscribers",
      platform: "YouTube",
      service: "Subscribers", 
      price: "$13.90",
      originalPrice: "$24.99",
      type: "youtube",
      badge: "FASTEST",
      icon: YouTubeIcon,
      orders: "412K+"
    }
  ]
};

const TrendingPackage = () => {
  const navigate = useNavigate();
  const { packages, sectionTitle, sectionSubtitle } = TRENDING_PACKAGES;

  const getGradient = (type) => {
    switch (type) {
      case 'tiktok': return 'linear-gradient(135deg, #FF00C8 0%, #7E22CE 100%)';
      case 'instagram': return 'linear-gradient(135deg, #00F5D4 0%, #405DE6 100%)';
      case 'youtube': return 'linear-gradient(135deg, #A6FF00 0%, #22C55E 100%)';
      default: return 'linear-gradient(135deg, #FF00C8 0%, #00F5D4 100%)';
    }
  };

  return (
    <section id="packages" className="py-16 px-5 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 50%, #F8F9FC 100%)' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-[#020A1B] tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-sm text-[#75819A] mt-2 font-medium max-w-xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/dashboard')}
              className="bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-white/40 cursor-pointer"
            >
              <div className="p-5 text-center flex flex-col items-center" style={{ background: getGradient(pkg.type) }}>
                <img src={pkg.icon} alt={pkg.platform} className="w-12 h-12 mb-2" />
                <span className="text-white font-bold">{pkg.platform}</span>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-black text-[#020A1B] mb-1">{pkg.service}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl font-black text-[#020A1B]">{pkg.price}</span>
                  <span className="text-xs text-gray-400 line-through">{pkg.originalPrice}</span>
                </div>
                <div className="text-xs text-[#75819A] mb-3">
                  <span className="font-bold text-[#FF00C8]">{pkg.orders}</span> orders
                </div>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-2 rounded-lg font-bold text-sm text-white transition-all"
                  style={{ background: getGradient(pkg.type) }}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPackage;