'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';


export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', () => ScrollTrigger.update());

    const triggers = [];
    const sections = gsap.utils.toArray('[data-animate-section]');

    sections.forEach((section) => {
      const items = section.querySelectorAll('[data-animate]');
      if (items.length) {
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: 'top 75%',
            once: true,
            onEnter: () => {
              gsap.fromTo(gsap.utils.toArray(items), 
                { autoAlpha: 0, y: 24 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.8,
                  ease: 'power3.out',
                  stagger: 0.08,
                }
              );
            },
          })
        );
      }

      // No scramble effect: text uses simple fade-in animation via data-animate.
    });

    const parallaxItems = gsap.utils.toArray('[data-parallax]');
    parallaxItems.forEach((el) => {
      const strength = Number(el.dataset.parallaxStrength || 16);
      const tween = gsap.to(el, {
        y: strength,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    });

    const marqueeTracks = gsap.utils.toArray('[data-marquee-track]');
    marqueeTracks.forEach((track) => {
      const tween = gsap.fromTo(
        track,
        { xPercent: 0 },
        {
          xPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: track.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete window.lenis;
    };
  }, [pathname]);

  return null;
}
