import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Your global styles (if any)
import App from './App';  // Your App component

// Render the App component inside the div with id 'root' in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
