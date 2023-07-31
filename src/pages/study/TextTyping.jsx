import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

import styles from '../Study.module.css';

export default function Texttyping({ content }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    Splitting();

    const textTyping = (text) => {
      gsap.fromTo(
        text.querySelectorAll('.word'),
        {
          willChange: 'opacity',
          opacity: 0.1,
          // y: '40%',
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        className={styles.textTyping}
        data-splitting=""
        data-effect-typing=""
      >
        <p>{content}</p>
      </div>
    </>
  );
}

Texttyping.propTypes = {
  content: PropTypes.string.isRequired,
};
