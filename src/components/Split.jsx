import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    Splitting();

    // 스크롤링 할 때마다 타이핑처럼 텍스트 나옴
    const textTyping = (text) => {
      gsap.fromTo(
        text.querySelectorAll('.word'),
        {
          willChange: 'opacity',
          opacity: 0,
          y: '40%',
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: text,
            toggleActions: 'restart pause resume reverse',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    };
    const splitContent = document.querySelectorAll('[data-effect-typing]');
    splitContent.forEach((text) => {
      textTyping(text);
    });

    // 부드럽게 텍스트가 나타나는 효과
    const textReveal = (quote, char) => {
      quote.anim = gsap.from(char, {
        duration: 0.6,
        ease: 'circ.out',
        y: 80,
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          toggleActions: 'restart pause resume reverse',
          start: 'top 50%',
          // scrub: true,
        },
      });
    };
    const quotes = document.querySelectorAll('[data-effect-reveal');
    quotes.forEach((quote) => {
      const char = quote.querySelectorAll('.char');
      if (quote.anim) {
        quote.anim.progress(1).kill();
      }
      textReveal(quote, char);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.removeEventListener('refresh', textReveal);
    };
  }, []);
}
