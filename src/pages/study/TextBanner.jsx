import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../Study.module.css';

export default function TextBanner({ content }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('#banner_wrap').forEach((section, index) => {
      let scollPx = section.querySelector('span').scrollWidth + 2;
      section.style =
        index % 2
          ? `--start : ${scollPx * -1}px; --end:0;`
          : `--start:0; --end : ${scollPx}px`;

      const container = section.querySelector('div');
      const [x, xEnd] =
        index % 2
          ? ['100%', (container.scrollWidth - section.offsetWidth) * -1]
          : [container.scrollWidth * -1, '100%'];
      const tlbanner = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          markers: true,
        },
      });
      tlbanner.fromTo(container, { x }, { x: xEnd });
      container.style.setProperty('--align', 'center');
      // container.style = index % 2 ? `--align: flex-start` : `--align: flex-end`;
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className={` ${styles.banner_wrap}`} id="banner_wrap">
        <div className={styles.banner_container}>
          {[...Array(4)].map((_, i) => (
            // Array(3) :: 길이가 3인 배열 생성, 3x3으로 배열을 만드는게 목표!
            // map(_, index) :: (_) 현재 배열 요소, (index) 현재 요소의 인덱스

            <div key={i} className={styles.banner_items}>
              <span>{content}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

TextBanner.propTypes = {
  content: PropTypes.string.isRequired,
};
