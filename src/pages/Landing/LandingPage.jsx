import { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../../components/layout/Navbar';
import HeroSection from './HeroSection';
import OrderStepsSection from './OrderStepsSection';
import TrendingPackage from './TrendingPackage';
import PremiumFeatures from './PremiumFeatures';
import Spotlight from './Spotlight';
import TargetedAudience from './TargetedAudience';
import WhyTikytop from './WhyTikytop';
import TestimonialSection from './TestimonialSection';
import FaqSection from './FaqSection';
import Footer from './Footer';

const LandingPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.landing-section', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="landing-page relative bg-white">
      <Navbar />
      
      <div className="hero-section relative">
        <HeroSection />
      </div>
      
      <div className="landing-section py-16 md:py-20">
        <OrderStepsSection />
      </div>
      
      <div className="packages-section py-16 md:py-20">
        <TrendingPackage />
      </div>
      
      <div className="features-section py-16 md:py-20">
        <PremiumFeatures />
      </div>
      
      <div className="landing-section py-16 md:py-20">
        <WhyTikytop />
      </div>
      
      <div className="platforms-section py-16 md:py-20">
        <TargetedAudience />
      </div>
      
      <div className="landing-section py-16 md:py-20">
        <FaqSection />
      </div>
      
      <div className="testimonials-section py-16 md:py-20">
        <TestimonialSection />
      </div>
      
      <div className="landing-section py-16 md:py-20">
        <Spotlight />
      </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;