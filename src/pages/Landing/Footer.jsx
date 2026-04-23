import React from 'react';
import { Link } from 'react-router-dom';

const FOOTER_CONTENT = {
    logoText: "TikyTop",
    description: "TikyTop provides simple and effective tools to support your social media presence. Explore our features and grow smarter, every step of the way.",
    copyright: "Copyright © 2026 TikyTop. All Rights Reserved.",
    disclaimer: "TikyTop is a standalone social media growth service that is not affiliated with or endorsed by TikTok, Instagram, Facebook, Twitter (X), YouTube, Google, or any other social media platform.",
    paymentIcons: ["Paypal", "Razorpay", "Stripe", "Cashfree"],
    links: [
        { label: "About Us", href: "#" },
        { label: "Terms of Use", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Refund Policy", href: "#" },
        { label: "Contact Us", href: "#" }
    ],
    services: [
        {
            category: "TikTok Services",
            color: "#FF00C8",
            items: [
                "Buy TikTok Likes",
                "Buy TikTok Views",
                "Buy TikTok Followers/Fans",
                "Buy TikTok Comments",
                "Buy TikTok Saves",
                "Buy TikTok Shares",
                "Buy TikTok Mentions",
            ]
        },
        {
            category: "Instagram Services",
            color: "#FF00C8",
            items: [
                "Buy Instagram Likes",
                "Buy Instagram Followers",
                "Buy Instagram Impressions",
                "Buy Instagram Reach",
            ]
        },
        {
            category: "Instagram Story",
            color: "#00F5D4",
            items: [
                "Buy Instagram Story Views",
                "Buy Instagram Story Likes",
            ]
        },
        {
            category: "Instagram Reels",
            color: "#00F5D4",
            items: [
                "Buy Instagram Reels Likes",
                "Buy Instagram Reels Views",
                "Buy Instagram Reels Shares",
                "Buy Instagram Reels Saves",
            ]
        },
        {
            category: "YouTube Services",
            color: "#A6FF00",
            items: [
                "Buy YouTube Shorts Likes",
                "Buy YouTube Shorts Views",
                "Buy YouTube Video Likes",
                "Buy YouTube Video Views",
            ]
        }
    ]
};

const Footer = () => {
    const { logoText, description, links, disclaimer, copyright, services, paymentIcons } = FOOTER_CONTENT;

    const renderPaymentIcon = (type) => {
        const colors = { Paypal: "#1A1F71", Razorpay: "#EB001B", Stripe: "#000000", Cashfree: "#4285F4" };
        return (
            <div key={type} className="bg-white px-4 py-2 rounded-xl h-9 flex items-center justify-center border border-gray-100 uppercase tracking-widest text-[10px] font-black shadow-sm hover:border-[#FF00C8] transition-colors">
                <span style={{ color: colors[type] }}>{type}</span>
            </div>
        );
    };

    return (
        <footer className="bg-white border-t border-gray-100 py-20 px-5">
            <div className="max-w-7xl mx-auto">

                {/* Top: Brand + Description + Payments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-gray-100">
                    {/* Brand */}
                    <div className="flex flex-col gap-5 lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 w-fit">
                            <div className="bg-[#FF00C8] text-white w-11 h-11 rounded-2xl flex items-center justify-center shadow-md shadow-pink-100 font-black text-lg">T</div>
                            <span className="text-2xl font-extrabold text-[#020A1B]" style={{ fontFamily: 'cursive' }}>{logoText}</span>
                        </Link>
                        <p className="text-[#75819A] text-[15px] leading-relaxed font-medium max-w-sm">{description}</p>
                        <div className="flex flex-wrap gap-3 pt-1">
                            {paymentIcons.map(renderPaymentIcon)}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-xs font-extrabold text-[#020A1B] uppercase tracking-[0.25em]">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-[14px] text-[#75819A] hover:text-[#FF00C8] font-semibold transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-xs font-extrabold text-[#020A1B] uppercase tracking-[0.25em]">Get in Touch</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="mailto:support@tikytop.com" className="text-[14px] text-[#75819A] hover:text-[#FF00C8] font-semibold transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    support@tikytop.com
                                </a>
                            </li>
                            <li className="pt-2">
                                <p className="text-xs font-extrabold text-[#020A1B] uppercase tracking-[0.2em] mb-3">Follow Us</p>
                                <div className="flex gap-3">
                                    {[
                                        { label: 'TikTok', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.62 4.19.94 1.13 2.22 1.95 3.63 2.37.01 1.36.01 2.72 0 4.08-.94-.13-1.89-.4-2.73-.85-.85-.46-1.6-1.12-2.14-1.92-.01 2.3 0 4.6-.01 6.89-.04 1.25-.33 2.49-.87 3.61-.43.89-1.07 1.67-1.87 2.25-1.08.79-2.39 1.25-3.74 1.35-1.39.11-2.82-.13-4.1-.73-1.3-.61-2.42-1.63-3.15-2.89-.69-1.2-.95-2.61-.74-3.98.15-1.02.57-1.99 1.19-2.82.78-1.03 1.83-1.84 3.03-2.3.47-.18.96-.32 1.45-.4.01 1.43 0 2.87.01 4.3-.47.11-.92.3-1.32.58-.57.39-.99.96-1.18 1.61-.25.86-.06 1.83.5 2.53.51.64 1.32 1.01 2.14 1.01.83.01 1.65-.33 2.2-.95.54-.6.82-1.4.81-2.21V.02z' },
                                        { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                                    ].map(({ label, icon }) => (
                                        <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-[#FF00C8] hover:border-[#FF00C8] group transition-all">
                                            <svg className="w-4 h-4 text-[#75819A] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d={icon} /></svg>
                                        </a>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Services Grid */}
                <div className="py-16 border-b border-gray-100">
                    <h3 className="text-xs font-extrabold text-[#020A1B] uppercase tracking-[0.25em] mb-10">Our Services</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
                        {services.map((group) => (
                            <div key={group.category} className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: group.color }} />
                                    <h4 className="text-[13px] font-extrabold text-[#020A1B] uppercase tracking-wider leading-tight">
                                        {group.category}
                                    </h4>
                                </div>
                                <ul className="flex flex-col gap-2.5">
                                    {group.items.map((item, i) => (
                                        <li key={i}>
                                            <a href="#" className="text-[13px] text-[#75819A] hover:text-[#FF00C8] font-medium transition-colors leading-relaxed block">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="py-10 border-b border-gray-100">
                    <p className="text-[11px] text-[#94A3B8] leading-loose text-center font-medium max-w-4xl mx-auto">
                        {disclaimer}
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[13px] text-[#64748B] font-semibold">{copyright}</p>

                    <div className="flex gap-3">
                        <Link to="/login" className="px-7 py-2.5 rounded-full text-[13px] font-black bg-[#020A1B] text-white hover:bg-[#FF00C8] transition-all shadow-sm">
                            Login
                        </Link>
                        <Link to="/register" className="px-7 py-2.5 rounded-full text-[13px] font-black bg-white text-[#020A1B] border-2 border-[#020A1B] hover:border-[#FF00C8] hover:text-[#FF00C8] transition-all">
                            Register
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
