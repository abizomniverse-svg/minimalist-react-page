import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PAYMENT_METHODS = [
    {
        id: 'stripe',
        name: 'Credit / Debit Card',
        description: 'SSL Secured via Stripe',
        providers: ['Visa', 'Mastercard', 'Amex'],
        icon: '💳',
    },
    {
        id: 'checkout',
        name: 'Checkout.com',
        description: 'Non-US Cards Supported',
        providers: ['Visa', 'Mastercard'],
        icon: '🔒',
    },
    {
        id: 'crypto',
        name: 'Cryptocurrency',
        description: 'Pay with BTC, ETH, USDT',
        badge: '5% OFF',
        icon: '₿',
    },
];

const InputField = ({ label, type = 'text', placeholder, value, onChange, serviceColor }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 pl-1">
            {label}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-medium transition-all outline-none focus:bg-white"
            onFocus={(e) => {
                e.target.style.borderColor = serviceColor;
                e.target.style.boxShadow = `0 0 0 4px ${serviceColor}18`;
            }}
            onBlur={(e) => {
                e.target.style.borderColor = '';
                e.target.style.boxShadow = '';
            }}
        />
    </div>
);

const StepCheckout = ({ onNext, onBack, initialData }) => {
    const { serviceDetails, amount, total } = initialData;
    if (!serviceDetails) return null;

    const [billing, setBilling] = useState({
        email: initialData.billing?.email || '',
        name: initialData.billing?.name || '',
        country: initialData.billing?.country || 'United States',
        zip: initialData.billing?.zip || '',
    });
    const [paymentMethod, setPaymentMethod] = useState(initialData.paymentMethod || 'stripe');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ billing, paymentMethod });
    };

    const isValid = billing.email.trim() && billing.name.trim();

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                {/* Left: Billing + Payment */}
                <div className="lg:col-span-2 space-y-5">

                    {/* Billing Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden"
                    >
                        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-base font-black uppercase tracking-widest text-slate-700">
                                Billing Details
                            </h2>
                            <button
                                onClick={onBack}
                                className="text-xs font-semibold text-slate-400 hover:text-[#020A1B] transition-colors"
                            >
                                ← Back
                            </button>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <InputField
                                    label="Full Name"
                                    placeholder="John Doe"
                                    value={billing.name}
                                    onChange={(e) => setBilling({ ...billing, name: e.target.value })}
                                    serviceColor={serviceDetails.color}
                                />
                                <InputField
                                    label="Email Address"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={billing.email}
                                    onChange={(e) => setBilling({ ...billing, email: e.target.value })}
                                    serviceColor={serviceDetails.color}
                                />
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 pl-1">
                                        Country
                                    </label>
                                    <select
                                        className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-medium transition-all outline-none appearance-none focus:bg-white"
                                        value={billing.country}
                                        onChange={(e) => setBilling({ ...billing, country: e.target.value })}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = serviceDetails.color;
                                            e.target.style.boxShadow = `0 0 0 4px ${serviceDetails.color}18`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = '';
                                            e.target.style.boxShadow = '';
                                        }}
                                    >
                                        {['United States', 'United Kingdom', 'Canada', 'Australia', 'India', 'Germany', 'France'].map(c => (
                                            <option key={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <InputField
                                    label="Zip / Postal Code"
                                    placeholder="12345"
                                    value={billing.zip}
                                    onChange={(e) => setBilling({ ...billing, zip: e.target.value })}
                                    serviceColor={serviceDetails.color}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Payment Method Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden"
                    >
                        <div className="px-6 py-5 border-b border-slate-100">
                            <h2 className="text-base font-black uppercase tracking-widest text-slate-700">
                                Payment Method
                            </h2>
                        </div>

                        <div className="p-6 sm:p-8 space-y-3">
                            {PAYMENT_METHODS.map((method) => {
                                const isSelected = paymentMethod === method.id;
                                return (
                                    <label
                                        key={method.id}
                                        className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                                            isSelected
                                                ? 'bg-slate-50'
                                                : 'border-slate-200 hover:border-slate-300 bg-white'
                                        }`}
                                        style={{
                                            borderColor: isSelected ? serviceDetails.color : undefined,
                                            boxShadow: isSelected ? `0 0 0 1px ${serviceDetails.color}` : undefined,
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            className="w-4 h-4 flex-shrink-0"
                                            style={{ accentColor: serviceDetails.color }}
                                            checked={isSelected}
                                            onChange={() => setPaymentMethod(method.id)}
                                        />
                                        <span className="text-2xl flex-shrink-0">{method.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-bold text-[#020A1B] text-sm">{method.name}</span>
                                                {method.badge && (
                                                    <span className="bg-yellow-400 text-[#020A1B] text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                                                        {method.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-slate-400 font-medium mt-0.5">{method.description}</p>
                                            {method.providers && (
                                                <div className="flex gap-1.5 mt-2">
                                                    {method.providers.map(p => (
                                                        <span key={p} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase">
                                                            {p}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Right: Order Summary */}
                <div className="lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="bg-[#020A1B] text-white rounded-3xl shadow-2xl overflow-hidden sticky top-28"
                    >
                        {/* Decorative glow */}
                        <div
                            className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-30 pointer-events-none"
                            style={{ background: serviceDetails.color }}
                        />

                        {/* Header */}
                        <div
                            className="px-6 py-5 relative overflow-hidden"
                            style={{ background: serviceDetails.gradient }}
                        >
                            <div className="absolute inset-0 bg-black/20" />
                            <h3 className="text-sm font-black uppercase tracking-widest text-white relative z-10">
                                Order Summary
                            </h3>
                        </div>

                        <div className="p-6 space-y-5 relative">
                            {/* Account */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg text-white flex-shrink-0"
                                    style={{ background: serviceDetails.gradient }}
                                >
                                    {serviceDetails.platform[0]}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-sm truncate">{initialData.profileId}</p>
                                    <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: serviceDetails.color }}>
                                        {serviceDetails.platform}
                                    </p>
                                </div>
                            </div>

                            {/* Package details */}
                            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/50 font-medium">Package</span>
                                    <span className="font-bold">{amount?.toLocaleString()} {serviceDetails.type}</span>
                                </div>
                                {serviceDetails.requiresPosts && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/50 font-medium">Posts</span>
                                        <span className="font-bold">{initialData.selectedPosts?.length || 0} selected</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/50 font-medium">Subtotal</span>
                                    <span className="font-bold">${total}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/50 font-medium">Discount</span>
                                    <span className="font-bold text-[#00F5D4]">-$0.00</span>
                                </div>
                                <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                                    <span className="font-black uppercase tracking-wider text-sm">Total</span>
                                    <span className="text-2xl font-black" style={{ color: serviceDetails.color }}>${total}</span>
                                </div>
                            </div>

                            {/* Pay button */}
                            <button
                                onClick={handleSubmit}
                                disabled={!isValid}
                                className="w-full py-4 rounded-xl text-white font-bold text-base uppercase tracking-wider transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{ background: serviceDetails.gradient }}
                            >
                                Pay ${total}
                            </button>

                            {/* Security note */}
                            <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                256-bit SSL Encrypted
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default StepCheckout;
