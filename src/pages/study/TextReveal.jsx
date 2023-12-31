import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../Study.module.css';

export default function TextReveal({ content }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('#transition-wrap').forEach((section, index) => {
      const w = section.querySelector('div');
      const [x, xEnd] =
        index % 2
          ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      const tlbanner = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          markers: true,
        },
      });
      tlbanner.fromTo(w, { x }, { x: xEnd });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className={styles.transition_wrap} id="transition-wrap">
        <div className={styles.transition_item}>
          <span>{content}</span>
        </div>
      </section>
    </>
  );
}

TextReveal.propTypes = {
  content: PropTypes.string.isRequired,
};
