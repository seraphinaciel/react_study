import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const gImg = [
  { no: 'img1', url: '/images/img-01.jpg', cla: '' },
  { no: 'img2', url: '/images/img-02.jpg', cla: '' },
  { no: 'img3', url: '/images/img-03.jpg', cla: '' },
  { no: 'img4', url: '/images/img-04.jpg', cla: '' },
  { no: 'img5 centerPiece', url: '/images/img-05.jpg', cla: 'centerBlock' },
  { no: 'img6', url: '/images/img-06.jpg', cla: '' },
  { no: 'img7', url: '/images/img-07.jpg', cla: '' },
  { no: 'img8', url: '/images/img-08.jpg', cla: '' },
  { no: 'img9', url: '/images/img-09.jpg', cla: '' },
];
export default function Index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.gContainer',
          start: 'top top',
          end: () => innerHeight * 4,
          scrub: true,
          pin: '.gBox',
          anticipatePin: 1,
        },
      })
      .set('.gBlock:not(.centerBlock)', { autoAlpha: 0 })
      .to('.gBlock:not(.centerBlock)', { duration: 0.1, autoAlpha: 1 }, 0.001)
      .from('.gLayer', {
        scale: 2,
        ease: 'none',
      });

    const bigImg = new Image();
    bigImg.addEventListener('load', function () {
      gsap.to('.centerPiece .gridBlock', { autoAlpha: 1, duration: 0.5 });
    });

    //   bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
  }, []);

  return (
    <>
      <h1 className="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>

      <div className="gContainer">
        <div className="gBox">
          {gImg.map(({ no, url, cla }) => (
            <div className={`gLayer ${no}`} key={no}>
              <div
                className={`gBlock ${cla}`}
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
