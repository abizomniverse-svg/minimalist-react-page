import React from 'react';
import { motion } from 'framer-motion';

const TARGETED_AUDIENCE_CONTENT = {
  title: "TikyTop Growth: Who Can Benefit the Most?",
  subtitle: "Whether you're just starting out or looking to scale, our tailored social media growth services are designed to help you reach your maximum potential.",
  beneficiaries: [
    {
      title: "Influencers",
      description: "Grow your personal brand and boost engagement metrics to attract premium brand deals and high-value partnerships.",
      color: "#FF00C8",
      icon: "✨"
    },
    {
      title: "Businesses",
      description: "Strengthen your social proof and build immediate trust with potential customers by showcasing a thriving social presence.",
      color: "#00F5D4",
      icon: "🏢"
    },
    {
      title: "Content Creators",
      description: "Break through the algorithm and ensure your hard work reaches the wider audience it deserves across all major platforms.",
      color: "#A6FF00",
      icon: "🎨"
    },
    {
      title: "Startups",
      description: "Gain rapid visibility in a crowded market and establish industry credibility from day one with targeted growth strategies.",
      color: "#FF00C8",
      icon: "🚀"
    },
    {
      title: "Agencies",
      description: "Scale your clients' social media presence efficiently and deliver consistent, impressive results that drive long-term retention.",
      color: "#00F5D4",
      icon: "🤝"
    },
    {
      title: "Profiles",
      description: "Enhance your online reputation and make a lasting impression on visitors with a profile that reflects your true potential.",
      color: "#A6FF00",
      icon: "👤"
    }
  ]
};

const TargetedAudience = () => {
    const { title, subtitle, beneficiaries } = TARGETED_AUDIENCE_CONTENT;

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
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="targeted-audience" className="py-24 md:py-32 px-5 bg-white relative overflow-hidden">
            <div className="max-w-[1300px] mx-auto relative z-10">
                <motion.div
                    className="text-center max-w-[900px] mx-auto mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-[#020A1B] leading-tight mb-6 tracking-tighter">
                        {title.split(': ').map((text, i) => (
                            <React.Fragment key={i}>
                                {i === 0 ? text + ': ' : <span className="text-[#FF00C8]">{text}</span>}
                            </React.Fragment>
                        ))}
                    </h2>
                    <p className="font-main text-lg md:text-xl text-[#75819A] leading-relaxed font-semibold">
                        {subtitle}
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {beneficiaries.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-12 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-[#FF00C8]/20 flex flex-col h-full shadow-sm"
                        >
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-8 bg-gray-50 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6 text-[#FF00C8]">
                                {item.icon}
                            </div>
                            
                            <h3 className="font-heading text-2xl font-bold text-[#020A1B] mb-4 flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {item.title}
                            </h3>
                            
                            <p className="font-main text-lg text-[#75819A] leading-relaxed italic font-medium">
                                "{item.description}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TargetedAudience;
