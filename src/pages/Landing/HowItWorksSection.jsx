import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HOW_IT_WORKS_CONTENT = {
  title: "How TikyTop Works",
  subtitle: "Get started in under 60 seconds — no technical skills required.",
  steps: [
    {
      number: "01",
      icon: "📱",
      title: "Select Platform",
      description: "Choose from TikTok, Instagram, YouTube, or Facebook.",
      stats: "4 Platforms"
    },
    {
      number: "02",
      icon: "🎯",
      title: "Pick Service",
      description: "Followers, likes, views, comments — any combination.",
      stats: "20+ Services"
    },
    {
      number: "03",
      icon: "🔗",
      title: "Enter Your Link",
      description: "Just paste your profile URL. No password needed.",
      stats: "8 Seconds"
    },
    {
      number: "04",
      icon: "🚀",
      title: "Watch Growth",
      description: "Results start appearing within minutes.",
      stats: "Instant Delivery"
    }
  ],
  guarantee: "🔒 Secure & Anonymous • 30-Day Refill Guarantee"
};

const HowItWorksSection = () => {
  const { title, steps } = HOW_IT_WORKS_CONTENT;

  return (
    <section id="how-it-works" className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#020A1B] tracking-tight">
            {title}
          </h2>
          <p className="text-[#75819A] mt-2 font-medium">{HOW_IT_WORKS_CONTENT.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: index * 0.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#FF00C8]/30 transition-all">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-lg font-bold text-[#020A1B] mb-1">{step.title}</div>
                <div className="text-xs text-[#75819A]">{step.description}</div>
                <div className="mt-3 text-xs font-bold text-[#FF00C8] bg-[#FF00C8]/10 px-3 py-1 rounded-full inline-block">
                  {step.stats}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-[#75819A]">
          {HOW_IT_WORKS_CONTENT.guarantee}
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;