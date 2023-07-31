import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const gImages = [
  { no: 'img4', url: '/images/img-04.jpg', alt: 'lorem' },
  { no: 'img5', url: '/images/img-05.jpg', alt: 'lorem' },
  { no: 'img6', url: '/images/img-06.jpg', alt: 'lorem' },
  { no: 'img7', url: '/images/img-07.jpg', alt: 'lorem' },
  { no: 'img8', url: '/images/img-08.jpg', alt: 'lorem' },
  { no: 'img9', url: '/images/img-09.jpg', alt: 'lorem' },
];
const gImages2 = [
  { no: 'img1', url: '/images/img-01.jpg', alt: 'hello' },
  { no: 'img2', url: '/images/img-02.jpg', alt: 'hello' },
  { no: 'img3', url: '/images/img-03.jpg', alt: 'hello' },
];
export default function Index() {
  useEffect(() => {
    gsap.utils.toArray('.gallery2 section').forEach((section, index) => {
      const w = section.querySelector('.flex');
      const [x, xEnd] =
        index % 2
          ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      const galleryAni = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        },
      });
      galleryAni.fromTo(w, { x }, { x: xEnd });
    });
  }, []);

  return (
    <>
      <div className="gallery2 overflow-hidden">
        <section className="gText">
          <div className="flex">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>

        <section className="gWrapper">
          <ul className="flex">
            {gImages.map(({ no, url, alt }) => (
              <li key={no}>
                <img src={url} alt={alt + no} />
              </li>
            ))}
          </ul>
        </section>

        <section className="gWrapper">
          <ul className="flex">
            {gImages2.map(({ no, url, alt }) => (
              <li key={no}>
                <img src={url} alt={alt + no} />
              </li>
            ))}
          </ul>
        </section>

        <section className="gText">
          <div className="flex">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
      </div>
    </>
  );
}
