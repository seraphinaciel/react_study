import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const posts = [
  {
    id: 'section1',
    context: `As human beings, we often find ourselves feeling out of place in the
            world around us. We sense that something is not quite right, that
            the reality we experience is not necessarily the truth. And yet, we
            are bound by the beliefs and illusions that have been ingrained in
            us since childhood. It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision. We may feel as though we need to make an
            effort, to strive for enlightenment, to grasp at something just
            beyond our reach. But what if the answer is not found in effort, but
            in surrender? What if we simply allow ourselves to be carried by the
            flow of existence, to trust in the natural rhythm of life itself?`,
  },
  {
    id: 'section2',
    context: `As human beings, we often find ourselves feeling out of place in the
            world around us. We sense that something is not quite right, that
            the reality we experience is not necessarily the truth. And yet, we
            are bound by the beliefs and illusions that have been ingrained in
            us since childhood. It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision.`,
  },
  {
    id: 'section3',
    context: `It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision. We may feel as though we need to make an
            effort, to strive for enlightenment, to grasp at something just
            beyond our reach. But what if the answer is not found in effort, but
            in surrender?`,
  },
  {
    id: 'section4',
    context: `And yet, we
            are bound by the beliefs and illusions that have been ingrained in
            us since childhood. It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision. We may feel as though we need to make an
            effort, to strive for enlightenment, to grasp at something just
            beyond our reach. But what if the answer is not found in effort, but
            in surrender? What if we simply allow ourselves to be carried by the
            flow of existence, to trust in the natural rhythm of life itself?`,
  },
];

function Snb() {
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
      const snbWrap = document.querySelector('.snb-wrap');
      const headerHeight = document.querySelector('header');
      const snbTop =
        snbWrap.offsetTop +
        snbWrap.offsetHeight -
        headerHeight.offsetHeight -
        80;
      // 1204 + 744 - headerHeight - snbMarginTop
      if (window.scrollY > snbTop) {
        snb.classList.add('static');
        snb.classList.remove('sticky');
      } else {
        snb.classList.remove('static');
        snb.classList.add('sticky');
      }
    }
    window.addEventListener('scroll', snbFixed);

    return () => {
      window.removeEventListener('scroll', snbFixed);
    };
  }, []);

  return (
    <ul className="snb flex justify-center gap-2 sticky top-20 w-full">
      {posts.map((post) => (
        <li key={post.id}>
          <button
            id={`${post.id}btn`}
            className="bg-teal-900 text-white font-bold text-xs md:text-base rounded-md p-2 px-4"
          >
            {post.id}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <>
      <h1 className="underline underline-offset-4 decoration-red-700 text-red-700 text-5xl">
        anchor scroll
      </h1>
      <section className="bg-sky-100">
        <Snb />
        <div className="snb-wrap mt-20 text-lg/loose font-thin">
          {posts.map((post) => (
            <div key={post.id}>
              <h2 id={post.id} className="text-2xl text-red-400 font-bold">
                {post.id}
              </h2>
              <p>{post.context}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
