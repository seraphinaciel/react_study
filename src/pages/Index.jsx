import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '/images/react.svg';
import viteLogo from '/images/vite.svg';
import '../App.css';

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl font-bold text-center underline underline-offset-8 decoration-dotted decoration-8">
        Hello world!
      </h1>

      <ul className="flex my-20 border-y border-dashed justify-center divide-x">
        {[
          ['main', '/'],
          ['about', '/about'],
        ].map(([title, url]) => (
          <li key={title} className="">
            <Link
              to={url}
              className="block py-2.5 px-4 rounded-md font-bold text-slate-600 uppercase before:content-['-_'] hover:before:content-['**_'] after:content-['_↗'] hover:text-slate-50 hover:bg-green-900"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div id="container" className="bg-slate-600">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div className="flex justify-center bg-gray-900">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="border p-2 my-8 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn-red hover:font-extrabold"
        >
          count is {count}
        </button>
        <p>
          Edit <code className="bg-stone-200">src/App.jsx</code> and save to
          test HMR
        </p>
      </div>
    </>
  );
}
