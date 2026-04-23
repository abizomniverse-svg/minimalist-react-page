import React from 'react';
import { motion } from 'framer-motion';

const HOW_IT_WORKS_CONTENT = {
  title: "How to Place an Order in Simple Steps?",
  steps: [
    {
      number: "1",
      title: "Select Your Service",
      description: "Choose the specific social media growth service you need from our comprehensive offerings."
    },
    {
      number: "2",
      title: "Enter Your Details",
      description: "Provide your profile URL or username (no password required) and select the quantity you want."
    },
    {
      number: "3",
      title: "Secure Checkout",
      description: "Complete your purchase through our secure payment gateway. Your order starts processing immediately."
    },
    {
      number: "4",
      title: "Sit Back & Relax",
      description: "We handle everything else! Watch your social media presence grow with authentic engagement."
    },
    {
      number: "5",
      title: "Enjoy Results",
      description: "See increased engagement, followers, and visibility. Refill and support available if needed."
    }
  ]
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