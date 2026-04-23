import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICES_CONTENT = {
  title: "Our Comprehensive Growth Services",
  subtitle: "Explore our full range of social media growth services designed to elevate your presence across all major platforms.",
  platforms: [
    {
      name: "TikTok",
      color: "#FF00C8",
      icon: "🎵",
      services: [
        "Buy TikTok Likes",
        "Buy TikTok Views", 
        "Buy TikTok Followers/Fans",
        "Buy TikTok Comments",
        "Buy TikTok Saves",
        "Buy TikTok Shares",
        "Buy TikTok Mentions"
      ]
    },
    {
      name: "Instagram",
      color: "#00F5D4",
      icon: "📸",
      services: [
        "Buy Instagram Likes",
        "Buy Instagram Followers",
        "Buy Instagram Impressions",
        "Buy Instagram Reach",
        "Buy Instagram Story Views",
        "Buy Instagram Story Likes",
        "Buy Instagram Reels Likes",
        "Buy Instagram Reels Views",
        "Buy Instagram Reels Shares",
        "Buy Instagram Reels Saves"
      ]
    },
    {
      name: "YouTube",
      color: "#A6FF00",
      icon: "▶️",
      services: [
        "Buy YouTube Shorts Likes",
        "Buy YouTube Shorts Views",
        "Buy YouTube Video Likes",
        "Buy YouTube Video Views"
      ]
    },
    {
      name: "Facebook",
      color: "#FF6B35",
      icon: "📘",
      services: [
        "Buy Facebook Page Likes",
        "Buy Facebook Post Likes",
        "Buy Facebook Post Views",
        "Buy Facebook Video Views",
        "Buy Facebook Event Responses"
      ]
    }
  ]
};

const ServicesSection = () => {
  const { title, subtitle, platforms } = SERVICES_CONTENT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-5 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-[#020A1B] leading-tight mb-6 tracking-tighter">
            {title}
          </h2>
          <p className="font-main text-lg md:text-xl text-[#75819A] leading-relaxed font-semibold">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platforms.map((platform, platformIndex) => (
            <motion.div
              key={platform.name}
              variants={cardVariants}
              className="group border border-gray-100 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-[#FF00C8]/20 flex flex-col h-full"
              custom={platformIndex}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 bg-[${platform.color}]/10`}>
                  {platform.icon}
                </div>
                <h3 className={`text-2xl font-bold text-[#020A1B] group-hover:text-[#FF00C8] transition-colors`}>
                  {platform.name}
                </h3>
              </div>
              
              <div className="flex-1 space-y-3">
                {platform.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex} 
                    className="flex items-start space-x-3 text-[#64748B] font-medium"
                  >
                    <span className="flex-shrink-0 mt-[3px]">
                      •
                    </span>
                    <span>
                      {service}
                    </span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/order" 
                className="mt-6 inline-block px-6 py-3 bg-[#020A1B] text-white text-sm font-semibold rounded-full hover:bg-[#FF00C8] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;