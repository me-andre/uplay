import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Mount } from './Layout/LiftedLayout';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Mount>
      <App />
    </Mount>
  </React.StrictMode>,
  document.getElementById('root')
);
