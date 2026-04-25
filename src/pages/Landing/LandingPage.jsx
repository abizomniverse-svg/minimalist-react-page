import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth reveal for every landing section as it enters viewport
      gsap.utils.toArray('.landing-block').forEach((section) => {
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Top scroll progress bar
      gsap.to('.scroll-progress-bar', {
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="landing-page relative bg-white overflow-x-hidden">
      {/* Top scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
        <div
          className="scroll-progress-bar h-full origin-left scale-x-0"
          style={{ background: 'linear-gradient(90deg, #FF00C8 0%, #00F5D4 100%)' }}
        />
      </div>

      <Navbar />

      <section className="hero-section relative">
        <HeroSection />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32">
        <OrderStepsSection />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32 bg-[#FAFBFC]">
        <TrendingPackage />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32">
        <PremiumFeatures />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32 bg-[#FAFBFC]">
        <WhyTikytop />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32">
        <TargetedAudience />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32 bg-[#FAFBFC]">
        <TestimonialSection />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32">
        <FaqSection />
      </section>

      <section className="landing-block py-20 md:py-28 lg:py-32 bg-[#FAFBFC]">
        <Spotlight />
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
