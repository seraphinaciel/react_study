import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Index from './pages/Index';
import About from './pages/About';
import ChildPage from './pages/ChildPage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Post1 from './content/Post1';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />} />
      <Route index element={<Index />} />
      <Route path="/Post1" element={<App />} errorElement={<Post1 />} />
      <Route path="/profile" element={<App />} errorElement={<Profile />} />
      <Route path="login" element={<App />} errorElement={<Login />} />
      <Route path="/about" element={<App />} errorElement={<About />} />
      <Route path="/childPage" element={<App />} errorElement={<ChildPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
