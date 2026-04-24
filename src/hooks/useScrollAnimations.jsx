import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to('.hero-parallax', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Section reveal animations
      gsap.utils.toArray('.reveal-section').forEach(section => {
        gsap.fromTo(section, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Card stagger reveal
      gsap.fromTo('.stagger-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.stagger-container',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Horizontal scroll story section
      const storySection = document.querySelector('.story-section');
      if (storySection) {
        const storyCards = storySection.querySelector('.story-cards');
        if (storyCards) {
          gsap.to(storyCards, {
            x: () => -(storyCards.scrollWidth - window.innerWidth + 100),
            ease: 'none',
            scrollTrigger: {
              trigger: storySection,
              start: 'top top',
              end: () => `+=${storyCards.scrollWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1
            }
          });
        }
      }

      // Progress bar animation
      gsap.to('.scroll-progress', {
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3
        }
      });

      // Text reveal character by character
      gsap.utils.toArray('.reveal-text').forEach(text => {
        const chars = text.querySelectorAll('.char');
        if (chars.length) {
          gsap.from(chars, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });

      // Platform cards with parallax
      gsap.utils.toArray('.platform-card').forEach((card, i) => {
        gsap.to(card, {
          y: -50 * (i % 2 === 0 ? 1 : -1),
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      // Testimonial horizontal scroll
      const testimonialSection = document.querySelector('.testimonial-section');
      if (testimonialSection) {
        const testimonialTrack = testimonialSection.querySelector('.testimonial-track');
        if (testimonialTrack) {
          gsap.to(testimonialTrack, {
            x: () => -(testimonialTrack.scrollWidth - window.innerWidth + 200),
            ease: 'none',
            scrollTrigger: {
              trigger: testimonialSection,
              start: 'top top',
              end: () => `+=${testimonialTrack.scrollWidth * 0.5}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1
            }
          });
        }
      }

      // Floating particles parallax
      gsap.utils.toArray('.floating-particle').forEach((particle, i) => {
        gsap.to(particle, {
          y: -200 - (i * 50),
          x: Math.sin(i) * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

export function useParallaxSection(triggerRef, speed = 0.5) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || !triggerRef?.current) return;

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, [triggerRef, speed]);

  return elementRef;
}

export function usePinnedSection(endScroll = 1000) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${endScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });
    });

    return () => ctx.revert();
  }, [endScroll]);

  return sectionRef;
}