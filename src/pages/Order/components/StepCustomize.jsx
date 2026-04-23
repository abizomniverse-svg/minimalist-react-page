import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StepCustomize = ({ onNext, initialData }) => {
    // Mocked profile data based on account search
    const [profile] = useState({
        username: initialData?.profileId?.startsWith('@') ? initialData.profileId : `@${initialData?.profileId}`,
        name: "Verified Account",
        followers: "125.4K",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop"
    });

    const [packages, setPackages] = useState([
        { id: 'followers', label: 'Followers', min: 100, max: 10000, step: 100, price: 0.031, value: 500, icon: 'user' },
        { id: 'likes', label: 'Likes', min: 50, max: 5000, step: 50, price: 0.024, value: 200, icon: 'heart' },
        { id: 'views', label: 'Video Views', min: 500, max: 50000, step: 500, price: 0.005, value: 1000, icon: 'eye' },
        { id: 'comments', label: 'Comments', min: 10, max: 500, step: 5, price: 0.15, value: 0, icon: 'chat' },
    ]);

    const calculateTotal = () => {
        return packages.reduce((acc, pkg) => acc + (pkg.value * pkg.price), 0).toFixed(2);
    };

    const handleSliderChange = (id, value) => {
        setPackages(prev => prev.map(pkg => pkg.id === id ? { ...pkg, value: parseInt(value) } : pkg));
    };

    const getIcon = (type) => {
        const props = { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" };
        switch(type) {
            case 'user': return <svg {...props}><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
            case 'heart': return <svg {...props}><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
            case 'eye': return <svg {...props}><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
            case 'chat': return <svg {...props}><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
            default: return null;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-5xl mx-auto py-8"
        >
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Side: Summary Card */}
                <div className="lg:w-1/3 order-2 lg:order-1">
                    <div className="bg-[#020A1B] text-white rounded-[2.5rem] p-8 sticky top-24 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF00C8]/20 rounded-full blur-[60px]" />
                        
                        <div className="relative z-10 flex flex-col items-center mb-8 border-b border-white/10 pb-8 text-center">
                            <img src={profile.avatar} alt={profile.username} className="w-20 h-20 rounded-full border-4 border-white/20 mb-4" />
                            <h3 className="text-xl font-bold">{profile.username}</h3>
                            <button className="text-[#00F5D4] text-xs font-black uppercase tracking-widest mt-2 hover:underline">Change</button>
                            <div className="flex gap-4 mt-4">
                                <div className="text-center">
                                    <p className="text-[10px] uppercase text-white/50 font-black">Followers</p>
                                    <p className="text-sm font-bold">{profile.followers}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10">
                            {packages.filter(p => p.value > 0).map(pkg => (
                                <div key={pkg.id} className="flex justify-between text-sm">
                                    <span className="text-white/60">{pkg.value} {pkg.label}</span>
                                    <span className="font-bold">${(pkg.value * pkg.price).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-end border-t border-white/10 pt-6">
                            <div>
                                <p className="text-xs uppercase text-white/40 font-black">Total Price</p>
                                <p className="text-4xl font-extrabold text-[#00F5D4]">${calculateTotal()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: customization Sliders */}
                <div className="lg:w-2/3 order-1 lg:order-2">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
                        <h2 className="text-3xl font-extrabold text-[#020A1B] mb-2">Customize Your Campaign</h2>
                        <p className="text-slate-500 mb-10 font-medium">Adjust the sliders to pick your perfect boost.</p>

                        <div className="space-y-12">
                            {packages.map((pkg) => (
                                <div key={pkg.id} className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-[#020A1B]/5 flex items-center justify-center text-[#020A1B]">
                                                {getIcon(pkg.icon)}
                                            </div>
                                            <span className="text-lg font-bold text-[#020A1B]">{pkg.label}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-lg font-black text-[#FF00C8]">{pkg.value}</span>
                                            <span className="text-sm font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">${(pkg.value * pkg.price).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="relative h-6 flex items-center">
                                        <input
                                            type="range"
                                            min={pkg.min}
                                            max={pkg.max}
                                            step={pkg.step}
                                            value={pkg.value}
                                            onChange={(e) => handleSliderChange(pkg.id, e.target.value)}
                                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#FF00C8]"
                                        />
                                        <div 
                                            className="absolute top-0 h-2 bg-gradient-to-r from-[#FF00C8] to-[#7E22CE] rounded-lg pointer-events-none"
                                            style={{ width: `${((pkg.value - pkg.min) / (pkg.max - pkg.min)) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => onNext({ packages: packages.filter(p => p.value > 0), total: calculateTotal() })}
                            className="w-full mt-12 py-5 bg-[#FF00C8] text-white rounded-2xl text-xl font-extrabold hover:bg-[#020A1B] transition-all shadow-xl shadow-pink-100 hover:scale-[1.01] active:scale-95 uppercase tracking-widest"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StepCustomize;
