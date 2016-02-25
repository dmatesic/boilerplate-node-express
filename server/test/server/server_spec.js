/* eslint-env node, mocha */
import request from 'supertest';
import { expressTestingSuite } from './../helper';
import { server } from '../../src/server';

expressTestingSuite('server routes', () => {
  it('GET /', (done) => {
    request(server)
    .get('/')
    .expect(200, done);
  });

  it('GET favicon', (done) => {
    request(server)
    .get('/favicon.ico')
    .expect(204, done);
  });

  it('GET invalid path', (done) => {
    request(server)
    .get('/null')
    .expect(404, done);
  });
});
