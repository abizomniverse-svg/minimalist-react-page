import { motion } from 'framer-motion';

const TESTIMONIALS_CONTENT = {
  title: "Elite Creators Share Their Success",
  subtitle: "Join the ranks of successful creators who've transformed their social media presence with TikyTop's premium growth solutions.",
  testimonials: [
    {
      name: "Alex Rivera",
      role: "Digital Marketing Director",
      content: "TikyTop's premium AI-powered growth platform delivered 300% better results than traditional methods. Our client's TikTok following exploded from 50K to 250K in just 8 weeks. The analytics dashboard is incredible - we can track every engagement in real-time.",
      avatar: "https://i.pravatar.cc/150?u=alex",
      rating: 5,
      platform: "TikTok",
      growth: "+200K followers",
      timeframe: "8 weeks"
    },
    {
      name: "Sarah Chen",
      role: "Lifestyle Influencer",
      content: "As someone who's tried every growth service, TikyTop stands apart. Their smart targeting delivered exactly the right audience for my content. I went from struggling to get brand deals to having companies reach out daily. The premium support team is always there when I need them.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
      platform: "Instagram",
      growth: "+150K followers",
      timeframe: "6 weeks"
    },
    {
      name: "Marcus Thorne",
      role: "Tech Startup CEO",
      content: "Building credibility in the B2B space is tough. TikyTop helped us establish thought leadership on LinkedIn and grow our professional network exponentially. The premium analytics showed us exactly which content resonates with our target audience. ROI has been exceptional.",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      rating: 5,
      platform: "LinkedIn",
      growth: "+50K connections",
      timeframe: "10 weeks"
    },
    {
      name: "Emma Rodriguez",
      role: "Fashion Designer",
      content: "TikyTop transformed my small fashion brand into a recognized name. The premium targeting reached fashion enthusiasts who actually buy. Our sales increased 400% after implementing their growth strategy. Worth every penny of the premium investment.",
      avatar: "https://i.pravatar.cc/150?u=emma",
      rating: 5,
      platform: "Instagram",
      growth: "+300K followers",
      timeframe: "12 weeks"
    },
    {
      name: "David Kim",
      role: "YouTube Content Creator",
      content: "I was stuck at 100K subscribers for over a year. TikyTop's premium growth solution not only boosted my subscriber count to 500K but also improved my engagement rate dramatically. The AI targeting is next-level - it knows my audience better than I do.",
      avatar: "https://i.pravatar.cc/150?u=david",
      rating: 5,
      platform: "YouTube",
      growth: "+400K subscribers",
      timeframe: "14 weeks"
    },
    {
      name: "Lisa Wang",
      role: "Non-Profit Director",
      content: "Even non-profits need visibility. TikyTop helped us reach our fundraising goals by growing our social presence authentically. The premium targeting ensured we connected with genuinely interested supporters. Our donation conversion rate tripled.",
      avatar: "https://i.pravatar.cc/150?u=lisa",
      rating: 5,
      platform: "Facebook",
      growth: "+75K followers",
      timeframe: "9 weeks"
    }
  ]
};

export default function TestimonialSection() {
    const { title, subtitle, testimonials } = TESTIMONIALS_CONTENT;

    return (
        <section id="testimonials" className="py-24 md:py-32 px-5 relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,0,200,0.1) 50%, rgba(2,10,27,0.02) 100%)'
                 }}>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#020A1B] mb-6 tracking-tight leading-[1.1]">
                        {title.split('Creators & Brands').map((text, i, arr) => (
                          <span key={i}>
                            {text}
                            {i !== arr.length - 1 && <span className="text-[#FF00C8]">Creators & Brands</span>}
                          </span>
                        ))}
                    </h2>
                    <p className="text-lg md:text-xl text-[#75819A] max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="bg-white/80 backdrop-blur-lg p-10 rounded-[2.5rem] border border-white/50 relative group flex flex-col h-full shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,0,200,0.05) 100%)'
                            }}
                        >
                            <div className="absolute top-10 right-10 text-[#FF00C8]/10 group-hover:text-[#FF00C8] transition-colors duration-300 group-hover:opacity-100">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V14C14.017 15.1046 13.1216 16 12.017 16H10.017C9.46472 16 9.017 16.4477 9.017 17V21M14.017 21H10.017M5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V14C5.017 15.1046 4.12158 16 3.017 16H1.017C0.464722 16 0.017 16.4477 0.017 17V21M5.017 21H1.017" />
                                </svg>
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#A6FF00] fill-current drop-shadow-[0_0_5px_rgba(166,255,0,0.3)]" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-black text-[#FF00C8] uppercase tracking-wider">{testimonial.platform}</div>
                                    <div className="text-xs text-[#75819A] font-semibold">{testimonial.timeframe}</div>
                                </div>
                            </div>

                            {/* Growth Stats */}
                            <div className="bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-2xl p-4 mb-6 border border-[#FF00C8]/20">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-[#020A1B]">{testimonial.growth}</div>
                                    <div className="text-sm font-semibold text-[#75819A]">Growth Achieved</div>
                                </div>
                            </div>

                            <p className="text-[#64748B] text-base font-medium leading-relaxed mb-8 flex-grow">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center mt-auto">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-16 h-16 rounded-2xl border-2 border-white shadow-md p-0.5 object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="font-bold text-[#020A1B] text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-[#FF00C8] font-bold tracking-wider uppercase">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
