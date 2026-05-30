'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function scrambleText(el, duration = 1) {
  const original = el.dataset.scrambleText || el.textContent || '';
  el.dataset.scrambleText = original;

  const proxy = { progress: 0 };

  gsap.to(proxy, {
    progress: 1,
    duration,
    ease: 'none',
    onUpdate: () => {
      const revealCount = Math.floor(original.length * proxy.progress);
      let output = '';

      for (let i = 0; i < original.length; i += 1) {
        const char = original[i];
        if (char === ' ') {
          output += ' ';
          continue;
        }

        if (i < revealCount) {
          output += char;
          continue;
        }

        const randIndex = Math.floor(
          Math.random() * SCRAMBLE_CHARS.length
        );
        output += SCRAMBLE_CHARS[randIndex];
      }

      el.textContent = output;
    },
    onComplete: () => {
      el.textContent = original;
    },
  });
}

export default function ScrollAnimations() {
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
    lenis.on('scroll', ScrollTrigger.update);

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
              gsap.from(items, {
                autoAlpha: 0,
                y: 24,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.08,
              });
            },
          })
        );
      }

      const scrambleTargets = section.querySelectorAll('[data-scramble]');
      scrambleTargets.forEach((el) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => scrambleText(el, 1),
          })
        );
      });
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
  }, []);

  return null;
}
