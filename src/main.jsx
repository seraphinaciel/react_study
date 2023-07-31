import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import ChildPage from './pages/ChildPage';
import Onepage from './pages/Onepage';
import Post1 from './pages/Post1';

import Tab from './components/Tab';
import Split from './components/Split';
import Hscroll from './components/Hscroll';
import Three from './components/Three';
import Gallery from './components/Gallery';
import Simple from './components/Simple';

import Profile from './pages/Profile';
import Login from './pages/Login';

// import Keyword from './pages/Keyword';

export const menuText = [
  { url: '/', title: 'Index' },
  {
    url: '/Onepage',
    title: 'Onepage',
  },
  {
    url: '/Gallery',
    title: 'Gallery',
  },
  {
    url: '/Simple',
    title: 'Simple',
  },
  {
    url: '/Three',
    title: 'Three',
  },
  {
    url: '/childPage',
    title: 'ChildPage',
  },
  {
    url: '/Post1',
    title: 'Post1',
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
        // errorElement: <h1>nope</h1>,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/about',
            element: <Tab />,
          },
          {
            path: '/Split',
            element: <Split />,
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
            path: '/Gallery',
            element: <Gallery />,
          },
          {
            path: '/Simple',
            element: <Simple />,
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
