import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { THEME, GLOBAL_CONFIG } from '../../utils/constants';

const HeroSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [quantity, setQuantity] = useState(100);
  const [isProcessing, setIsProcessing] = useState(false);

  const content = {
    title: "#1 Premium TikTok Growth Service - Turn Your Profile into a Powerhouse",
    subtitle: "Experience elite social media growth with our premium TikTok services. Build authentic audiences, skyrocket engagement, and transform your profile into a monetization machine. Join 50,000+ creators who've chosen TikyTop for guaranteed results.",
    primaryCTA: "Start Premium Growth",
    secondaryCTA: "View All Services"
  };

  const platforms = [
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#FF00C8' },
    { id: 'instagram', name: 'Instagram', icon: '📸', color: '#00F5D4' },
    { id: 'youtube', name: 'YouTube', icon: '▶️', color: '#A6FF00' },
    { id: 'facebook', name: 'Facebook', icon: '📘', color: '#FF6B35' }
  ];

  const services = {
    tiktok: [
      { id: 'tiktok-likes', name: 'Likes', price: 0.08, icon: '❤️' },
      { id: 'tiktok-views', name: 'Views', price: 0.02, icon: '👁️' },
      { id: 'tiktok-followers', name: 'Followers', price: 5.60, icon: '👥' },
      { id: 'tiktok-comments', name: 'Comments', price: 1.20, icon: '💬' },
      { id: 'tiktok-shares', name: 'Shares', price: 2.50, icon: '🔄' },
      { id: 'tiktok-saves', name: 'Saves', price: 1.80, icon: '🔖' }
    ],
    instagram: [
      { id: 'instagram-likes', name: 'Likes', price: 0.15, icon: '❤️' },
      { id: 'instagram-followers', name: 'Followers', price: 3.20, icon: '👥' },
      { id: 'instagram-views', name: 'Views', price: 0.05, icon: '👁️' },
      { id: 'instagram-comments', name: 'Comments', price: 2.10, icon: '💬' },
      { id: 'instagram-saves', name: 'Saves', price: 1.80, icon: '🔖' },
      { id: 'instagram-story-views', name: 'Story Views', price: 0.035, icon: '📱' },
      { id: 'instagram-story-likes', name: 'Story Likes', price: 0.024, icon: '📱' },
      { id: 'instagram-reels-likes', name: 'Reels Likes', price: 0.011, icon: '🎬' },
      { id: 'instagram-reels-views', name: 'Reels Views', price: 0.003, icon: '🎬' },
      { id: 'instagram-reels-shares', name: 'Reels Shares', price: 0.24, icon: '🎬' },
      { id: 'instagram-reels-saves', name: 'Reels Saves', price: 0.15, icon: '🎬' }
    ],
    youtube: [
      { id: 'youtube-views', name: 'Views', price: 0.03, icon: '👁️' },
      { id: 'youtube-likes', name: 'Likes', price: 0.25, icon: '👍' },
      { id: 'youtube-subscribers', name: 'Subscribers', price: 13.90, icon: '🔔' },
      { id: 'youtube-comments', name: 'Comments', price: 3.50, icon: '💬' },
      { id: 'youtube-shares', name: 'Shares', price: 4.20, icon: '🔄' },
      { id: 'youtube-shorts-views', name: 'Shorts Views', price: 0.0016, icon: '📹' },
      { id: 'youtube-shorts-likes', name: 'Shorts Likes', price: 0.024, icon: '📹' }
    ],
    facebook: [
      { id: 'facebook-page-likes', name: 'Page Likes', price: 2.80, icon: '👍' },
      { id: 'facebook-followers', name: 'Followers', price: 4.50, icon: '👥' },
      { id: 'facebook-post-views', name: 'Post Views', price: 0.08, icon: '👁️' },
      { id: 'facebook-video-views', name: 'Video Views', price: 0.004, icon: '🎥' },
      { id: 'facebook-shares', name: 'Shares', price: 3.20, icon: '🔄' },
      { id: 'facebook-comments', name: 'Comments', price: 2.90, icon: '💬' },
      { id: 'facebook-post-likes', name: 'Post Likes', price: 0.015, icon: '❤️' },
      { id: 'facebook-event-responses', name: 'Event Responses', price: 0.15, icon: '📅' }
    ]
  };

  const calculatePrice = () => {
    if (!selectedService || !selectedPlatform) return 0;
    const service = services[selectedPlatform].find(s => s.id === selectedService);
    return service ? (service.price * quantity).toFixed(2) : 0;
  };

  const handleOrder = async () => {
    if (!selectedPlatform || !profileUrl || !selectedService) {
      alert('Please fill in all fields');
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to order page with correct service ID
      window.location.href = `/order/${selectedService}`;
    }, 2000);
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

        {/* Right Content - Interactive Order Tool */}
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[700px] bg-white/95 backdrop-blur-lg rounded-3xl border border-[#FF00C8]/20 shadow-2xl overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF00C8]/5 via-[#00F5D4]/3 to-[#A6FF00]/5 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-3xl animate-pulse" />

          {/* Floating particles */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-[#FF00C8]/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-12 left-8 w-12 h-12 bg-[#00F5D4]/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-12 w-8 h-8 bg-[#A6FF00]/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.5s' }}></div>

          {/* Main Interactive Content */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#020A1B] mb-2">🚀 Instant Order Tool</h3>
              <p className="text-[#75819A] text-sm font-medium">Get started in under 60 seconds</p>
            </div>

            {/* Platform Selection */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-[#020A1B] mb-3">1. Choose Platform</label>
              <div className="grid grid-cols-2 gap-2">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 text-sm font-bold ${
                      selectedPlatform === platform.id
                        ? `border-[${platform.color}] bg-[${platform.color}]/10 text-[${platform.color}]`
                        : 'border-gray-200 hover:border-[#FF00C8]/50 text-[#75819A]'
                    }`}
                  >
                    <span className="mr-2">{platform.icon}</span>
                    {platform.name}
                  </button>
                ))}
              </div>
            </div>

            {/* URL Input */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-[#020A1B] mb-3">2. Enter URL</label>
              <input
                type="url"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder="https://..."
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#FF00C8] outline-none transition-colors bg-white/50 backdrop-blur-sm"
              />
            </div>

            {/* Service Selection */}
            {selectedPlatform && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-[#020A1B] mb-3">3. Choose Service</label>
                <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                  {services[selectedPlatform].map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedService === service.id
                          ? 'border-[#FF00C8] bg-[#FF00C8]/10'
                          : 'border-gray-200 hover:border-[#FF00C8]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{service.icon}</span>
                          <span className="font-bold text-[#020A1B]">{service.name}</span>
                        </div>
                        <span className="text-[#FF00C8] font-bold">${service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Price */}
            {selectedService && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-[#020A1B] mb-3">4. Select Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(10, quantity - 10))}
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#020A1B]"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(10, parseInt(e.target.value) || 10))}
                    min="10"
                    className="flex-1 p-3 rounded-lg border-2 border-gray-200 text-center font-bold text-[#020A1B]"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 10)}
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#020A1B]"
                  >
                    +
                  </button>
                </div>
                <div className="mt-3 p-4 bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-xl border border-[#FF00C8]/20">
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#020A1B]">Total: ${calculatePrice()}</div>
                    <div className="text-sm text-[#75819A] font-semibold">Instant delivery • 30-day guarantee</div>
                  </div>
                </div>
              </div>
            )}

            {/* Order Button */}
            <div className="mt-auto">
              <button
                onClick={handleOrder}
                disabled={!selectedPlatform || !profileUrl || !selectedService || isProcessing}
                className={`w-full py-4 rounded-xl font-black text-lg transition-all duration-300 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#FF00C8] to-[#D600A7] hover:from-[#D600A7] hover:to-[#B0008F] text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  `Order Now - $${calculatePrice()}`
                )}
              </button>
              <p className="text-xs text-[#75819A] text-center mt-2">
                ⚡ Instant delivery • 🛡️ Secure payment • 📞 24/7 support
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
