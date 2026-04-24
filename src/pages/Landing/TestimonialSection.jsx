import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import TikTokIcon from '../../assets/icon/icons8-tiktok-50.svg';
import InstagramIcon from '../../assets/icon/icons8-instagram-50.svg';
import YouTubeIcon from '../../assets/icon/icons8-youtube-50.svg';

const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'TikTok': return TikTokIcon;
    case 'Instagram': return InstagramIcon;
    case 'YouTube': return YouTubeIcon;
    case 'Twitch': return '🎮';
    case 'LinkedIn': return '💼';
    default: return '📱';
  }
};

const TESTIMONIALS_CONTENT = {
  title: "What Our Esteemed Users Say About TikyTop",
  subtitle: "Join over 2 million satisfied creators who've transformed their social presence.",
  testimonials: [
    {
      name: "Jessica Martinez",
      role: "Content Creator",
      content: "My TikTok went from 500 to 150K followers in just 3 weeks. TikyTop delivered exactly what they promised. The engagement is real and my videos now consistently hit the FYP!",
      avatar: "https://i.pravatar.cc/150?u=jessica",
      rating: 5,
      platform: "TikTok",
      growth: "+149.5K"
    },
    {
      name: "Marcus Chen",
      role: "Business Owner",
      content: "Used their Instagram service for my fashion brand. Sales increased 320% in one month. The targeting was incredibly accurate - reached actual potential customers who converted to buyers.",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      rating: 5,
      platform: "Instagram",
      growth: "+85K"
    },
    {
      name: "Sarah Williams",
      role: "YouTuber",
      content: "Hit 500K subscribers after being stuck at 100K for a year. These are real people who actually watch and engage. Monetization is now possible thanks to TikyTop!",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
      platform: "YouTube",
      growth: "+400K"
    },
    {
      name: "David Park",
      role: "Entrepreneur",
      content: "Built my LinkedIn from scratch to 25K connections in 2 months. Perfect for B2B networking. The quality is unmatched - all real professionals.",
      avatar: "https://i.pravatar.cc/150?u=david",
      rating: 5,
      platform: "LinkedIn",
      growth: "+25K"
    },
    {
      name: "Emily Rodriguez",
      role: "Influencer",
      content: "Brand deals have increased 10x since using TikyTop. Brands take you seriously when you have the follower count. Best investment for my career!",
      avatar: "https://i.pravatar.cc/150?u=emily",
      rating: 5,
      platform: "Instagram",
      growth: "+200K"
    },
    {
      name: "James Wilson",
      role: "Streamer",
      content: "My Twitch community grew 5x in a month. Real viewers who actually interact in chat. The algorithm boost helped me get discovered!",
      avatar: "https://i.pravatar.cc/150?u=james",
      rating: 5,
      platform: "Twitch",
      growth: "+12K"
    },
    {
      name: "Amanda Foster",
      role: "Model",
      content: "Fashion brands now reach out daily for collaborations. My follower count opened doors I never knew existed. Life-changing service!",
      avatar: "https://i.pravatar.cc/150?u=amanda",
      rating: 5,
      platform: "Instagram",
      growth: "+175K"
    },
    {
      name: "Ryan Thompson",
      role: "Fitness Coach",
      content: "Built a loyal community of 50K within 3 months. My online coaching business is now thriving thanks to the exposure TikyTop provided!",
      avatar: "https://i.pravatar.cc/150?u=ryan",
      rating: 5,
      platform: "TikTok",
      growth: "+48K"
    }
  ]
};

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="flex-shrink-0 w-80 md:w-96 mx-3"
    >
      <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-[#A6FF00] text-lg">★</span>
            ))}
          </div>
          {typeof getPlatformIcon(testimonial.platform) === 'string' ? (
            <span className="text-2xl">{getPlatformIcon(testimonial.platform)}</span>
          ) : (
            <img src={getPlatformIcon(testimonial.platform)} alt={testimonial.platform} className="w-6 h-6" />
          )}
        </div>

        {/* Content */}
        <p className="text-[#64748B] text-sm leading-relaxed mb-5 line-clamp-4">
          "{testimonial.content}"
        </p>

        {/* Growth */}
        <div className="bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#75819A]">{testimonial.platform}</span>
            <span className="text-lg font-black text-[#020A1B]">{testimonial.growth}</span>
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full border-2 border-white shadow"
          />
          <div>
            <div className="font-bold text-[#020A1B]">{testimonial.name}</div>
            <div className="text-xs text-[#75819A]">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialSection() {
  const { title, subtitle, testimonials } = TESTIMONIALS_CONTENT;
  const containerRef = useRef(null);

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const cardWidth = 380;
  const totalWidth = duplicatedTestimonials.length * cardWidth;

  return (
    <section id="testimonials" className="py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#020A1B] tracking-tight">
            {title}
          </h2>
          <p className="text-[#75819A] mt-3 font-medium max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll */}
      <div className="relative testimonials-track">
        <motion.div
          ref={containerRef}
          className="flex"
          animate={{ x: [0, -totalWidth / 2] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} index={index % testimonials.length} />
          ))}
        </motion.div>

        {/* Gradient Overlay Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none z-10"></div>
        
        {/* Gradient Overlay Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "2M+", label: "Happy Users" },
            { value: "50M+", label: "Orders Delivered" },
            { value: "99.9%", label: "Success Rate" },
            { value: "4.9/5", label: "User Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#FF00C8] to-[#00F5D4]">
                {stat.value}
              </div>
              <div className="text-sm text-[#75819A]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}