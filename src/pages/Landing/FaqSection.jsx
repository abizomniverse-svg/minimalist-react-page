import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_CONTENT = {
  title: "Got Questions? We Have Answers",
  subtitle: "Everything you need to know about TikyTop social growth services.",
  faqs: [
    {
      question: "What service does TikyTop provide?",
      answer: "We provide comprehensive growth solutions for TikTok, Instagram, YouTube, and Facebook. Our services include high-quality followers, likes, views, and targeted engagement to boost your social presence naturally."
    },
    {
      question: "When does my order start?",
      answer: "Speed is our priority. Most orders begin processing within minutes of placement. Delivery speed is optimized to appear natural, depending on the service type and order volume."
    },
    {
      question: "Do I have to give you my account password?",
      answer: "Absolutely not. Your security is paramount. We never ask for passwords or private login details. We only require the public link to your profile or the specific content you wish to grow."
    },
    {
      question: "Which platforms are supported?",
      answer: "Currently, we specialize in the world's largest social networks: TikTok, Instagram, YouTube, and Facebook. Keep an eye out as we regularly expand our service offerings."
    },
    {
      question: "Who can benefit from these services?",
      answer: "Our services are ideal for anyone looking to amplify their digital voice—from aspiring influencers and content creators to established businesses and startups seeking social proof."
    }
  ],
  footerText: "Still have more questions?",
  ctaText: "Contact our support team"
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const { title, subtitle, faqs, footerText, ctaText } = FAQ_CONTENT;

    return (
        <section id="faq" className="py-24 md:py-32 px-5 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#020A1B] mb-6 tracking-tight leading-[1.1]">
                        {title.split('Questions?').map((text, i, arr) => (
                          <React.Fragment key={i}>
                            {text}
                            {i !== arr.length - 1 && <span className="text-[#FF00C8]">Questions?</span>}
                          </React.Fragment>
                        ))}
                    </h2>
                    <p className="text-lg md:text-xl text-[#75819A] font-medium">
                        {subtitle}
                    </p>
                </motion.div>

                <div className="space-y-5">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`rounded-[2rem] border transition-all duration-300 ${
                        openIndex === index 
                        ? 'bg-white border-gray-100 shadow-xl shadow-pink-50' 
                        : 'bg-white border-gray-100 hover:border-[#FF00C8]/30'
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-8 py-7 text-left flex items-center justify-between group"
                        aria-expanded={openIndex === index}
                      >
                        <span className={`text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#FF00C8]' : 'text-[#020A1B] group-hover:text-[#FF00C8]'}`}>
                          {faq.question}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#FF00C8] text-white rotate-180 shadow-md' : 'bg-gray-50 text-gray-400 group-hover:bg-[#FF00C8]/10 group-hover:text-[#FF00C8]'}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {openIndex === index && (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { opacity: 1, height: "auto" },
                              collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          >
                            <div className="px-8 pb-8 pt-0 text-[#75819A] text-lg leading-relaxed font-medium">
                              <div className="h-px bg-gray-100 w-full mb-6" />
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-[#64748B] mb-6 font-medium uppercase tracking-widest text-xs">{footerText}</p>
                    <button className="text-[#FF00C8] font-bold hover:underline flex items-center mx-auto transition-all uppercase tracking-widest text-sm">
                        {ctaText}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
