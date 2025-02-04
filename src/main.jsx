import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter from react-router-dom
import { StrictMode } from 'react'; // For StrictMode wrapper
import Router from './routes/Router';

// Import Router instead of RoutesComponent

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  </StrictMode>
);

