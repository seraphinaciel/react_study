import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    function handleClick(event) {
      const { target } = event;
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: `#${target.id.replace('btn', '')}`, offsetY: 104 },
      });
    }

    document.querySelectorAll('.snb button').forEach((btn) => {
      btn.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('.snb button').forEach((btn) => {
        btn.removeEventListener('click', handleClick);
      });
    };
  }, []);

  useEffect(() => {
    function snbFixed() {
      const snb = document.querySelector('.snb');
      const snbBtn = document.querySelector('.snb-button');
      const snbWrap = document.querySelector('.snb-wrap');
      const headerHeight = document.querySelector('header');
      const snbTop =
        snb.offsetTop + snbWrap.offsetHeight - headerHeight.offsetHeight - 80;

      if (window.scrollY >= snbTop) {
        snbBtn.classList.add('static');
        snbBtn.classList.remove('sticky');
      } else {
        snbBtn.classList.remove('static');
        snbBtn.classList.add('sticky');
      }
    }
    window.addEventListener('scroll', snbFixed);

    return () => {
      window.removeEventListener('scroll', snbFixed);
    };
  }, []);
}
