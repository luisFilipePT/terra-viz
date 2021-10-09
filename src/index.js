import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
