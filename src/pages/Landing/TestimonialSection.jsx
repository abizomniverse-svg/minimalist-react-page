import { motion } from 'framer-motion';

const TESTIMONIALS_CONTENT = {
  title: "Trusted by Creators & Brands",
  subtitle: "Don't just take our word for it. Here's what our community has to say about their growth journey.",
  testimonials: [
    {
      name: "Alex Rivera",
      role: "Digital Strategist",
      content: "TikyTop completely changed my client services. The speed and quality of engagement are unmatched. Highly recommend for any agency.",
      avatar: "https://i.pravatar.cc/150?u=alex",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Lifestyle Influencer",
      content: "I was stuck at 5k followers for months. With TikyTop's targeted push, I hit 50k and started getting major brand deals within weeks!",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Startup Founder",
      content: "Social proof is everything for a new brand. TikyTop helped us establish credibility fast. The process is seamless and very professional.",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      rating: 5
    }
  ]
};

export default function TestimonialSection() {
    const { title, subtitle, testimonials } = TESTIMONIALS_CONTENT;

    return (
        <section id="testimonials" className="py-24 md:py-32 px-5 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#020A1B] mb-6 tracking-tight leading-[1.1]">
                        {title.split('Creators & Brands').map((text, i, arr) => (
                          <span key={i}>
                            {text}
                            {i !== arr.length - 1 && <span className="text-[#FF00C8]">Creators & Brands</span>}
                          </span>
                        ))}
                    </h2>
                    <p className="text-lg md:text-xl text-[#75819A] max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50/50 p-10 rounded-[2.5rem] border border-gray-100 relative group flex flex-col h-full shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300"
                        >
                            <div className="absolute top-10 right-10 text-[#FF00C8]/10 group-hover:text-[#FF00C8] transition-colors duration-300 group-hover:opacity-100">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V14C14.017 15.1046 13.1216 16 12.017 16H10.017C9.46472 16 9.017 16.4477 9.017 17V21M14.017 21H10.017M5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V14C5.017 15.1046 4.12158 16 3.017 16H1.017C0.464722 16 0.017 16.4477 0.017 17V21M5.017 21H1.017" />
                                </svg>
                            </div>

                            <div className="flex items-center mb-8">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-[#A6FF00] fill-current drop-shadow-[0_0_5px_rgba(166,255,0,0.3)]" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-[#64748B] text-lg font-medium italic leading-relaxed mb-10 flex-grow">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center mt-auto">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-16 h-16 rounded-2xl border-2 border-white shadow-md p-0.5 object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="font-bold text-[#020A1B] text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-[#FF00C8] font-bold tracking-wider uppercase">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
