import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './provider/ThemeProvider';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </React.StrictMode>
);

