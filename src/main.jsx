import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import About2 from './pages/About2';
import ChildPage from './pages/ChildPage';
import Onepage from './pages/Onepage';
import Hscroll from './pages/Hscroll';
import Three from './pages/Three';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Post1 from './content/Post1';

// import Keyword from './pages/Keyword';

export const menuText = [
  { url: '/', title: 'Index' },
  // {
  //   url: '/about',
  //   title: 'About',
  // },
  // {
  //   url: '/about2',
  //   title: 'About2',
  // },
  // {
  //   url: '/childPage',
  //   title: 'ChildPage',
  // },
  // {
  //   url: '/Post1',
  //   title: 'Post1',
  // },
  {
    url: '/Onepage',
    title: 'Onepage',
  },
  {
    url: '/Hscroll',
    title: 'Hscroll',
  },
];
export const dropText = [
  {
    url: '/profile',
    title: 'Profile',
  },
  {
    url: 'login',
    title: 'Login',
  },
];
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // errorElement: <div>ok</div>,
    children: [
      {
        errorElement: <h1>nope</h1>,
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/about2',
            element: <About2 />,
          },
          {
            path: '/childPage',
            element: <ChildPage />,
          },
          {
            path: '/Onepage',
            element: <Onepage />,
          },
          {
            path: '/Hscroll',
            element: <Hscroll />,
          },
          {
            path: '/Three',
            element: <Three />,
          },
          {
            path: '/Post1',
            element: <Post1 />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
    ],
  },
  /*   {
    path: '/:Keyword',
    element: <Keyword />,
  },
 */
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
