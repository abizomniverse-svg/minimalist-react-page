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
    default: return null;
  }
};

const platformBadgeColor = (platform) => {
  switch (platform) {
    case 'TikTok': return 'bg-black text-white';
    case 'Instagram': return 'bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white';
    case 'YouTube': return 'bg-[#FF0000] text-white';
    case 'LinkedIn': return 'bg-[#0A66C2] text-white';
    case 'Twitch': return 'bg-[#9146FF] text-white';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const TESTIMONIALS = [
  {
    name: 'Jessica Martinez',
    handle: '@jessmartinez',
    role: 'Content Creator',
    location: 'Los Angeles, CA',
    content:
      'Went from 500 to 152K TikTok followers in 3 weeks. Real, active accounts — engagement actually went up, not down. Already booked 4 brand deals.',
    avatar: 'https://i.pravatar.cc/150?u=jessicamartinez',
    rating: 5,
    platform: 'TikTok',
    growth: '+151.5K',
    metric: 'Followers',
    verified: true,
    daysAgo: 2,
  },
  {
    name: 'Marcus Chen',
    handle: '@marcus.threadco',
    role: 'Founder, ThreadCo',
    location: 'New York, NY',
    content:
      'I was skeptical. But our Instagram fashion brand jumped from 8K to 92K followers and online sales lifted 320% in one month. Customer support replied in minutes too.',
    avatar: 'https://i.pravatar.cc/150?u=marcuschen',
    rating: 5,
    platform: 'Instagram',
    growth: '+84K',
    metric: 'Followers',
    verified: true,
    daysAgo: 5,
  },
  {
    name: 'Sarah Williams',
    handle: '@sarahw.creates',
    role: 'YouTuber, 1.2M subs',
    location: 'Austin, TX',
    content:
      'Stuck at 100K subs for over a year. After the YouTube growth package I crossed 500K in two months and finally hit monetization tier 2. Game changer.',
    avatar: 'https://i.pravatar.cc/150?u=sarahwilliams',
    rating: 5,
    platform: 'YouTube',
    growth: '+412K',
    metric: 'Subscribers',
    verified: true,
    daysAgo: 8,
  },
  {
    name: 'David Park',
    handle: 'david-park-b2b',
    role: 'B2B Consultant',
    location: 'San Francisco, CA',
    content:
      'Built my LinkedIn from 800 to 26K connections in 9 weeks. Inbound leads from decision-makers tripled. Worth every dollar for B2B networking.',
    avatar: 'https://i.pravatar.cc/150?u=davidpark',
    rating: 5,
    platform: 'LinkedIn',
    growth: '+25.2K',
    metric: 'Connections',
    verified: true,
    daysAgo: 11,
  },
  {
    name: 'Emily Rodriguez',
    handle: '@emrodriguez',
    role: 'Lifestyle Influencer',
    location: 'Miami, FL',
    content:
      'Brand collaboration requests went from 2 a month to 20+. The growth feels organic — followers stay, like posts, and actually comment. 10/10.',
    avatar: 'https://i.pravatar.cc/150?u=emilyrodriguez',
    rating: 5,
    platform: 'Instagram',
    growth: '+208K',
    metric: 'Followers',
    verified: true,
    daysAgo: 14,
  },
  {
    name: 'James Wilson',
    handle: 'jameswplays',
    role: 'Twitch Streamer',
    location: 'Denver, CO',
    content:
      'Average concurrent viewers went from 40 to 600+ in a month. Hit Partner status faster than I ever thought possible. Subs are real and chatty.',
    avatar: 'https://i.pravatar.cc/150?u=jameswilson',
    rating: 5,
    platform: 'Twitch',
    growth: '+12.4K',
    metric: 'Followers',
    verified: true,
    daysAgo: 18,
  },
  {
    name: 'Amanda Foster',
    handle: '@amandafoster',
    role: 'Fashion Model',
    location: 'Paris, FR',
    content:
      'Two top fashion houses reached out within a week of hitting 200K. My agency renegotiated my rates upward. This honestly changed my career path.',
    avatar: 'https://i.pravatar.cc/150?u=amandafoster',
    rating: 5,
    platform: 'Instagram',
    growth: '+178K',
    metric: 'Followers',
    verified: true,
    daysAgo: 21,
  },
  {
    name: 'Ryan Thompson',
    handle: '@ryanfit',
    role: 'Fitness Coach',
    location: 'Toronto, CA',
    content:
      'Built a community of 51K loyal followers in 3 months. My online coaching slots fill within hours of opening. Best ROI I have ever made.',
    avatar: 'https://i.pravatar.cc/150?u=ryanthompson',
    rating: 5,
    platform: 'TikTok',
    growth: '+48.9K',
    metric: 'Followers',
    verified: true,
    daysAgo: 26,
  },
  {
    name: 'Priya Nair',
    handle: '@priya.cooks',
    role: 'Food Creator',
    location: 'London, UK',
    content:
      'My recipe reels suddenly started getting millions of views after the engagement boost. 3 cookbook publishers DMed me last month.',
    avatar: 'https://i.pravatar.cc/150?u=priyanair',
    rating: 5,
    platform: 'Instagram',
    growth: '+340K',
    metric: 'Reach',
    verified: true,
    daysAgo: 29,
  },
  {
    name: 'Lucas Pereira',
    handle: '@lucasbeats',
    role: 'Music Producer',
    location: 'São Paulo, BR',
    content:
      'YouTube views went up 8x in six weeks. Beats started selling on autopilot — I literally make money in my sleep now.',
    avatar: 'https://i.pravatar.cc/150?u=lucaspereira',
    rating: 5,
    platform: 'YouTube',
    growth: '+1.2M',
    metric: 'Views',
    verified: true,
    daysAgo: 33,
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#FFB800]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77 4.8 17.51l.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  const iconSrc = getPlatformIcon(t.platform);

  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] mx-2 sm:mx-3">
      <div className="h-full p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#FF00C8]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
              loading="lazy"
            />
            {t.verified && (
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#1D9BF0] rounded-full flex items-center justify-center ring-2 ring-white">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#020A1B] text-sm truncate">{t.name}</span>
            </div>
            <div className="text-xs text-[#75819A] truncate">{t.handle}</div>
          </div>

          <span
            className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full whitespace-nowrap ${platformBadgeColor(
              t.platform
            )}`}
          >
            {t.platform}
          </span>
        </div>

        {/* Stars + role */}
        <div className="flex items-center justify-between mb-3">
          <StarRow count={t.rating} />
          <span className="text-[11px] text-[#75819A]">{t.role}</span>
        </div>

        {/* Content */}
        <p className="text-[#374151] text-[13px] leading-relaxed mb-4 flex-1">
          "{t.content}"
        </p>

        {/* Growth metric */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <div className="text-[10px] text-[#75819A] uppercase tracking-wide">{t.metric}</div>
            <div className="font-black text-[#020A1B] text-base bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">
              {t.growth}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-[#75819A]">{t.location}</div>
            <div className="text-[10px] text-[#75819A]">{t.daysAgo}d ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  // Two rows scrolling in opposite directions for variety
  const rowA = [...TESTIMONIALS, ...TESTIMONIALS];
  const rowB = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FF00C8]/10 text-[#FF00C8] text-xs font-bold uppercase tracking-wider mb-3">
            ★ 4.9 / 5 from 12,400+ reviews
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#020A1B] tracking-tight px-2">
            Real Creators. Real Results.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 max-w-xl mx-auto px-4">
            Join over 2 million creators and brands who've transformed their social presence with TikyTop.
          </p>
        </motion.div>
      </div>

      {/* Row A — left to right */}
      <div className="relative mb-4 sm:mb-6">
        <div className="marquee-track-a flex w-max">
          {rowA.map((t, i) => (
            <TestimonialCard key={`a-${t.name}-${i}`} t={t} />
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAFBFC] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAFBFC] to-transparent pointer-events-none z-10" />
      </div>

      {/* Row B — right to left */}
      <div className="relative">
        <div className="marquee-track-b flex w-max">
          {rowB.map((t, i) => (
            <TestimonialCard key={`b-${t.name}-${i}`} t={t} />
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAFBFC] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAFBFC] to-transparent pointer-events-none z-10" />
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto mt-14 sm:mt-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { value: '2M+', label: 'Happy Creators' },
            { value: '50M+', label: 'Orders Delivered' },
            { value: '99.9%', label: 'Success Rate' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#75819A] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-track-a {
          animation: marquee-left 70s linear infinite;
          will-change: transform;
        }
        .marquee-track-b {
          animation: marquee-right 90s linear infinite;
          will-change: transform;
        }
        .marquee-track-a:hover,
        .marquee-track-b:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .marquee-track-a { animation-duration: 45s; }
          .marquee-track-b { animation-duration: 60s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track-a, .marquee-track-b { animation: none; }
        }
      `}</style>
    </section>
  );
}
