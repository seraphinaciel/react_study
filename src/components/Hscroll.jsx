import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../App.css';

export default function Index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalSections = gsap.utils.toArray('section.horizontal');

    horizontalSections.forEach(function (sec) {
      const thisPinWrap = sec.querySelector('.pin-wrap');
      const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

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
            trigger: sec,
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

  return (
    <>
      <section className="basic-width bg-stone-700">
        <h2>ScrollTrigger Bi-Directional Fake Horizontal Scroll</h2>
        <p>...</p>
      </section>

      {/* 만들다 말았음 ㅎ */}

      <section className="horizontal text-gray-800 dark:text-gray-300">
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.
            </div>
            <div className="item">
              Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!
            </div>
            <div className="item">
              Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.
            </div>
            <div className="item">
              Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!
            </div>
            <div className="item">
              Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!
            </div>
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?
            </div>
            <div className="item">
              Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!
            </div>
            <div className="item">
              Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!
            </div>
          </div>
        </div>
      </section>

      <section className="basic-width bg-stone-700">
        <h2>Nothing to see here...</h2>
        <p>...</p>
      </section>
      {/* 웨 얘는 안나옴?? */}
      <section className="horizontal text-white">
        <div className="pin-wrap">
          <div className="animation-wrap to-left">
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.
            </div>
            <div className="item">
              Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!
            </div>
            <div className="item">
              Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.
            </div>
            <div className="item">
              Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!
            </div>
            <div className="item">
              Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!
            </div>
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?
            </div>
            <div className="item">
              Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!
            </div>
            <div className="item">
              Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!
            </div>
          </div>
        </div>
      </section>

      <section className="basic-width bg-stone-700 h-screen">
        <h2>...what do you think?</h2>
        <p>...</p>
      </section>
    </>
  );
}
