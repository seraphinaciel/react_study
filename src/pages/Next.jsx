import reactLogo from '/images/react.svg';
import viteLogo from '/images/vite.svg';

import '../App.css';

export default function Index() {
  return (
    <>
      <article
        style={{
          padding: '2rem',
          backgroundColor: 'aliceblue',
          marginTop: '2rem',
        }}
      >
        <h2 className="font-bold text-xl">
          Garlic bread with cheese: What the science tells us
        </h2>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
          <br />
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <figure className="text-center bg-sky-900 py-3">
          <img
            className="grayscale mx-auto"
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            alt=""
          />
          <figcaption className="text-white">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </figcaption>
        </figure>
      </article>

      <div className="border border-slate-300 flex justify-center">
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
