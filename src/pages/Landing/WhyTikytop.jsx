import React from 'react';

const WHY_TIKYTOP_CONTENT = {
  title: "Why 50,000+ Creators Chose TikyTop",
  subtitle: "Real results. Real followers. No tricks. Here's what sets us apart.",
  features: [
    {
      icon: "🛡️",
      title: "100% Account Safe",
      desc: "Real followers, nothing bot-like. Your account stays secure, always.",
      stat: "0 bans since 2019",
      type: "safety"
    },
    {
      icon: "⚡",
      title: "Results in Hours",
      desc: "Most orders deliver within minutes. No waiting days for results.",
      stat: "2.3hr avg. delivery",
      type: "speed"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      desc: "Engaged followers who actually like, comment, and share your content.",
      stat: "8.2% engagement rate",
      type: "quality"
    },
    {
      icon: "💰",
      title: "Start at Just $2",
      desc: "Test the waters without breaking the bank. Scale up as you see results.",
      stat: "Plans from $2",
      type: "price"
    },
    {
      icon: "🔄",
      title: "Free Refills",
      desc: "Followers drop? We refill free within 30 days. No questions asked.",
      stat: "18% avg. refill",
      type: "refund"
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "Real humans, real help. Get answers in minutes, not days.",
      stat: "4.9/5 support rating",
      type: "support"
    }
  ],
  cta: "Join 50,000+ Creators"
};

const WhyTikytop = () => {
    const { title, subtitle, features } = WHY_TIKYTOP_CONTENT;

    const getIcon = (type, color) => {
        const props = { className: "w-12 h-12", stroke: color, strokeWidth: 1.8, fill: "none" };
        switch (type) {
            case 'safety':
                return (
                    <svg {...props} viewBox="0 0 48 48">
                        <path d="M24 4L8 10v14c0 10 7 18.5 16 21 9-2.5 16-11 16-21V10L24 4z" />
                        <path d="M16 24l5 5 11-11" />
                    </svg>
                );
            case 'quality':
                return (
                    <svg {...props} viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="18" />
                        <path d="M24 14l3 7h7l-5.5 4.5 2 7L24 28l-6.5 4.5 2-7L14 21h7z" />
                    </svg>
                );
            case 'price':
                return (
                    <svg {...props} viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="18" />
                        <path d="M24 14v20M19 18c0-2.2 2.2-4 5-4s5 1.8 5 4-2.2 4-5 4-5 1.8-5 4 2.2 4 5 4 5-1.8 5-4" />
                    </svg>
                );
            case 'speed':
                return (
                    <svg {...props} viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="18" />
                        <polyline points="24 14 24 24 30 30" />
                    </svg>
                );
            case 'refund':
                return (
                    <svg {...props} viewBox="0 0 48 48">
                        <path d="M10 24a14 14 0 0114-14c4.3 0 8.1 1.9 10.7 5" />
                        <path d="M38 24a14 14 0 01-14 14c-4.3 0-8.1-1.9-10.7-5" />
                        <polyline points="34 15 34.7 20 29.7 20.7" />
                    </svg>
                );
            case 'support':
                return (
                    <svg {...props} viewBox="0 0 48 48">
                        <path d="M10 30a14 14 0 1028 0c0-7.7-6.3-14-14-14S10 22.3 10 30z" />
                        <path d="M10 30c0 4 1.8 7.5 4.5 9.8" />
                        <path d="M38 30c0 4-1.8 7.5-4.5 9.8" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#020A1B] tracking-tight">
                        {title.split('TikyTop').map((text, i, arr) => (
                          <React.Fragment key={i}>
                            {text}
                            {i !== arr.length - 1 && <span className="text-[#FF00C8]">TikyTop</span>}
                          </React.Fragment>
                        ))}
                    </h2>
                    <p className="text-[#75819A] text-lg leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group rounded-[2.5rem] border border-gray-100 bg-white p-10 flex flex-col items-center text-center gap-6 hover:shadow-xl hover:border-[#FF00C8]/20 transition-all duration-300`}
                        >
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                {getIcon(feature.type, feature.color)}
                            </div>

                            <h3 className="text-xl font-bold text-[#020A1B] group-hover:text-[#FF00C8] transition-colors uppercase tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="text-[#75819A] text-[15px] leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTikytop;
