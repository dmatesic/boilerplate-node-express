import { isFunction } from 'lodash';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { join } from 'path';
import config from './config.js';
import * as exception from './lib/exception';
import { LEVEL, log } from './lib/logger.js';
import * as routes from './routes';
import { init as initControllers } from './controllers/index.js';

let host;
let port;

export let server;

function open(opts, serverIsOpen) {
  const app = express();
  host = opts.host || config.express.host;
  port = opts.port || config.express.port;

  // Log each request (console only)
  app.use(morgan('dev'));

  // Handle request body
  app.use(bodyParser.json({ limit: '50mb' }));

  // Serve client
  app.use(express.static(join(__dirname, '../../client/dist')));

  // Serve API documentation
  app.use('/doc', express.static(join(__dirname, '../doc')));

  // Serve API routes
  routes.init(app);

  // Error handling middleware
  // NOTE: next needs to be defined for express error handling to work, but it is also an unused var
  /* eslint-disable no-unused-vars */
  app.use((err, req, res, next) => {
    /* eslint-enable no-unused-vars */

    log({ message: err.message, level: LEVEL.ERROR });

    if (err instanceof TypeError) res.sendStatus(400);
    else if (err instanceof ReferenceError) res.sendStatus(404);
    else if (err instanceof exception.ConflictError) res.sendStatus(409);
    else res.sendStatus(500);
  });

  server = app.listen(port, host, () => {
    log({ message: `Express server on ${host}:${port} in ${config.env} mode LISTENING` });
    if (isFunction(serverIsOpen)) serverIsOpen();
  });
}

export function close() {
  if (server) {
    log({ message: `Express server on ${host}:${port} in ${config.env} mode CLOSED` });

    host = null;
    port = null;

    server.close();
  }
}

export function start(opts, serverStarted) {
  initControllers();
  open(opts, () => {
    if (isFunction(serverStarted)) serverStarted();
  });
}
