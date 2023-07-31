import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../Study.module.css';

export default function TextLR() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.utils.toArray('#TextLR img').forEach((img, index) => {
    //   console.log(img, index);
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: img,
    //       start: 'top left',
    //       end: '+=100%',
    //       markers: true,
    //       pin: true,
    //       scrub: true,
    //     },
    //   });
    //   tl.to(img, { scale: 1, duration: 10 });
    // });

    document.body.style.setProperty(
      '--scroll',
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
    console.log(
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );

    const elevator = document.querySelector('#elevator');
    const elevatorL = document.querySelector('#elevatorL');
    const elevatorR = document.querySelector('#elevatorR');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: elevator,
        start: '-=50%',
        end: '+=100%',
        markers: true,
        pin: true,
        scrub: true,
      },
    });
    tl.to(elevatorL, { y: 100, x: 100, duration: 10 }).to(
      elevatorR,
      {
        y: 100,
        x: -100,
        duration: 10,
      },
      '<'
    );
    // Create the observer, same as before:
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       elevator.classList.add(`${styles.elevatorTransition}`);
    //       elevatorL.classList.add(`${styles.elevatorLTransition}`);
    //       elevatorR.classList.add(`${styles.elevatorRTransition}`);

    //       return;
    //     }

    //     elevator.classList.remove(`${styles.elevatorTransition}`);
    //     elevatorL.classList.remove(`${styles.elevatorLTransition}`);
    //     elevatorR.classList.remove(`${styles.elevatorRTransition}`);
    //   });
    // });

    // var observer = new IntersectionObserver(callback, options);
    // observer.observe(elevator);

    // observer.observe(document.querySelector('#elevator'));
    // observer.observe(document.querySelector('#elevatorL'));
    // observer.observe(document.querySelector('#elevatorR'));

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className={styles.elevator} id="elevator">
        <div className={styles.elevatorL} id="elevatorL">
          GET ON THE
        </div>
        <div className={styles.elevatorR} id="elevatorR">
          ELEVATOR
        </div>
      </div>
    </>
  );
}

// TextLR.propTypes = {
//   content: PropTypes.string.isRequired,
// };
