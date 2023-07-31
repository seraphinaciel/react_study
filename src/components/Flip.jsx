import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import '../test.css';

const flipItems = [
  {
    title: 'Owl',
    secondary: 'Hoo are you?',
    text: 'Owel lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
    imageSrc: '/images/img-08.jpg',
  },
  {
    title: 'Create amazing SVG animations',
    secondary: 'Hi deer.',
    text: "DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path.",
    imageSrc: '/images/img-07.jpg',
  },
  {
    title: 'Supercharge immersive WebGL experiences',
    secondary: 'good',
    text: 'GreenSock is used in some of the most popular Three.js powered WebGL projects. Animate any object in a scene. PixiPlugin makes animating Pixi.js objects with GSAP a breeze. Animate position, scale, color effects and more with all the power and control of GSAP and the rendering speed of Pixi.js.',
    imageSrc: '/images/img-04.jpg',
  },
  {
    title: 'Control performant Canvas animations',
    secondary: 'yeah',
    text: "GSAP makes animating with Canvas even easier by providing an easier way to look and sequence animations. GSAP works great with Adobe Animate and EaseJS through GSAP's EaselJSPlugin.",
    imageSrc: '/images/img-05.jpg',
  },
  {
    title: 'Award winning websites',
    secondary: "I'm trying to sleep here.",
    text: 'GSAP is used on over 8,500,000 sites and over 1,000 sites featured on Awwwards. For some of our favorites, check out our showcase.',
    imageSrc: '/images/img-06.jpg',
  },
];

export default function Flipbox() {
  useEffect(() => {
    gsap.registerPlugin(Flip);
    const items = gsap.utils.toArray('.item'),
      details = document.querySelector('.flipDetail'),
      detailContent = document.querySelector('.content'),
      detailImage = document.querySelector('.flipDetail img'),
      detailTitle = document.querySelector('.flipDetail .title'),
      detailSecondary = document.querySelector('.flipDetail .secondary'),
      detailDescription = document.querySelector('.flipDetail .description');

    let activeItem; // keeps track of which item is open (details)

    gsap.set(detailContent, { yPercent: -100 }); // close the details "drawer" (content) initially

    function showDetails(item) {
      if (activeItem) {
        // someone could click on an element behind the open details panel in which case we should just close it.
        return hideDetails();
      }
      let onLoad = () => {
        // position the details on top of the item (scaled down)
        Flip.fit(details, item, { scale: true, fitChild: detailImage });

        // record the state
        const state = Flip.getState(details);

        // set the final state
        gsap.set(details, { clearProps: true }); // wipe out all inline stuff so it's in the native state (not scaled)
        gsap.set(details, {
          xPercent: -50,
          top: '50%',
          yPercent: -50,
          visibility: 'visible',
          overflow: 'hidden',
        });

        Flip.from(state, {
          duration: 0.5,
          ease: 'power2.inOut',
          scale: true,
          onComplete: () => gsap.set(details, { overflow: 'auto' }), // to permit scrolling if necessary
        })
          // Flip.from() returns a timeline, so add a tween to reveal the detail content. That way, if the flip gets interrupted and forced to completion & killed, this does too.
          .to(detailContent, { yPercent: 0 }, 0.2);

        detailImage.removeEventListener('load', onLoad);
        document.addEventListener('click', hideDetails);
      };

      // Change image and text
      const data = item.dataset;
      detailImage.addEventListener('load', onLoad);
      detailImage.src = item.querySelector('img').src;
      detailTitle.innerText = data.title;
      detailSecondary.innerText = data.secondary;
      detailDescription.innerText = data.text;

      // stagger-fade the items out from the one that was selected in a staggered way (and kill the tween of the selected item)
      gsap
        .to(items, {
          opacity: 0.3,
          stagger: { amount: 0.7, from: items.indexOf(item), grid: 'auto' },
        })
        .kill(item);
      gsap.to('.flipWrap', {
        backgroundColor: '#888',
        duration: 1,
        delay: 0.3,
      }); // fade out the background
      activeItem = item;
    }

    function hideDetails() {
      document.removeEventListener('click', hideDetails);
      gsap.set(details, { overflow: 'hidden' });

      // record the current state of details
      const state = Flip.getState(details);

      // scale details down so that its detailImage fits exactly on top of activeItem
      Flip.fit(details, activeItem, { scale: true, fitChild: detailImage });

      // animate the other elements, like all fade all items back up to full opacity, slide the detailContent away, and tween the background color to white.
      const tl = gsap.timeline();
      tl.set(details, { overflow: 'hidden' })
        .to(detailContent, { yPercent: -100 })
        .to(items, {
          opacity: 1,
          stagger: {
            amount: 0.7,
            from: items.indexOf(activeItem),
            grid: 'auto',
          },
        })
        .to('.flipWrap', { backgroundColor: '#fff' }, '<');

      // animate from the original state to the current one.
      Flip.from(state, {
        scale: true,
        duration: 0.5,
        delay: 0.2, // 0.2 seconds because we want the details to slide up first, then flip.
        onInterrupt: () => tl.kill(),
      }).set(details, { visibility: 'hidden' });

      activeItem = null;
    }

    // Add click listeners
    gsap.utils
      .toArray('.item')
      .forEach((item) =>
        item.addEventListener('click', () => showDetails(item))
      );

    // Intro animation
    window.addEventListener('load', () => {
      gsap.to('.flipWrap', { autoAlpha: 1, duration: 0.2 });
      gsap.from('.item', { autoAlpha: 0, yPercent: 30, stagger: 0.04 });
    });
  }, []);

  return (
    <div className="flipWrap">
      <div className="flipCon">
        <div className="flipGallery">
          {flipItems.map((fi) => (
            <div
              className="item"
              key={fi.title}
              data-title={fi.title}
              data-secondary={fi.secondary}
              data-text={fi.text}
            >
              <img src={fi.imageSrc} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="flipDetail">
        <img />

        <div className="content">
          <div className="title">Placeholder title</div>
          <div className="secondary">Placeholder secondary</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum,
            est amet delectus, blanditiis voluptatem laborum pariatur
            consequatur quae voluptate, nisi. Laborum adipisci iste earum
            distinctio, fugit, quas ipsa impedit.
          </div>
        </div>
      </div>
    </div>
  );
}
