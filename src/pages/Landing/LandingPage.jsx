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
    // Main scroll animations context
    const ctx = gsap.context(() => {
      
      // Global progress bar
      gsap.set('.scroll-progress-bar', { scaleX: 0, transformOrigin: 'left' });
      gsap.to('.scroll-progress-bar', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3
        }
      });

      // Hero section parallax
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Section reveals
      const sections = gsap.utils.toArray('.landing-section');
      sections.forEach(section => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Package cards stagger
      gsap.from('.package-card', {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.packages-section',
          start: 'top 75%'
        }
      });

      // Analytics floating cards
      gsap.utils.toArray('.analytics-card').forEach((card, i) => {
        gsap.to(card, {
          y: -30 * (i % 2 === 0 ? 1 : -1),
          ease: 'none',
          scrollTrigger: {
            trigger: '.analytics-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      // Testimonial horizontal scroll with pin
      const testimonialSection = document.querySelector('.testimonials-section');
      if (testimonialSection) {
        gsap.to('.testimonials-track', {
          x: () => {
            const track = document.querySelector('.testimonials-track');
            return track ? -(track.scrollWidth - window.innerWidth + 200) : 0;
          },
          ease: 'none',
          scrollTrigger: {
            trigger: testimonialSection,
            start: 'top top',
            end: () => `+=${testimonialSection.scrollWidth * 0.8}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        });
      }

      // FAQ accordion reveals
      gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Feature cards with scale effect
      gsap.from('.feature-card', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 70%'
        }
      });

      // Platform buttons
      gsap.from('.platform-btn', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.platforms-section',
          start: 'top 80%'
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="landing-page relative bg-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div className="scroll-progress-bar h-full bg-gradient-to-r from-[#FF00C8] to-[#00F5D4]"></div>
      </div>

      <Navbar />
      
      <div className="hero-section relative">
        <HeroSection />
      </div>
      
      <div className="landing-section landing-section-1 py-32 md:py-40">
        <OrderStepsSection />
      </div>
      
      <div className="packages-section py-32 md:py-40">
        <TrendingPackage />
      </div>
      
      <div className="features-section py-32 md:py-40">
        <PremiumFeatures />
      </div>
      
      <div className="landing-section py-32 md:py-40">
        <WhyTikytop />
      </div>
      
      <div className="platforms-section py-32 md:py-40">
        <TargetedAudience />
      </div>
      
      <div className="landing-section py-32 md:py-40">
        <FaqSection />
      </div>
      
      <div className="testimonials-section py-32 md:py-40">
        <TestimonialSection />
      </div>
      
      <div className="landing-section py-32 md:py-40">
        <Spotlight />
      </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;