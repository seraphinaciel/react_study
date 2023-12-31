import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../Study.module.css';

const BoxContainer = ({ id, imgSrc, alt }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tlbigger = gsap.timeline({
      scrollTrigger: {
        trigger: `.box-container__${id}`,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
      },
    });

    let scale = id === 'bigger' ? 5 : 1;
    tlbigger
      .to('body', { duration: 1 })
      .to('.box', { scale: scale, duration: 4, ease: 'none' })
      .to('body', { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [id]);

  return (
    <section className={`box-container__${id} ${styles.movieBox}`}>
      <div className={`box ${styles.box}`}>
        <img src={imgSrc} alt={alt} />
      </div>
      {id === 'smaller' && <h1>hello</h1>}
    </section>
  );
};
BoxContainer.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default BoxContainer;
