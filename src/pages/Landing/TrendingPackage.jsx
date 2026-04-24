import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TRENDING_PACKAGES = {
  sectionTitle: "Most Popular Packages",
  sectionSubtitle: "Join 2.4 million orders delivered. Pick your starting point.",
  buttonText: "Get Started",
  features: "Instant delivery • 30-day refill guarantee",
  packages: [
    {
      id: "tiktok-followers",
      platform: "TikTok",
      service: "Followers",
      price: "$5.60",
      originalPrice: "$8.99",
      description: "Real followers who engage with your content. No bots, no drops.",
      type: "tiktok",
      badge: "MOST POPULAR",
      features: ["Real followers", "No password needed", "Delivery in minutes", "30-day refill", "Track in dashboard"],
      orders: "847K+ orders"
    },
    {
      id: "instagram-likes",
      platform: "Instagram", 
      service: "Likes",
      price: "$2.99",
      originalPrice: "$4.99",
      description: "High-quality likes from active accounts. Boosts your reach instantly.",
      type: "instagram",
      badge: "BEST VALUE",
      features: ["Active accounts", "No password needed", "Instant start", "Refill included", "See likes grow"],
      orders: "623K+ orders"
    },
    {
      id: "youtube-subscribers",
      platform: "YouTube",
      service: "Subscribers", 
      price: "$13.90",
      originalPrice: "$24.99",
      description: "Genuine subscribers who actually watch and engage with your videos.",
      type: "youtube",
      badge: "FASTEST GROWTH",
      features: ["Real subscribers", "Watch your videos", "Monetization ready", "Detailed analytics", "Priority support"],
      orders: "412K+ orders"
    }
  ]
};

const TrendingPackage = () => {
    const { packages, sectionTitle, sectionSubtitle, buttonText } = TRENDING_PACKAGES;

    const getPlatformIcon = (type) => {
        const props = { width: "32", height: "32", fill: "white" };
        switch (type) {
            case 'tiktok':
                return (
                    <svg {...props} viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.62 4.19.94 1.13 2.22 1.95 3.63 2.37.01 1.36.01 2.72 0 4.08-.94-.13-1.89-.4-2.73-.85-.85-.46-1.6-1.12-2.14-1.92-.01 2.3 0 4.6-.01 6.89-.04 1.25-.33 2.49-.87 3.61-.43.89-1.07 1.67-1.87 2.25-1.08.79-2.39 1.25-3.74 1.35-1.39.11-2.82-.13-4.1-.73-1.3-.61-2.42-1.63-3.15-2.89-.69-1.2-.95-2.61-.74-3.98.15-1.02.57-1.99 1.19-2.82.78-1.03 1.83-1.84 3.03-2.3.47-.18.96-.32 1.45-.4.01 1.43 0 2.87.01 4.3-.47.11-.92.3-1.32.58-.57.39-.99.96-1.18 1.61-.25.86-.06 1.83.5 2.53.51.64 1.32 1.01 2.14 1.01.83.01 1.65-.33 2.2-.95.54-.6.82-1.4.81-2.21V.02z" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                );
            case 'youtube':
                return (
                    <svg {...props} viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1],
            },
        }),
    };

    return (
        <section className="py-24 md:py-32 px-5 text-center" 
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,0,200,0.25) 50%, rgba(2,10,27,0.1) 100%)',
                   minHeight: '100vh',
                   position: 'relative',
                   overflow: 'hidden'
                 }}>
            <div className="mb-16 max-w-[800px] mx-auto">
                <motion.h2 
                    className="text-4xl md:text-5xl font-extrabold text-[#020A1B] mb-6 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {sectionTitle}
                </motion.h2>
                <motion.p 
                    className="text-lg text-[#75819A] leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {sectionSubtitle}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {packages.map((pkg, index) => {
                    const brandColor = pkg.type === 'instagram' ? '#00F5D4' : pkg.type === 'tiktok' ? '#FF00C8' : '#A6FF00';
                    const iconBg = pkg.type === 'instagram' ? 'linear-gradient(45deg, #00F5D4, #405DE6)' : pkg.type === 'tiktok' ? 'linear-gradient(45deg, #FF00C8, #7E22CE)' : 'linear-gradient(45deg, #A6FF00, #00F5D4)';

                    return (
                        <motion.div
                            key={pkg.id}
                            className="group bg-white rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-300 border border-gray-100 flex flex-col items-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-[#FF00C8]/20"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true }}
                        >
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 shadow-lg" 
                                 style={{ background: iconBg }}>
                                {getPlatformIcon(pkg.type)}
                            </div>
                            
                            <span className="text-base font-black uppercase tracking-[0.25em] mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 border border-[#FF00C8]/20" style={{ color: brandColor }}>
                                {pkg.platform} {pkg.service}
                            </span>
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-4xl font-black text-[#020A1B]">Starting at {pkg.price}</h3>
                              <div className="bg-[#FF6B35] text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                                🔥 LIMITED
                              </div>
                            </div>

                            <p className="text-[#75819A] leading-relaxed mb-8 flex-grow font-medium text-lg">{pkg.description}</p>
                            
                            <ul className="w-full text-left mb-10 flex flex-col gap-3">
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center text-[#64748B] font-medium text-sm">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="space-y-3">
                              <Link
                                to={`/order/${pkg.id}`}
                                className="w-full py-5 rounded-2xl font-black text-xl cursor-pointer transition-all duration-300 text-white flex items-center justify-center gap-3 shadow-2xl hover:shadow-pink-500/25 hover:scale-105 relative overflow-hidden group"
                                style={{ background: iconBg }}
                              >
                                {buttonText}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                              </Link>
                              <div className="text-center">
                                <span className="text-xs text-[#FF6B35] font-bold bg-[#FF6B35]/10 px-3 py-1 rounded-full">
                                  ⏰ Offer expires in 24 hours
                                </span>
                              </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default TrendingPackage;
