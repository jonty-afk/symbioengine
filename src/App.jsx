import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import Evolution from './components/Evolution';
import CreateCreature from './components/CreateCreature';

function App() {
  console.log('App.jsx loaded with routes:', {
    home: '/',
    about: '/about',
    marketplace: '/marketplace',
    profile: '/profile',
    evolution: '/evolution',
    createCreature: '/createcreature',
  });

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
          errorElement={<div className="error-page">Error on Home: 404 Not Found</div>}
        />
        <Route 
          path="/about" 
          element={<About />} 
          errorElement={<div className="error-page">Error on About: 404 Not Found</div>}
        />
        <Route 
          path="/marketplace" 
          element={<Marketplace />} 
          errorElement={<div className="error-page">Error on Marketplace: 404 Not Found</div>}
        />
        <Route 
          path="/profile" 
          element={<Profile />} 
          errorElement={<div className="error-page">Error on Profile: 404 Not Found</div>}
        />
        <Route 
          path="/evolution" 
          element={<Evolution />} 
          errorElement={<div className="error-page">Error on Evolution: 404 Not Found</div>}
        />
        <Route 
          path="/createcreature" 
          element={<CreateCreature />} 
          errorElement={<div className="error-page">Error on CreateCreature: 404 Not Found</div>}
        />
        {/* Custom 404 page using .error-page class */}
        <Route
          path="*"
          element={
            <div className="error-page">
              <h1>404 Not Found</h1>
              <p>Oops! The page you’re looking for doesn’t exist.</p>
              <button onClick={() => window.location.href = '/'}>Go Home</button>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;