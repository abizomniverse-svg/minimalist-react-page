import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TRENDING_PACKAGES = {
  sectionTitle: "Elite Growth Packages",
  sectionSubtitle: "Join 2.4 million satisfied users worldwide.",
  buttonText: "Order Now",
  badge: "FLASH SALE",
  packages: [
    {
      id: "tiktok-followers",
      platform: "TikTok",
      service: "Followers",
      price: "$5.60",
      originalPrice: "$8.99",
      description: "Real, engaged followers who interact with your content.",
      type: "tiktok",
      badge: "TOP SELLER",
      icon: "🎵",
      features: ["Real Accounts", "Instant Start", "30-Day Refill", "24/7 Support"],
      orders: "847K+"
    },
    {
      id: "instagram-likes",
      platform: "Instagram", 
      service: "Likes",
      price: "$2.99",
      originalPrice: "$4.99",
      description: "Premium likes from active, authentic accounts.",
      type: "instagram",
      badge: "BEST VALUE",
      icon: "📸",
      features: ["Active Users", "Instant Delivery", "No Drop Guarantee", "Cancel Anytime"],
      orders: "623K+"
    },
    {
      id: "youtube-subscribers",
      platform: "YouTube",
      service: "Subscribers", 
      price: "$13.90",
      originalPrice: "$24.99",
      description: "Genuine subscribers who watch and engage.",
      type: "youtube",
      badge: "FASTEST",
      icon: "▶️",
      features: ["Real Subs", "Monetization Ready", "Analytics", "Priority Support"],
      orders: "412K+"
    }
  ]
};

const TrendingPackage = () => {
  const { packages, sectionTitle, sectionSubtitle, buttonText } = TRENDING_PACKAGES;

  const getGradient = (type) => {
    switch (type) {
      case 'tiktok': return 'linear-gradient(135deg, #FF00C8 0%, #7E22CE 100%)';
      case 'instagram': return 'linear-gradient(135deg, #00F5D4 0%, #405DE6 100%)';
      case 'youtube': return 'linear-gradient(135deg, #A6FF00 0%, #22C55E 100%)';
      default: return 'linear-gradient(135deg, #FF00C8 0%, #00F5D4 100%)';
    }
  };

  return (
    <section id="packages" className="py-24 px-5 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 50%, #F8F9FC 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF00C8]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00F5D4]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF00C8] to-[#FF6B35] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <span>⚡</span>
            <span>{TRENDING_PACKAGES.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#020A1B] tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-lg text-[#75819A] mt-3 font-medium max-w-xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: index * 0.1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-900 text-white">
                  {pkg.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="p-6 text-center" style={{ background: getGradient(pkg.type) }}>
                <span className="text-5xl block mb-2">{pkg.icon}</span>
                <span className="text-white font-bold text-lg">{pkg.platform}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-[#020A1B] mb-1">{pkg.service}</h3>
                <p className="text-sm text-[#75819A] mb-4">{pkg.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-[#020A1B]">{pkg.price}</span>
                  <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <svg className="w-4 h-4 text-[#00F5D4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Orders */}
                <div className="text-xs text-[#75819A] mb-4">
                  <span className="font-bold text-[#FF00C8]">{pkg.orders}</span> orders placed
                </div>

                {/* Button */}
                <Link
                  to={`/order/${pkg.id}`}
                  className="block w-full py-3 rounded-xl font-bold text-center transition-all duration-300"
                  style={{ background: getGradient(pkg.type) }}
                >
                  {buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPackage;