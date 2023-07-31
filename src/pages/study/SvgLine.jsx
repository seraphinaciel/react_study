import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../Study.module.css';

const SvgLine = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const path = document.querySelector('#star-path');
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: `${pathLength}`,
      strokeDashoffset: pathLength,
    });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      scrollTrigger: {
        trigger: path,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <svg
        id={styles.starsvg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="606"
        height="155"
        viewBox="0 0 606 155"
      >
        <path
          fill="none"
          stroke="black"
          strokeWidth="4"
          id="star-path"
          d="M91.9463 135.037C65.7022 131.057 39.147 124.188 17.723 110.824C9.72249 106.177 3.4302 99.6486 1.71138 92.0428C-3.12383 72.5417 19.9728 59.542 38.4531 50.7946C84.9012 29.0189 138.49 16.9554 192.607 10.0165C240.548 3.82368 289.468 2.16832 338.4 1.71933C354.489 2.01441 370.62 2.94766 386.714 3.46139C403.594 4.74184 420.452 6.49795 437.329 7.94427C483.02 12.3048 558.243 23.3937 592.171 49.5468C640.803 93.7857 533.167 119.601 495.348 131.771C488.483 133.828 481.606 135.863 474.718 137.886C469.199 139.479 465.599 133.332 470.795 131.456C504.836 119.999 540.651 110.74 571.971 95.3655C593.712 83.577 606.802 69.2563 585.385 49.9185C569.468 37.703 547.813 30.9127 527.349 25.3046C482.162 13.5464 434.879 11.1208 388.303 7.46925C372.464 7.10643 356.632 6.81696 340.79 6.48499C324.124 7.06562 307.416 7.66269 290.763 8.2447C212.774 12.2067 134.042 21.9419 64.9247 48.8856C46.2878 56.9208 15.0722 68.2639 10.6179 85.6554C8.95983 94.2747 14.8684 102.166 23.7368 107.578C35.6874 115.364 49.6672 121.043 64.2698 124.873C82.3916 129.856 101.24 132.118 120.052 133.805C146.138 136.428 172.254 138.638 198.387 140.674C266.357 146.019 334.702 151.017 402.464 147.873C415.939 147.421 429.561 145.935 443.042 148.58C446.021 149.063 446.827 152.533 444.216 153.594C442.878 154.246 441.299 153.813 439.823 153.578C436.867 153.129 433.924 152.68 430.929 152.486C415.59 152.123 400.404 153.438 385.11 153.567C366.614 154.053 348.024 154.02 329.44 153.395C294.639 152.41 259.856 149.931 225.1 147.32C180.695 143.736 136.206 140.434 91.9576 135.059L91.9463 135.037Z"
        />
      </svg>
    </>
  );
};
export default SvgLine;
{
  /* <svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M100 0L100 72.5869" stroke="black" stroke-width="10" />
  <path d="M100 127.413L100 200" stroke="black" stroke-width="10" />
  <path d="M138.268 7.61133L119.06 53.9837" stroke="black" stroke-width="10" />
  <path d="M80.9385 146.015L61.7304 192.387" stroke="black" stroke-width="10" />
  <path d="M192.388 61.7314L146.015 80.9395" stroke="black" stroke-width="10" />
  <path d="M53.9844 119.06L7.61205 138.268" stroke="black" stroke-width="10" />
  <path d="M138.268 192.388L119.06 146.016" stroke="black" stroke-width="10" />
  <path d="M80.9385 53.9844L61.7304 7.61205" stroke="black" stroke-width="10" />
  <path d="M192.388 138.268L146.015 119.06" stroke="black" stroke-width="10" />
  <path d="M53.9844 80.9395L7.61204 61.7314" stroke="black" stroke-width="10" />
  <path d="M200 100L127.413 100" stroke="black" stroke-width="10" />
  <path d="M72.5869 100L3.85046e-05 100" stroke="black" stroke-width="10" />
  <path d="M170.711 170.71L119.384 119.384" stroke="black" stroke-width="10" />
  <path d="M80.6162 80.6157L29.2895 29.2891" stroke="black" stroke-width="10" />
  <path d="M29.2891 170.71L80.6157 119.384" stroke="black" stroke-width="10" />
  <path d="M119.384 80.6157L170.71 29.2891" stroke="black" stroke-width="10" />
</svg>; */
}
