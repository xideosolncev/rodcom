import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

/*
 * HashRouter keeps the route after a "#" (e.g. /#/members).
 * GitHub Pages only serves real files, so with BrowserRouter a page refresh on
 * /members would return 404. With HashRouter the server always receives "/",
 * so no 404.html workaround or server config is needed.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
