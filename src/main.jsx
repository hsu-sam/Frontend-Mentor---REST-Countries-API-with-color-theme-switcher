import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';
import { CountryProvider } from './contexts/CountryContext.jsx';
createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CountryProvider>
);
