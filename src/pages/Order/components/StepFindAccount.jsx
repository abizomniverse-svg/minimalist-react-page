import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StepFindAccount = ({ onNext, onBack, initialData }) => {
    const [profileId, setProfileId] = useState(initialData?.profileId || '');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const serviceData = initialData.serviceDetails;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!profileId.trim()) {
            setError(`Please enter your ${serviceData?.platform || 'Social Media'} username or URL`);
            return;
        }
        setIsLoading(true);
        // Simulate a brief lookup
        await new Promise(r => setTimeout(r, 800));
        setIsLoading(false);
        onNext({
            profileId: profileId.trim(),
            accountAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
            accountFollowers: '125.4K'
        });
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden"
            >
                {/* Card header */}
                <div
                    className="px-6 py-5 text-center relative overflow-hidden"
                    style={{ background: serviceData?.gradient }}
                >
                    <div className="absolute inset-0 bg-black/5" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider relative z-10">
                        Find Your Account
                    </h3>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg"
                            style={{ background: serviceData?.gradient }}
                        >
                            @
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-extrabold text-[#020A1B]">
                            Enter Your {serviceData?.platform} Username
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            We'll deliver your {serviceData?.type?.toLowerCase()} directly to your account.
                            No password required.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 pl-1">
                                {serviceData?.platform} Username or Profile URL
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg select-none">@</span>
                                <input
                                    type="text"
                                    value={profileId}
                                    onChange={(e) => {
                                        setProfileId(e.target.value);
                                        setError('');
                                    }}
                                    placeholder="username or profile link"
                                    className={`w-full pl-10 pr-5 py-4 bg-slate-50 border-2 rounded-2xl text-base font-medium transition-all outline-none ${
                                        error
                                            ? 'border-red-400 bg-red-50 focus:ring-4 focus:ring-red-100'
                                            : 'border-slate-200 focus:bg-white focus:border-opacity-100'
                                    }`}
                                    style={!error ? {
                                        '--tw-ring-color': serviceData?.color,
                                    } : {}}
                                    onFocus={(e) => {
                                        if (!error) {
                                            e.target.style.borderColor = serviceData?.color;
                                            e.target.style.boxShadow = `0 0 0 4px ${serviceData?.color}20`;
                                        }
                                    }}
                                    onBlur={(e) => {
                                        if (!error) {
                                            e.target.style.borderColor = '';
                                            e.target.style.boxShadow = '';
                                        }
                                    }}
                                />
                            </div>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-xs font-bold flex items-center gap-1.5 pl-1"
                                >
                                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </motion.p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 rounded-xl text-white font-bold text-base uppercase tracking-wider transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            style={{ background: serviceData?.gradient }}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Verifying...
                                </>
                            ) : (
                                'Continue →'
                            )}
                        </button>
                    </form>

                    {/* Privacy note */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
                        <p className="text-xs text-blue-700 font-medium leading-relaxed">
                            🔒 We will <strong>never</strong> ask for your password. Make sure your account is set to <strong>Public</strong>.
                        </p>
                    </div>

                    {/* Back button */}
                    <button
                        onClick={onBack}
                        className="w-full py-3 text-slate-500 font-semibold text-sm hover:text-[#020A1B] transition-colors flex items-center justify-center gap-1.5"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Package Selection
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default StepFindAccount;
