import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../Study.module.css';

export default function ImgSplit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('#imgSplit img').forEach((img, index) => {
      console.log(img, index);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: 'top left',
          end: '+=100%',
          markers: true,
          pin: true,
          scrub: true,
        },
      });
      tl.to(img, { scale: 1, duration: 10 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className={styles.imgSplit} id="imgSplit">
        <div className={styles.imgSplit_wrap}>
          <img src="/images/img-04.jpg" alt="" />
          <img src="/images/img-05.jpg" alt="" />
          <img src="/images/img-06.jpg" alt="" />
          <img src="/images/img-07.jpg" alt="" />
        </div>
      </section>
    </>
  );
}

// ImgSplit.propTypes = {
//   content: PropTypes.string.isRequired,
// };
