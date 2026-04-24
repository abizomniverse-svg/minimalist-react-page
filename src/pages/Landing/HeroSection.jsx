import React from 'react';
import { Link } from 'react-router-dom';
import { THEME, GLOBAL_CONFIG } from '../../utils/constants';

const HeroSection = () => {
  const content = {
    title: "#1 Premium TikTok Growth Service - Turn Your Profile into a Powerhouse",
    subtitle: "Experience elite social media growth with our premium TikTok services. Build authentic audiences, skyrocket engagement, and transform your profile into a monetization machine. Join 50,000+ creators who've chosen TikyTop for guaranteed results.",
    primaryCTA: "Start Premium Growth",
    secondaryCTA: "View All Services"
  };

    return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-40 pb-20 lg:pt-48 lg:px-16 container mx-auto relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,0,200,0.2) 40%, rgba(2,10,27,0.05) 100%)'
             }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-96 h-96 bg-gradient-to-r from-[#FF00C8]/15 to-[#00F5D4]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-[#00F5D4]/12 to-[#A6FF00]/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="flex flex-col space-y-10">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-[#020A1B] leading-[1.05]">
              {content.title.split('TikTok').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i !== arr.length - 1 && <span className="bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">TikTok</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl lg:text-2xl text-[#75819A] max-w-xl leading-relaxed font-medium">
              {content.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 pt-4">
              <Link to="/register" className="px-12 py-4 bg-gradient-to-r from-[#FF00C8] to-[#D600A7] hover:from-[#D600A7] hover:to-[#B0008F] text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 w-full sm:w-auto text-center transform hover:scale-105 hover:-translate-y-1">
                {content.primaryCTA}
              </Link>
              <button className="px-12 py-4 bg-white/90 backdrop-blur-sm hover:bg-white text-[#020A1B] text-lg font-bold rounded-full border-2 border-[#FF00C8]/30 hover:border-[#00F5D4] shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto hover:scale-105 hover:-translate-y-1">
                {content.secondaryCTA}
              </button>
            </div>

          {/* Trustscore & Stats */}
          <div className="pt-8 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-[#FF00C8]/20">
                <p className="text-lg font-bold text-[#020A1B] flex items-center gap-3">
                  <span>Rated <span className="text-[#FF00C8] font-black text-2xl">{GLOBAL_CONFIG.trustScore}</span> on {GLOBAL_CONFIG.trustPlatform}</span>
                  <span className="flex text-[#A6FF00] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-[#00F5D4]/20">
                <div className="text-2xl font-black text-[#020A1B]">50K+</div>
                <div className="text-sm font-semibold text-[#75819A]">Happy Creators</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-[#FF00C8]/20">
                <div className="text-2xl font-black text-[#020A1B]">4.9★</div>
                <div className="text-sm font-semibold text-[#75819A]">Average Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-[#A6FF00]/20">
                <div className="text-2xl font-black text-[#020A1B]">24/7</div>
                <div className="text-sm font-semibold text-[#75819A]">Premium Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] bg-white/90 backdrop-blur-lg rounded-3xl border border-[#FF00C8]/20 flex flex-col items-center justify-center text-slate-400 group hover:bg-white/95 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-pink-500/10 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF00C8]/10 via-[#00F5D4]/5 to-[#A6FF00]/10 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl animate-pulse" />

          {/* Floating elements */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-[#FF00C8]/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-12 left-8 w-12 h-12 bg-[#00F5D4]/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-12 w-8 h-8 bg-[#A6FF00]/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.5s' }}></div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center space-y-6 p-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF00C8] to-[#00F5D4] flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-[#020A1B]">Premium Growth Platform</h3>
              <p className="text-[#75819A] font-medium max-w-xs">
                Advanced analytics, AI-powered targeting, and guaranteed results for serious creators.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-[#FF00C8]/10 text-[#FF00C8] text-xs font-bold rounded-full border border-[#FF00C8]/20">AI-Powered</span>
              <span className="px-3 py-1 bg-[#00F5D4]/10 text-[#00F5D4] text-xs font-bold rounded-full border border-[#00F5D4]/20">Guaranteed</span>
              <span className="px-3 py-1 bg-[#A6FF00]/10 text-[#A6FF00] text-xs font-bold rounded-full border border-[#A6FF00]/20">Premium</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
