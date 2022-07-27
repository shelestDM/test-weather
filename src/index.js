import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './provider/ThemeProvider';
import VisabilityProvider from './provider/VisabilityProvider';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ThemeProvider>
        <VisabilityProvider>
          <App />
        </VisabilityProvider> 
      </ThemeProvider>
);

