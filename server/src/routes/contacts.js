import * as controller from '../controllers/contacts.js';

export function init(app) {
  app.post('/api/contacts', (req, res) => {
    const id = controller.create(req.body);

    res.status(201).location(`/api/contacts/${id}`).end();
  });

  app.get('/api/contacts', (req, res) => {
    const contacts = controller.get();

    res.status(200).send(contacts);
  });

  app.get('/api/contacts/:id', (req, res) => {
    const contact = controller.get(req.params.id);

    if (!contact) res.status(404).end();
    else res.status(200).send(contact);
  });

  app.put('/api/contacts/:id', (req, res) => {
    controller.update({
      id: req.params.id,
      body: req.body,
    });

    res.status(204).end();
  });

  app.patch('/api/contacts/:id', (req, res) => {
    controller.patch({
      id: req.params.id,
      body: req.body,
    });

    res.status(204).end();
  });

  app.delete('/api/contacts/:id', (req, res) => {
    controller.remove(req.params.id);

    res.status(204).end();
  });
}
