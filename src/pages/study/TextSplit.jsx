import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

// import styles from '../Study.module.css';

export default function Textsplit({ delay, content }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    Splitting();

    const textReveal = (quote, char) => {
      quote.anim = gsap.from(char, {
        duration: 0.6,
        ease: 'circ.out',
        y: '100%',
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          toggleActions: 'restart pause resume reverse',
          start: 'top 50%',
          markers: true,
          // scrub: true,
        },
      });
    };
    const quotesBox = document.querySelectorAll('[data-effect-reveal]');
    Splitting({ target: quotesBox, by: 'lines' });
    quotesBox.forEach((quote) => {
      const char = quote.querySelectorAll('.lines p');

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

  return (
    <>
      <div>
        <p data-delay={delay}>{content}</p>
      </div>
    </>
  );
}

Textsplit.propTypes = {
  delay: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
