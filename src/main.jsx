import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CourseProvider>
        <App />
      </CourseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
