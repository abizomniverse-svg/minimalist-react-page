import React from 'react';
import { motion } from 'framer-motion';

const OrderProgress = ({ steps, currentIndex, color, gradient }) => {
    // Filter out the 'done' step from the progress bar
    const visibleSteps = steps.filter(s => s.id !== 'done');
    const progressPercent = visibleSteps.length > 1
        ? (currentIndex / (visibleSteps.length - 1)) * 100
        : 0;

    return (
        <div className="w-full max-w-2xl mx-auto px-2">
            <div className="relative flex items-center justify-between">
                {/* Background track */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 rounded-full" />

                {/* Animated fill */}
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full origin-left"
                    style={{ background: gradient || color || '#FF00C8' }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                />

                {visibleSteps.map((step, index) => {
                    const isPast = index < currentIndex;
                    const isActive = index === currentIndex;

                    return (
                        <div key={step.id} className="relative flex flex-col items-center z-10">
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.15 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-400 ${
                                    isPast
                                        ? 'border-transparent text-white shadow-md'
                                        : isActive
                                        ? 'bg-white border-transparent shadow-lg'
                                        : 'bg-white border-slate-200 text-slate-400'
                                }`}
                                style={{
                                    backgroundColor: isPast ? color : isActive ? 'white' : 'white',
                                    borderColor: isActive ? color : undefined,
                                    boxShadow: isActive ? `0 0 0 4px ${color}22` : undefined,
                                }}
                            >
                                {isPast ? (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <span className={`text-sm sm:text-base ${isActive ? '' : 'opacity-50'}`}>{step.icon}</span>
                                )}
                            </motion.div>

                            <span
                                className={`absolute top-12 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-colors duration-300 ${
                                    isActive ? 'text-slate-800' : isPast ? 'text-slate-500' : 'text-slate-400'
                                }`}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
            {/* Spacer for labels */}
            <div className="h-8" />
        </div>
    );
};

export default OrderProgress;
