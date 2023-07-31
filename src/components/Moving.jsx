import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      x: 100,
      duration: 2,
      ease: 'bounce',
      delay: 1,
      scrollTrigger: {
        trigger: circleRef.current,
      },
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // 스크롤링 할 때마다 조금씩 움직임
    const textMoving = (text) => {
      gsap.fromTo(
        text,
        { translate: '0' },
        {
          ease: 'none',
          translate: '0 50%',
          scrollTrigger: {
            trigger: text,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    };
    const movingContent = document.querySelectorAll('[data-effect-movingtext]');
    movingContent.forEach((text) => {
      textMoving(text);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <article>
      <h1>moving</h1>

      <div
        ref={circleRef}
        id="thirdCircle"
        className="bg-blue-400 rounded-full h-24 w-24 my-3"
      ></div>
    </article>
  );
}
