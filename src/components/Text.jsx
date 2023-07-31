import { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import '../test.css';

export default function Index(textParagraph) {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const sentenceEndExp = /(\.|\?|!)$/g;

    function machineGun(container, text) {
      const words = text.split(' ');
      const tl = gsap.timeline({ delay: 0.6, repeat: 2, repeatDelay: 4 });
      let time = 0;

      words.forEach((word) => {
        const isSentenceEnd = sentenceEndExp.test(word);
        const element = document.createElement('h3');
        element.textContent = word;
        container.appendChild(element);
        const duration = Math.max(
          0.5,
          time
          // word.length * 0.08 + (isSentenceEnd ? 0.6 : 0)
        );

        gsap.set(element, { opacity: 0, scale: 0, z: 0.01 });
        tl.to(
          element,
          {
            duration: duration,
            scale: 1.2,
            ease: 'slow(0.25, 0.9)',
            onStart: () => {
              gsap.set(element, { visibility: 'visible' });
            },
            onComplete: () => {
              gsap.set(element, { visibility: 'hidden' });
            },
          },
          time
        )
          .to(
            element,
            {
              duration: duration,
              opacity: 1,
              ease: 'slow(0.25, 0.9, true)',
            },
            time
          )
          .to(
            element,
            {
              duration: 0.3,
              opacity: 0,
              ease: 'power1.out',
            },
            time + duration - 0.3
          );

        time += duration - 0.05;
        if (isSentenceEnd) {
          time += 0.6;
        }
        console.log(duration, time);
      });
    }

    textParagraph.forEach((item) => {
      const container = document.getElementById(item.no);
      machineGun(container, item.txt);
    });
  });
}
