import React from 'react';
import { Link } from 'react-router-dom';
import { THEME, GLOBAL_CONFIG } from '../../utils/constants';

const HeroSection = () => {
  const content = {
    title: "#1 Trusted Site to Turn Your TikTok Profile into a Powerful Platform",
    subtitle: "Grow your audience and increase engagement on TikTok with TikyTop’s TikTok growth services. Create an impressive online presence, increase your credibility and expand your reach with the content you share!",
    primaryCTA: "Buy TikTok Likes",
    secondaryCTA: "Buy TikTok Views"
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 pt-40 pb-20 lg:pt-48 lg:px-16 container mx-auto">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#020A1B] leading-[1.1]">
              {content.title.split('TikTok').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i !== arr.length - 1 && <span className="text-[#FF00C8]">TikTok</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-lg text-[#75819A] max-w-lg leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              <Link to="/register" className="px-8 py-3.5 bg-[#FF00C8] hover:bg-[#D600A7] text-white text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto text-center">
                {content.primaryCTA}
              </Link>
              <button className="px-8 py-3.5 bg-white hover:bg-gray-50 text-[#020A1B] text-base font-semibold rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto hover:border-[#00F5D4]">
                {content.secondaryCTA}
              </button>
            </div>

          {/* Trustscore */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-base font-medium text-gray-700 flex flex-wrap items-center gap-2">
              <span>Rated <strong className="font-bold text-[#020A1B]">{GLOBAL_CONFIG.trustScore}</strong> on {GLOBAL_CONFIG.trustPlatform}</span>
              <span className="flex text-[#A6FF00] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] bg-white rounded-3xl border border-gray-200 flex flex-col items-center justify-center text-slate-400 group hover:bg-slate-50 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF00C8]/5 to-[#00F5D4]/10 rounded-3xl" />
          <svg className="w-12 h-12 mb-3 text-[#75819A] group-hover:text-[#FF00C8] transition-colors relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium relative z-10">Your illustration placeholder</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
