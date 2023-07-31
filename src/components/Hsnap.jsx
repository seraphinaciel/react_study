import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery3() {
  useEffect(() => {
    const sections = gsap.utils.toArray('.ccon .panel');
    const totalWidth = sections[0].offsetWidth * sections.length;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.ccon',
        pin: true,
        markers: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: `+=${totalWidth}`,
        // end: 'bottom',
      },
    });
  }, []);
}
