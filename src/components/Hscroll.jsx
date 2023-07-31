import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalSections = gsap.utils.toArray('section.horizontal');

    horizontalSections.forEach(function (hSection) {
      const thisPinWrap = hSection.querySelector('.pin-wrap');
      const thisAnimWrap = thisPinWrap.querySelector('.pin-wrap > div');

      const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(
        thisAnimWrap,
        {
          x: thisAnimWrap.classList.contains('to-right') ? 0 : getToValue(),
        },
        {
          x: thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
          ease: 'none',
          scrollTrigger: {
            trigger: hSection,
            start: 'top top',
            end: `+=${thisAnimWrap.scrollWidth - window.innerWidth}`,
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            scrub: true,
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
