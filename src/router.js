import * as core from './core.js';
import { log } from './logger.js';

export function init(app) {
  app.get('/favicon.ico', function get(req, res) {
    res.status(204).end();
  });

  app.post('/log', function post(req, res, next) {
    try {
      log({
        message: req.body.message,
        level: req.body.level,
        client: true,
      });

      res.status(200).end();
    } catch (ex) {
      return next(ex);
    }
  });

  app.get('/testData', function get(req, res) {
    res.send(core.getTestData());
  });
}
