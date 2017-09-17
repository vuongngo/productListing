import mongoose from 'mongoose';

// config should be imported before importing any other file
import config from './config/config';
import app from './config/express';

if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

export default app;
