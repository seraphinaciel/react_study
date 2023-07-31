import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import styles from './Study.module.css';

// L/R banner
function Textslide() {
  const Apple = ({ con }) => {
    const arrLoop = () => {
      const newArr = [];
      let i = 0;
      newArr.push(<div key={i}>{arrLoop2(i)}</div>);
      return newArr;
    };

    const arrLoop2 = (i) => {
      const newArr = [];
      for (let j = i; j < 3; j++) {
        newArr.push(<span key={j}>{con}</span>);
      }
      return newArr;
    };

    return (
      <section className={`bText ${styles.text}`}>
        <div className={styles.container}>{arrLoop()}</div>
      </section>
    );
  };
  Apple.propTypes = {
    con: PropTypes.string.isRequired,
  };

  return (
    <div className={`bannerSlide ${styles.banner}`}>
      <Apple con={'my favorite fruit is apple'} />
      <Apple con={'a little bit of love'} />
    </div>
  );
}

export default function Study() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    Splitting();

    // 스크롤링 할 때마다 타이핑처럼 텍스트 나옴
    const textTyping = (text) => {
      gsap.fromTo(
        text.querySelectorAll('.word'),
        {
          willChange: 'opacity',
          opacity: 0.1,
          // y: '40%',
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: text,
            toggleActions: 'restart pause resume reverse',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    };
    const splitContent = document.querySelectorAll('[data-effect-typing]');
    splitContent.forEach((text) => {
      textTyping(text);
    });

    // 부드럽게 텍스트가 나타나는 효과
    const textReveal = (quote, char) => {
      quote.anim = gsap.from(char, {
        duration: 0.6,
        ease: 'circ.out',
        y: '100%',
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          toggleActions: 'restart pause resume reverse',
          start: 'top 50%',
          markers: true,
          // scrub: true,
        },
      });
    };
    const quotesBox = document.querySelectorAll('[data-effect-reveal]');
    Splitting({ target: quotesBox, by: 'lines' });
    quotesBox.forEach((quote) => {
      const char = quote.querySelectorAll('.lines p');

      if (quote.anim) {
        quote.anim.progress(1).kill();
      }

      textReveal(quote, char);
    });

    // bigger
    let tlbigger = gsap.timeline({
      scrollTrigger: {
        trigger: '.box-container__bigger',
        start: 'top top',
        end: '+=100%',
        markers: true,
        pin: true,
        scrub: true,
      },
    });

    tlbigger
      .to('body', { duration: 1 })
      .to('.box', { scale: 5, duration: 4, ease: 'none' })
      .to('body', { duration: 1 });

    // smaller
    let tlsmaller = gsap.timeline({
      scrollTrigger: {
        trigger: '.box-container__smaller',
        start: 'top top',
        end: '+=100%',
        markers: true,
        pin: true,
        scrub: true,
      },
    });

    tlsmaller.to('.box', { scale: 1, duration: 4, ease: 'none' });

    // circle
    let tlcircle = gsap.timeline({
      scrollTrigger: {
        trigger: '.circleBox',
        start: 'top top',
        end: '+=100%',
        markers: true,
        pin: true,
        scrub: true,
      },
    });
    tlcircle
      .fromTo(
        'i',
        { scale: 0 },
        { scale: 200, duration: 10, ease: 'power1.in' }
      )
      .fromTo(
        'em',
        { scale: 0 },
        { scale: 5, rotation: 360, duration: 7, ease: 'power1.in' },
        '<'
      );

    // loading
    /* window.addEventListener('load', () => {
      window.classList.remove('before-load');
      document
        .querySelector('.loading')
        .addEventListener('transitionend', (e) => {
          window.removeChild(e.currentTarget);
        });
    }); */
    gsap.utils.toArray('.bannerSlide section').forEach((section, index) => {
      const w = section.querySelector('.bText>div');
      const [x, xEnd] =
        index % 2
          ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];

      console.log(x, xEnd);
      const bText = document.querySelectorAll('.bText');
      bText.forEach((e, i) => {
        e.style =
          i === 0
            ? `--moving : ${e.querySelector('span').scrollWidth * -1}px`
            : `--moving : ${e.querySelector('span').scrollWidth}px`;
      });

      const TS = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          markers: true,
        },
      });
      TS.fromTo(w, { x }, { x: xEnd });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.removeEventListener('refresh', textReveal);
    };
  }, []);
  return (
    <>
      <section className={`box-container__bigger ${styles.movieBox}`}>
        <div className={`box ${styles.box}`}>
          <img src="/images/img-01.jpg" />
        </div>
      </section>
      <section className={`box-container__smaller ${styles.movieBox}`}>
        <div className={`box ${styles.box}`}>
          <img src="/images/img-02.jpg" />
        </div>
        <h1>hello</h1>
      </section>
      <div className="h-screen"></div>
      <Textslide />
      <article className="border">
        <div className={styles.text_reveal}>
          <div className={styles.quote2} data-effect-reveal="">
            <div>
              <p data-delay="0">Design is</p>
            </div>
            <div>
              <p data-delay="0">intelligence</p>
            </div>
            <div>
              <p data-delay="0">made visible.</p>
            </div>
            <div>
              <p data-delay="0.5">Design is</p>
            </div>
            <div>
              <p data-delay="0.7">intelligence</p>
            </div>
            <div>
              <p data-delay="0.2">made visible.</p>
            </div>
          </div>
        </div>

        <div
          className="text-5xl/loose bg-slate-100 dark:bg-transparent dark:text-white p-8"
          data-splitting=""
          data-effect-typing=""
        >
          <p>
            As human beings, we often find ourselves feeling out of place in the
            world around us. We sense that something is not quite right, that
            the reality we experience is not necessarily the truth.
          </p>
        </div>
      </article>

      <section className={`circleBox ${styles.cBox}`}>
        <div>
          <em>
            <img src="/images/vite.svg" alt="" />
          </em>
          <i></i>
        </div>
      </section>
      <section className={styles.splitImg}>
        <img src="/images/img-04.jpg" alt="" />
        <img src="/images/img-05.jpg" alt="" />
        <img src="/images/img-06.jpg" alt="" />
        <img src="/images/img-07.jpg" alt="" />
      </section>

      <article className={styles.personality} id="personality">
        <div className={`boxing ${styles.box}`}>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
        </div>
      </article>

      <div className="h-screen"></div>

      <div className="cursor"></div>
    </>
  );
}
