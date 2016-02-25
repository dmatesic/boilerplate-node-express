import _ from 'lodash';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import util from 'util';
import config from './config.js';
import { LEVEL, log } from './lib/logger.js';
import * as core from './controllers/core.js';
import * as routes from './routes';

const app = express();
export default app;

function startServer() {
  app.use(function use(req, res, next) {
    log({ message: util.format(
      '%s requested for %s',
      req.method,
      req.url
    ) });
    next();
  });

  app.use(bodyParser.json({
    limit: '50mb',
  }));

  // Cors required for webpack-server-dev cross ports
  // (Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response)
  app.use(cors());

  app.use(express.static(path.join(__dirname, '../../client/dist')));

  routes.init(app);

  // Error handling middleware
  // NOTE: next needs to be defined for express error handling to work, but it is also an unused var
  /* eslint-disable no-unused-vars */
  app.use(function use(err, req, res, next) {
    /* eslint-enable no-unused-vars */
    const errMessage = (_.isString(err)) ? err : err.message;

    if (Number(errMessage) > 0) res.sendStatus(errMessage);
    else {
      log({ message: errMessage, level: LEVEL.ERROR });
      res.sendStatus(500);
    }
  });

  // NOTE: Make sure mocha tests don't listen “twice”, one time in the test and one time here
  // See http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
  if (module.id === '.') {
    app.listen(config.express.port, function listen() {
      log({ message: util.format('Express server listening on port %d in %s mode', config.express.port, config.env) });
    });
  }
}

core.init().then(startServer).catch(function catchCoreErr(err) {
  log({ message: err, level: LEVEL.ERROR });
  process.exit(1);
});
