/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-router-server';

import { basename } from 'app/config';
import configureStore from 'app/store/configure';
import api from 'app/services/api';
import Routers from 'app/routes';
import Html from './Html';
import Error from './Error';


const renderApp = ({ store, context, location, sheet }) => {
  const app = sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter basename={basename} context={context} location={location}>
        <Routers />
      </StaticRouter>
    </Provider>
  );
  return renderToString(app);
};

const renderHtml = ({ serverState, initialState, content, sheet, assets }) => {
  const styles = sheet.getStyleElement();
  const state = `
    window.__ENDPOINT__ = '${process.env.API_URL}';
    window.__SERVER_STATE__ = ${serialize(serverState)};
    window.__INITIAL_STATE__ = ${serialize(initialState)};
  `;
  const html = <Html {...{ styles, assets, state, content }} />;
  return `<!doctype html>\n${renderToStaticMarkup(html)}`;
};

export function createError(assets) {
  return (err, req, res, next) => {
    const sheet = new ServerStyleSheet();
    const content = renderToStaticMarkup(sheet.collectStyles(<Error />));
    res.status(500).send(renderHtml({ content, sheet, assets }));
    console.error(err);
    next(err);
  };
}


export default function createSSR(assets) {
  return (req, res, next) => {
    // Create cookie with token to recongnize user
    const cookie = req.cookies ? req.cookies.token : undefined;
    if (typeof cookie === 'undefined') {
      let randomNumber = Math.random().toString();
      randomNumber = randomNumber.substring(2, randomNumber.length);
      res.cookie('token', randomNumber, { maxAge: 900000, httpOnly: true });
    }
    const location = req.url;
    const store = configureStore({}, { api: api.create() });
    const context = {};
    const sheet = new ServerStyleSheet();

    renderApp({ store, context, location, sheet })
      .then(({ state: serverState, html: content }) => {
        if (context.status) {
          res.status(context.status);
        }
        if (context.url) {
          res.redirect(context.url);
        } else {
          const initialState = store.getState();
          res.send(renderHtml({ serverState, initialState, content, sheet, assets }));
        }
      })
      .catch(next);
  };
}
