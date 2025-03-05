import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Adjust if your CSS file is named differently (e.g., app.css)
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);