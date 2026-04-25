import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TikTokIcon from '../../assets/icon/icons8-tiktok-50.svg';
import InstagramIcon from '../../assets/icon/icons8-instagram-50.svg';
import YouTubeIcon from '../../assets/icon/icons8-youtube-50.svg';

const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'TikTok': return TikTokIcon;
    case 'Instagram': return InstagramIcon;
    case 'YouTube': return YouTubeIcon;
    default: return '📱';
  }
};

const TESTIMONIALS = [
  {
    name: "Jessica Martinez",
    role: "Content Creator",
    content: "My TikTok went from 500 to 150K followers in just 3 weeks. TikyTop delivered exactly what they promised.",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    rating: 5,
    platform: "TikTok",
    growth: "+149.5K"
  },
  {
    name: "Marcus Chen",
    role: "Business Owner",
    content: "Used their Instagram service for my fashion brand. Sales increased 320% in one month.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    rating: 5,
    platform: "Instagram",
    growth: "+85K"
  },
  {
    name: "Sarah Williams",
    role: "YouTuber",
    content: "Hit 500K subscribers after being stuck at 100K for a year. Monetization is now possible!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    platform: "YouTube",
    growth: "+400K"
  },
  {
    name: "David Park",
    role: "Entrepreneur",
    content: "Built my LinkedIn from scratch to 25K connections in 2 months. Perfect for B2B networking.",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5,
    platform: "LinkedIn",
    growth: "+25K"
  },
  {
    name: "Emily Rodriguez",
    role: "Influencer",
    content: "Brand deals have increased 10x since using TikyTop. Best investment for my career!",
    avatar: "https://i.pravatar.cc/150?u=emily",
    rating: 5,
    platform: "Instagram",
    growth: "+200K"
  },
  {
    name: "James Wilson",
    role: "Streamer",
    content: "My Twitch community grew 5x in a month. Real viewers who actually interact in chat.",
    avatar: "https://i.pravatar.cc/150?u=james",
    rating: 5,
    platform: "Twitch",
    growth: "+12K"
  },
  {
    name: "Amanda Foster",
    role: "Model",
    content: "Fashion brands now reach out daily for collaborations. Life-changing service!",
    avatar: "https://i.pravatar.cc/150?u=amanda",
    rating: 5,
    platform: "Instagram",
    growth: "+175K"
  },
  {
    name: "Ryan Thompson",
    role: "Fitness Coach",
    content: "Built a loyal community of 50K within 3 months. My online coaching business is thriving!",
    avatar: "https://i.pravatar.cc/150?u=ryan",
    rating: 5,
    platform: "TikTok",
    growth: "+48K"
  }
];

function TestimonialCard({ testimonial, index }) {
  const isSvg = typeof getPlatformIcon(testimonial.platform) !== 'string';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="flex-shrink-0 w-72 mx-3"
    >
      <div className="h-full p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#FF00C8]/20 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-[#FF00C8] text-sm">★</span>
            ))}
          </div>
          {isSvg ? (
            <img src={getPlatformIcon(testimonial.platform)} alt={testimonial.platform} className="w-5 h-5" />
          ) : (
            <span className="text-lg">{getPlatformIcon(testimonial.platform)}</span>
          )}
        </div>

        <p className="text-[#64748B] text-xs leading-relaxed mb-4 line-clamp-3">
          "{testimonial.content}"
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-[#75819A]">{testimonial.platform}</span>
          <span className="text-sm font-black text-[#020A1B]">{testimonial.growth}</span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-9 h-9 rounded-full"
          />
          <div>
            <div className="font-semibold text-[#020A1B] text-sm">{testimonial.name}</div>
            <div className="text-xs text-[#75819A]">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialSection() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const cardWidth = 300;
  const totalCards = TESTIMONIALS.length * 3;
  const totalWidth = totalCards * cardWidth;
  const visibleWidth = totalWidth / 2;

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setOffset(prev => {
        const newOffset = prev + 1;
        return newOffset >= visibleWidth ? 0 : newOffset;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused, visibleWidth]);

  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section 
      id="testimonials" 
      className="py-16 relative"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FC 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-[#020A1B] tracking-tight">
            What Our Esteemed Users Say About TikyTop
          </h2>
          <p className="text-sm text-[#64748B] mt-2 max-w-xl mx-auto">
            Join over 2 million satisfied creators who've transformed their social presence
          </p>
        </motion.div>
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={containerRef}
          className="flex gap-3"
          style={{ 
            transform: `translateX(-${offset}px)`,
            transition: isPaused ? 'none' : 'transform 0.03s linear'
          }}
        >
          {duplicated.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.name}-${index}`} 
              testimonial={testimonial} 
              index={index % TESTIMONIALS.length} 
            />
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F8F9FC] to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F8F9FC] to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "2M+", label: "Happy Users" },
            { value: "50M+", label: "Orders" },
            { value: "99.9%", label: "Success" },
            { value: "4.9/5", label: "Rating" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-[#75819A]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}