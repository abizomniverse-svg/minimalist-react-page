import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StepSuccess = ({ orderData }) => {
    const { serviceDetails, amount, total, profileId, billing } = orderData;
    const orderId = `#TK-${Math.floor(100000 + Math.random() * 900000)}`;

    const summaryRows = [
        { label: 'Order ID', value: orderId, highlight: false },
        { label: 'Package', value: `${amount?.toLocaleString()} ${serviceDetails.type}`, highlight: false },
        { label: 'Account', value: profileId, highlight: false },
        { label: 'Amount Paid', value: `$${total}`, highlight: true },
    ];

    return (
        <div className="w-full max-w-lg mx-auto py-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden"
            >
                {/* Top gradient banner */}
                <div
                    className="px-6 py-10 text-center relative overflow-hidden"
                    style={{ background: serviceDetails.gradient }}
                >
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Animated checkmark */}
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 12, stiffness: 120, delay: 0.2 }}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto flex items-center justify-center mb-4 relative z-10 border-2 border-white/30"
                    >
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative z-10"
                    >
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                            Order Confirmed!
                        </h1>
                        <p className="text-white/80 text-sm font-medium">
                            Your {serviceDetails.platform} boost is being processed
                        </p>
                    </motion.div>
                </div>

                {/* Order details */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 sm:p-8 space-y-5"
                >
                    {/* Summary rows */}
                    <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100">
                        {summaryRows.map((row) => (
                            <div key={row.label} className="flex items-center justify-between px-5 py-4">
                                <span className="text-[10px] uppercase tracking-widest font-black text-slate-400">
                                    {row.label}
                                </span>
                                <span
                                    className={`font-bold text-sm ${row.highlight ? 'text-xl font-black' : 'text-[#020A1B]'}`}
                                    style={row.highlight ? { color: serviceDetails.color } : {}}
                                >
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Delivery timeline */}
                    <div
                        className="rounded-2xl p-4 border"
                        style={{
                            backgroundColor: `${serviceDetails.color}0D`,
                            borderColor: `${serviceDetails.color}30`,
                        }}
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-xl flex-shrink-0">⚡</span>
                            <div>
                                <p className="text-sm font-bold text-[#020A1B]">Delivery Starting Soon</p>
                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                    Your {serviceDetails.type?.toLowerCase()} will start appearing within 24 hours. 
                                    Delivery is gradual for natural growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Email confirmation */}
                    {billing?.email && (
                        <p className="text-center text-xs text-slate-400 font-medium">
                            Confirmation sent to{' '}
                            <span className="font-bold text-slate-600">{billing.email}</span>
                        </p>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link
                            to="/"
                            className="flex-1 py-4 text-white rounded-xl font-bold text-sm uppercase tracking-wider text-center transition-all hover:shadow-lg active:scale-[0.98]"
                            style={{ background: serviceDetails.gradient }}
                        >
                            Back to Home
                        </Link>
                        <button
                            onClick={() => window.print()}
                            className="flex-1 py-4 border-2 border-slate-200 text-slate-600 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition-all active:scale-[0.98]"
                        >
                            Download Receipt
                        </button>
                    </div>

                    {/* Trust note */}
                    <div className="flex items-center justify-center gap-4 pt-2">
                        {['🔒 Secure', '⚡ Fast', '🛡️ Guaranteed'].map(item => (
                            <span key={item} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default StepSuccess;
