import * as controller from '../controllers/core.js';

export function init(app) {
  app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
  });

  app.get('/test', (req, res) => {
    const test = controller.get();

    res.status(200).send(test);
  });
}
