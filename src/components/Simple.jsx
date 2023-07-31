import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.pContent', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.pSection',
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });

    gsap.to('.pImage', {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.pSection',
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="pSection">
      <div className="container">
        <div className="pContent">
          <p>
            This is a super simple example of how to create a basic parallax
            effect using GSAPs ScrollTrigger!
          </p>
          <p>
            For more information about ScrollTrigger, check out the GreenSock
            website.
          </p>
        </div>
      </div>

      <img className="pImage" src="/images/img-01.jpg" alt="Filler image" />
    </section>
  );
}
