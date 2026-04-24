import React from 'react';
import { motion } from 'framer-motion';

const PREMIUM_FEATURES = [
  {
    icon: '🚀',
    title: 'AI-Powered Growth',
    description: 'Advanced algorithms analyze millions of data points to deliver hyper-targeted growth that converts.',
    color: '#FF00C8',
    stats: '2.3x faster growth'
  },
  {
    icon: '🎯',
    title: 'Smart Targeting',
    description: 'Reach the exact audience that will engage with your content, maximizing ROI and engagement rates.',
    color: '#00F5D4',
    stats: '94% engagement rate'
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Monitor your growth in real-time with detailed analytics and performance insights.',
    color: '#A6FF00',
    stats: 'Live tracking'
  },
  {
    icon: '🛡️',
    title: 'Premium Security',
    description: 'Bank-level encryption and security measures protect your data and ensure safe transactions.',
    color: '#FF6B35',
    stats: '256-bit SSL'
  },
  {
    icon: '⚡',
    title: 'Instant Delivery',
    description: 'Lightning-fast delivery system ensures your growth starts within minutes of purchase.',
    color: '#9B59B6',
    stats: '< 5 min delivery'
  },
  {
    icon: '🎪',
    title: '24/7 Premium Support',
    description: 'Dedicated support team available round-the-clock to assist with any questions or concerns.',
    color: '#1ABC9C',
    stats: 'Always online'
  }
];

const PremiumFeatures = () => {
  return (
    <section className="py-24 md:py-32 px-5 relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,0,200,0.15) 50%, rgba(2,10,27,0.03) 100%)'
             }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-[#FF00C8]/8 to-[#00F5D4]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F5D4]/6 to-[#A6FF00]/6 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#020A1B] mb-6 tracking-tight">
            Premium <span className="bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#75819A] max-w-3xl mx-auto font-medium">
            Experience the most advanced social media growth platform with cutting-edge technology and guaranteed results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREMIUM_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/80 backdrop-blur-lg rounded-[2.5rem] p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, ${feature.color}15 100%)`
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-[#020A1B] shadow-sm">
                  {feature.stats}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#020A1B] mb-4 group-hover:text-[#FF00C8] transition-colors">
                {feature.title}
              </h3>

              <p className="text-[#75819A] leading-relaxed font-medium text-lg">
                {feature.description}
              </p>

              {/* Hover effect line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#FF00C8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-[2.5rem] p-12 max-w-2xl mx-auto shadow-2xl border border-white/50">
            <h3 className="text-3xl font-black text-[#020A1B] mb-4">
              Ready to Experience Premium Growth?
            </h3>
            <p className="text-lg text-[#75819A] mb-8 font-medium">
              Join thousands of creators who've transformed their social media presence with TikyTop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Start Premium Growth
              </button>
              <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-[#020A1B] font-bold text-lg rounded-full border-2 border-[#FF00C8]/30 hover:border-[#00F5D4] shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFeatures;