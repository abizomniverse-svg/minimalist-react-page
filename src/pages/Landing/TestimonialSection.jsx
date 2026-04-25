import React from 'react';
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

function TestimonialCard({ testimonial }) {
  const iconSrc = getPlatformIcon(testimonial.platform);
  const isSvg = typeof iconSrc === 'string' && iconSrc.includes('.svg');

  return (
    <div className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] mx-2 sm:mx-3">
      <div className="h-full p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-[#FF00C8]/20 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-[#FF00C8] text-sm">★</span>
            ))}
          </div>
          {isSvg ? (
            <img src={iconSrc} alt={testimonial.platform} className="w-5 h-5" />
          ) : (
            <span className="text-lg">{iconSrc}</span>
          )}
        </div>

        <p className="text-[#64748B] text-xs sm:text-[13px] leading-relaxed mb-4 line-clamp-3">
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
            loading="lazy"
          />
          <div className="min-w-0">
            <div className="font-semibold text-[#020A1B] text-sm truncate">{testimonial.name}</div>
            <div className="text-xs text-[#75819A] truncate">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  // Duplicate the list once — animation translates exactly -50% for a seamless loop
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FC 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#020A1B] tracking-tight px-2">
            What Our Esteemed Users Say About TikyTop
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-xl mx-auto px-4">
            Join over 2 million satisfied creators who've transformed their social presence
          </p>
        </motion.div>
      </div>

      <div className="relative group">
        <div className="marquee-track flex w-max">
          {loop.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F8F9FC] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F8F9FC] to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-4xl mx-auto mt-10 sm:mt-12 px-4">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-6 sm:gap-8 md:gap-16">
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation: marquee-scroll 60s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 40s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
