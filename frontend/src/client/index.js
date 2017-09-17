/* eslint-disable no-underscore-dangle */
// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ServerStateProvider } from 'react-router-server';
import 'app/styles/global';

import { basename } from 'app/config';
import configureStore from 'app/store/configure';
import api from 'app/services/api';
import Routers from 'app/routes';

const serverState = window.__SERVER_STATE__;
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, { api: api.create() });

function renderApp() {
  return (
    <ServerStateProvider state={serverState}>
      <Provider store={store}>
        <BrowserRouter basename={basename}>
          <Routers />
        </BrowserRouter>
      </Provider>
    </ServerStateProvider>
  );
}

const root = document.getElementById('app');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept('app/routes', () => {
    require('app/routes');
    render(renderApp(), root);
  });
}
