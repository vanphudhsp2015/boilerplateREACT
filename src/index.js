import React from 'react';
import ReactDom from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory as createHistory } from 'history';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'react-router-dom';
import App from './pages/App';

ReactDom.render(
  <Router history={createHistory()}>
    <App />
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
