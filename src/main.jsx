import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import ChildPage from './pages/ChildPage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Post1 from './content/Post1';

// import Keyword from './pages/Keyword';

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
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/childPage',
            element: <ChildPage />,
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
