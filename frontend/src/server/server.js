import path from 'path';
import compression from 'compression';
import express from 'express';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import httpProxy from 'http-proxy';
import http from 'http';

import createSSR, { createError } from './SSR/createSSR';
import appConfig from '../app/config';

const { host, port, proxyUrl } = appConfig.server;
const app = express();
app.use(cookieParser());
const server = new http.Server(app);

export default function (parameters) {
  const proxy = httpProxy.createProxyServer({
    target: proxyUrl,
    ws: true
  });

  if (appConfig.isProd) {
    app.use(compression());
    app.use('/', express.static('static'));
  }

  // app.all('*', (req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', process.env.APP_URL);
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   next();
  // });

  app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));
  // Proxy to API server
  app.use('/api', (req, res) => {
    proxy.web(req, res, { target: proxyUrl });
  });

  app.use('/ws', (req, res) => {
    proxy.web(req, res, { target: `${proxyUrl}/ws` });
  });

  server.on('upgrade', (req, socket, head) => {
    proxy.ws(req, socket, head);
  });

  // added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
  proxy.on('error', (error, req, res) => {
    if (error.code !== 'ECONNRESET') {
      console.error('proxy error', error);
    }
    if (!res.headersSent) {
      res.writeHead(500, { 'content-type': 'application/json' });
    }

    const json = { error: 'proxy_error', reason: error.message };
    res.end(JSON.stringify(json));
  });


  app.get('*', createSSR(parameters.chunks()));
  app.use(createError(parameters.chunks()));

  server.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }

    console.info(`Listening at ${host}:${port}`);
  });
}
