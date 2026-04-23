import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SPOTLIGHT_CONTENT = {
    badge: "Premium Growth Solutions",
    title: "Ready to Take the Spotlight on Social Media?",
    subtitle: "Every creator, brand, or business wants to stand out and be recognised. With the right push, your content can reach more people, attract attention, and build a presence that turns profiles into popular platforms. At Tikytop, we help you move closer to that spotlight. Grow across TikTok, Instagram, YouTube, and Facebook with services designed to increase followers, likes, and views. Whether you want to buy TikTok likes, buy Instagram followers, buy YouTube views, or buy Facebook page likes, the right engagement can help your profile gain momentum and recognition.",
    buttonText: "Try TikyTop"
};

const Spotlight = () => {
    const { badge, title, subtitle, buttonText } = SPOTLIGHT_CONTENT;

    return (
        <section className="py-24 px-5 bg-white flex justify-center">
            <div className="w-full max-w-7xl bg-[#020A1B] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                {/* Neon Accents */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF00C8]/10 to-transparent pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00F5D4]/10 rounded-full blur-[80px]" />

                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold tracking-wider uppercase border border-white/20"
                    >
                        {badge}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
                    >
                        {title.split('Social Media?').map((text, i) => (
                            <React.Fragment key={i}>
                                {text}
                                {i === 0 && <span className="text-[#00F5D4]">Social Media?</span>}
                            </React.Fragment>
                        ))}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base text-slate-300 leading-relaxed font-medium"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="pt-6"
                    >
                        <Link
                            to="/register"
                            className="inline-block px-12 py-5 bg-white text-[#020A1B] rounded-full text-lg font-extrabold hover:bg-[#FF00C8] hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest"
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
