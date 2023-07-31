import reactLogo from '/images/react.svg';

import viteLogo from '/images/vite.svg';

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello, This is about page!
      </h1>

      <div className="content__title content__title--left text-7xl/snug">
        <p>
          As human beings, we often find ourselves feeling out of place in the
          world around us. We sense that something is not quite right, that the
          reality we experience is not necessarily the truth. And yet, we are
          bound by the beliefs and illusions that have been ingrained in us
          since childhood. It can be a difficult and confusing journey to try
          and unravel these beliefs, to see beyond the layers of deception that
          cloud our vision. We may feel as though we need to make an effort, to
          strive for enlightenment, to grasp at something just beyond our reach.
          But what if the answer is not found in effort, but in surrender? What
          if we simply allow ourselves to be carried by the flow of existence,
          to trust in the natural rhythm of life itself?
        </p>
      </div>

      <article
        className="text-xl/loose mt-10"
        style={{ height: '500vh', backgroundColor: 'aliceblue' }}
      >
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <figure>
          <img
            className="grayscale"
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            alt=""
          />
          <figcaption className=" text-cyan-600">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </figcaption>
        </figure>
      </article>

      <ul className="boxcon">
        <li>
          <div className="box1">box1</div>
          <div className="box2">box2</div>
        </li>
      </ul>

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}
