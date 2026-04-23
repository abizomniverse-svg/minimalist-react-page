import React from 'react';

const ORDER_STEPS_CONTENT = {
  title: "How Does TikyTop Work?",
  subtitle: "Our goal is to make it quick and easy to boost your social media presence using high-quality promotional services. Here's how it works:",
  steps: [
    {
      number: "1",
      title: "Select Social Network",
      description: "Choose the platform you want to grow on — Instagram, YouTube, TikTok, and more — by clicking the relevant icon at the top of the page.",
      iconType: "select",
      color: "#FF00C8"
    },
    {
      number: "2",
      title: "Choose a Service Package",
      description: "Select the specific service you need, such as followers, likes, views, or comments, and choose the quantity that aligns with your goals.",
      iconType: "package",
      color: "#00F5D4"
    },
    {
      number: "3",
      title: "Enter Your Details",
      description: "Please provide the URL to your profile or post, or enter your username (no password required).",
      iconType: "details",
      color: "#A6FF00"
    },
    {
      number: "4",
      title: "Complete Your Purchase",
      description: "Use the secure checkout to place your order. Delivery starts automatically once payment is confirmed.",
      iconType: "purchase",
      color: "#FF00C8"
    }
  ]
};

const OrderStepsSection = () => {
    const { title, subtitle, steps } = ORDER_STEPS_CONTENT;

    const getIcon = (type, color) => {
        const props = { className: "w-10 h-10", stroke: color, strokeWidth: 1.5, fill: "none" };
        switch (type) {
            case 'select':
                return (
                    <svg {...props} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777" />
                    </svg>
                );
            case 'package':
                return (
                    <svg {...props} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                );
            case 'details':
                return (
                    <svg {...props} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                );
            case 'purchase':
                return (
                    <svg {...props} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
            {/* Dot Pattern Background */}
            <div 
                className="absolute top-10 right-10 w-[300px] h-[300px] opacity-[0.15] pointer-events-none hidden lg:block"
                style={{
                    backgroundImage: 'radial-gradient(#64748B 2px, transparent 2px)',
                    backgroundSize: '24px 24px'
                }}
            />
            {/* Light Blue Circle Background */}
            <div className="absolute top-[40%] right-[-150px] w-[400px] h-[400px] bg-[#EBF7FF] rounded-full pointer-events-none -z-10 hidden md:block" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#020A1B] tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-[#75819A] leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    {steps.map((step, index) => (
                        <div 
                            key={step.number}
                            className={`
                                py-10 md:py-16 px-4 md:px-12 flex items-start gap-6 relative group
                                ${index === 0 && 'border-b md:border-r border-gray-200'}
                                ${index === 1 && 'border-b border-gray-200'}
                                ${index === 2 && 'border-b md:border-b-0 md:border-r border-gray-200'}
                            `}
                        >
                            <div className="shrink-0 flex items-start pt-1 text-gray-800 transition-transform duration-300 group-hover:scale-110">
                                {getIcon(step.iconType, step.color)}
                            </div>

                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center gap-4">
                                    <span className="w-[30px] h-[30px] shrink-0 rounded-full flex items-center justify-center text-white text-[14px] font-bold shadow-sm" style={{ background: step.color }}>
                                        {step.number}
                                    </span>
                                    <h3 className="text-xl md:text-[22px] font-extrabold text-[#020A1B] tracking-tight">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-[15px] md:text-[16px] text-[#64748B] leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrderStepsSection;
