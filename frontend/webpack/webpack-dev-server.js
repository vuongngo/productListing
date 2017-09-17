import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.client.development';
import appConfig from '../src/app/config';

const app = new Express();
const compiler = webpack(config);
const { port } = appConfig.webpack.server;

const options = {
  quiet: true,
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
};

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.APP_URL);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(compiler));

app.listen(port, (error) => {
  if (error) {
    console.error(error.stack || error);
    throw error;
  }

  console.info('Webpack development server listening on port %s', port);
});
