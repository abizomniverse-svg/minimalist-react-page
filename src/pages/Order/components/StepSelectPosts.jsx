import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_POSTS = Array.from({ length: 9 }).map((_, i) => ({
    id: `post-${i}`,
    image: `https://picsum.photos/seed/${i + 10}/400/400`,
    views: Math.floor(Math.random() * 5000) + 100,
    likes: Math.floor(Math.random() * 2000) + 50,
}));

const StepSelectPosts = ({ onNext, onBack, initialData }) => {
    const [selectedPosts, setSelectedPosts] = useState(initialData?.selectedPosts || []);
    const { serviceDetails, amount } = initialData;

    const togglePost = (postId) => {
        setSelectedPosts(prev =>
            prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
        );
    };

    const perPost = selectedPosts.length > 0 ? Math.floor(amount / selectedPosts.length) : 0;

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                {/* Left: Post Grid */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden">
                        {/* Header */}
                        <div
                            className="px-6 py-5 relative overflow-hidden"
                            style={{ background: serviceDetails.gradient }}
                        >
                            <div className="absolute inset-0 bg-black/5" />
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-white">Select Posts to Boost</h3>
                                    <p className="text-white/70 text-xs mt-0.5">@{initialData.profileId}</p>
                                </div>
                                <button
                                    onClick={onBack}
                                    className="text-white/70 hover:text-white text-xs font-semibold transition-colors"
                                >
                                    Change Account
                                </button>
                            </div>
                        </div>

                        <div className="p-5 sm:p-6">
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                {MOCK_POSTS.map((post) => {
                                    const isSelected = selectedPosts.includes(post.id);
                                    return (
                                        <motion.div
                                            key={post.id}
                                            whileTap={{ scale: 0.96 }}
                                            onClick={() => togglePost(post.id)}
                                            className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                                                isSelected
                                                    ? 'ring-2 ring-offset-2 shadow-lg'
                                                    : 'hover:opacity-90'
                                            }`}
                                            style={isSelected ? { ringColor: serviceDetails.color } : {}}
                                        >
                                            <img
                                                src={post.image}
                                                alt="post"
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />

                                            {/* Overlay */}
                                            <div className={`absolute inset-0 transition-opacity duration-200 ${
                                                isSelected ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                                            }`} style={{ background: `${serviceDetails.color}55` }} />

                                            {/* Checkmark */}
                                            <AnimatePresence>
                                                {isSelected && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        exit={{ scale: 0 }}
                                                        className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-md"
                                                        style={{ background: serviceDetails.color }}
                                                    >
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Stats */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                                <p className="text-white text-[10px] font-bold">
                                                    ❤️ {post.likes.toLocaleString()}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <button className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-500 font-semibold text-sm rounded-xl transition-colors border border-slate-200">
                                Load More Posts
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden sticky top-28">
                        <div className="px-6 py-5 border-b border-slate-100">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">
                                Selection Summary
                            </h3>
                        </div>

                        <div className="p-6 space-y-4">
                            {/* Posts count */}
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="text-sm font-semibold text-slate-600">Posts Selected</span>
                                <span
                                    className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm"
                                    style={{ background: selectedPosts.length > 0 ? serviceDetails.gradient : '#CBD5E1' }}
                                >
                                    {selectedPosts.length}
                                </span>
                            </div>

                            {/* Per post distribution */}
                            <AnimatePresence>
                                {selectedPosts.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="p-4 rounded-2xl border"
                                        style={{
                                            backgroundColor: `${serviceDetails.color}10`,
                                            borderColor: `${serviceDetails.color}30`,
                                        }}
                                    >
                                        <p className="text-xs font-semibold" style={{ color: serviceDetails.color }}>
                                            Each post receives
                                        </p>
                                        <p className="text-2xl font-black text-[#020A1B] mt-1">
                                            {perPost.toLocaleString()}
                                            <span className="text-sm font-semibold text-slate-500 ml-1">{serviceDetails.type}</span>
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Total */}
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Total</span>
                                <span className="text-xl font-black text-[#020A1B]">${initialData.total}</span>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => onNext({ selectedPosts })}
                                disabled={selectedPosts.length === 0}
                                className="w-full py-4 rounded-xl text-white font-bold text-sm uppercase tracking-wider transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{ background: serviceDetails.gradient }}
                            >
                                {selectedPosts.length === 0 ? 'Select at least 1 post' : 'Proceed to Checkout →'}
                            </button>

                            <button
                                onClick={onBack}
                                className="w-full py-3 text-slate-500 font-semibold text-sm hover:text-[#020A1B] transition-colors flex items-center justify-center gap-1.5"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepSelectPosts;
