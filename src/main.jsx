import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Evolution from './components/Evolution.jsx';
import Marketplace from './components/Marketplace.jsx';
import Profile from './components/Profile.jsx'; // Import the new Profile component
import './app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/evolve',
    element: <Evolution />,
  },
  {
    path: '/marketplace',
    element: <Marketplace />,
  },
  {
    path: '/profile',
    element: <Profile />, // Add the Profile route
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);