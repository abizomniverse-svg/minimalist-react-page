import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StepSelectPackage = ({ serviceData, onNext, initialData }) => {
    const [amount, setAmount] = useState(initialData?.amount || serviceData.packages[1]?.amount || 100);
    const [selectedPackage, setSelectedPackage] = useState(initialData?.packageType || 'custom');

    const handlePackageClick = (pkg) => {
        setAmount(pkg.amount);
        setSelectedPackage(`pkg-${pkg.amount}`);
    };

    const handleSliderChange = (e) => {
        setAmount(Number(e.target.value));
        setSelectedPackage('custom');
    };

    const calculatePrice = () => {
        const matchedPkg = serviceData.packages.find(p => p.amount === amount);
        if (matchedPkg) return matchedPkg.price.toFixed(2);
        return (amount * serviceData.basePriceRate).toFixed(2);
    };

    const currentPrice = calculatePrice();
    const matchedPkg = serviceData.packages.find(p => p.amount === amount);
    const originalPrice = matchedPkg?.originalPrice || (parseFloat(currentPrice) * 1.5).toFixed(2);
    const savings = (originalPrice - currentPrice).toFixed(2);

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                
                {/* Left: Service Description */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: serviceData.color }} />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                            {serviceData.platform} {serviceData.type}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#020A1B] leading-tight">
                        {serviceData.title}
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        {serviceData.description}
                    </p>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {[
                            { icon: '⚡', text: 'Instant Start' },
                            { icon: '🔒', text: '100% Safe' },
                            { icon: '🎯', text: 'High Quality' },
                        ].map((item) => (
                            <div key={item.text} className="flex items-center gap-2 text-slate-600">
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-sm font-semibold">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Package Selector Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full"
                >
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden">
                        
                        {/* Header with gradient */}
                        <div
                            className="px-6 py-5 text-center relative overflow-hidden"
                            style={{ background: serviceData.gradient }}
                        >
                            <div className="absolute inset-0 bg-black/5" />
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider relative z-10">
                                Select Your Package
                            </h3>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            
                            {/* Quantity & Price Display */}
                            <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200/60">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Quantity</p>
                                    <p className="text-3xl font-black text-[#020A1B]">{amount.toLocaleString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Total Price</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-base text-slate-400 line-through font-semibold">${originalPrice}</span>
                                        <span className="text-3xl font-black" style={{ color: serviceData.color }}>${currentPrice}</span>
                                    </div>
                                    {savings > 0 && (
                                        <span className="inline-block mt-1 bg-green-100 text-green-700 text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                                            Save ${savings}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Slider */}
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">
                                    Adjust Quantity
                                </label>
                                <input
                                    type="range"
                                    min={serviceData.minAmount}
                                    max={serviceData.maxAmount}
                                    step={serviceData.minAmount}
                                    value={amount}
                                    onChange={handleSliderChange}
                                    className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer slider-thumb"
                                    style={{
                                        accentColor: serviceData.color,
                                    }}
                                />
                                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                                    <span>{serviceData.minAmount.toLocaleString()}</span>
                                    <span>{serviceData.maxAmount.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Trending Packages */}
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">
                                    Popular Packages
                                </label>
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                    {serviceData.packages.map((pkg) => {
                                        const isSelected = amount === pkg.amount;
                                        return (
                                            <button
                                                key={pkg.amount}
                                                onClick={() => handlePackageClick(pkg)}
                                                className={`relative px-3 py-3 text-sm font-bold rounded-xl border-2 transition-all ${
                                                    isSelected
                                                        ? 'border-transparent shadow-md scale-105'
                                                        : 'border-slate-200 hover:border-slate-300 bg-white'
                                                }`}
                                                style={{
                                                    backgroundColor: isSelected ? serviceData.color : undefined,
                                                    color: isSelected ? 'white' : '#020A1B',
                                                }}
                                            >
                                                {pkg.amount >= 1000 ? `${pkg.amount / 1000}K` : pkg.amount}
                                                {pkg.isPopular && (
                                                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-[10px]">
                                                        ⭐
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => onNext({
                                    amount,
                                    total: currentPrice,
                                    packageType: selectedPackage,
                                    serviceDetails: serviceData
                                })}
                                className="w-full py-4 rounded-xl font-bold text-white text-base uppercase tracking-wider transition-all hover:shadow-lg active:scale-[0.98]"
                                style={{ background: serviceData.gradient }}
                            >
                                Continue to Next Step →
                            </button>

                            {/* Security note */}
                            <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Secure SSL Encrypted Checkout
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default StepSelectPackage;
