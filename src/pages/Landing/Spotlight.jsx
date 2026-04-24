import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SPOTLIGHT_CONTENT = {
    badge: "Elite Growth Platform",
    title: "Ready to Dominate Social Media?",
    subtitle: "Transform your social media presence from ordinary to extraordinary with TikyTop's premium growth solutions. Our AI-powered platform delivers guaranteed results, helping creators, influencers, and brands achieve viral success. Join the elite circle of social media powerhouses who've chosen TikyTop for unparalleled growth across TikTok, Instagram, and YouTube. Experience the difference that premium quality and cutting-edge technology makes.",
    buttonText: "Join Elite Growth",
    stats: [
        { number: "10M+", label: "Engagements Delivered" },
        { number: "99.9%", label: "Uptime Guarantee" },
        { number: "50K+", label: "Success Stories" }
    ]
};

const Spotlight = () => {
    const { badge, title, subtitle, buttonText, stats } = SPOTLIGHT_CONTENT;

    return (
        <section className="py-24 px-5 bg-white flex justify-center relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,0,200,0.2) 50%, rgba(2,10,27,0.05) 100%)'
                 }}>
            <div className="w-full max-w-7xl bg-gradient-to-br from-[#020A1B] via-[#0A0F1B] to-[#020A1B] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-[#FF00C8]/20">
                {/* Enhanced Neon Accents */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF00C8]/20 to-transparent pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00F5D4]/15 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#A6FF00]/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-20 w-2 h-2 bg-[#FF00C8] rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-40 right-40 w-1 h-1 bg-[#00F5D4] rounded-full opacity-40 animate-ping" style={{ animationDelay: '3s' }}></div>
                    <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-[#A6FF00] rounded-full opacity-50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF00C8]/20 to-[#00F5D4]/20 backdrop-blur-md text-white text-sm font-black tracking-wider uppercase border border-white/30 shadow-lg"
                    >
                        {badge}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.05]"
                    >
                        {title.split('Social Media?').map((text, i) => (
                            <React.Fragment key={i}>
                                {text}
                                {i === 0 && <span className="bg-gradient-to-r from-[#00F5D4] to-[#A6FF00] bg-clip-text text-transparent">Social Media?</span>}
                            </React.Fragment>
                        ))}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium max-w-4xl"
                    >
                        {subtitle}
                    </motion.p>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-8 mt-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="pt-8"
                    >
                        <Link
                            to="/register"
                            className="inline-block px-16 py-6 bg-gradient-to-r from-white to-slate-100 text-[#020A1B] rounded-full text-xl font-black hover:from-[#FF00C8] hover:to-[#D600A7] hover:text-white transition-all duration-500 shadow-2xl hover:shadow-pink-500/50 hover:scale-110 hover:-translate-y-2 uppercase tracking-wider"
                        >
                            {buttonText}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
