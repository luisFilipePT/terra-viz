import React from 'react';
import { hydrate, render } from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import './index.css';

import App from './App';

const Web = () => (
  <React.StrictMode>
    <CustomProvider theme="dark">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<Web />, rootElement);
} else {
  render(<Web />, rootElement);
}
