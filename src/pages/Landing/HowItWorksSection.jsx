import React from 'react';
import { motion } from 'framer-motion';

const HOW_IT_WORKS_CONTENT = {
  title: "Your Growth Journey in 3 Simple Steps",
  subtitle: "Thousands of creators transformed their following in days — no tech skills needed.",
  steps: [
    {
      number: "01",
      icon: "🎯",
      title: "Choose Your Package",
      description: "Pick from our proven packages tailored to your goals. Simple as clicking a button.",
      socialProof: "47% choose the Starter Package"
    },
    {
      number: "02", 
      icon: "🔗",
      title: "Drop Your Link",
      description: "Paste your profile URL — that's it. No login, no password, no hassle.",
      socialProof: "Takes just 8 seconds average"
    },
    {
      number: "03",
      icon: "⚡",
      title: "Watch It Grow",
      description: "Results appear in minutes. Track progress in your personal dashboard.",
      socialProof: "Average: 2,340 new followers in 72 hours"
    }
  ],
  cta: "Start Free Trial",
  guarantee: "🛡️ 30-day refill guarantee • Cancel anytime"
};

const HowItWorksSection = () => {
  const { title, steps } = HOW_IT_WORKS_CONTENT;

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#020A1B] tracking-tight">
            {title}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: index * 0.1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-6 p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold" style={{ 
                  background: index % 2 === 0 ? '#FF00C8' : '#00F5D4', 
                  color: 'white', 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '50%'
                }}>
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-[#020A1B]">
                {step.title}
              </h3>
              
              <p className="text-[#75819A] text-center max-w-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;