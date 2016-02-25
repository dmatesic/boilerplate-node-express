/* eslint-env node, mocha */
import { expect } from 'chai';
import request from 'supertest';
import { expressTestingSuite } from './../helper';
import { server } from '../../src/server';

expressTestingSuite('server routes', () => {
  it('GET /', function it(done) {
    // NOTE: Sometimes the first request(app) call fails with 404.. not sure why, this little hack fixes the issue
    request(server)
    .get('/')
    .expect(200, done);
  });

  it('GET favicon', function it(done) {
    request(server)
    .get('/favicon.ico')
    .expect(204, done);
  });

  it('GET test data', function it(done) {
    request(server)
    .get('/test')
    .expect(200)
    .end(function end(err, res) {
      expect(err).to.not.exist();
      expect(res).to.exist();
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length.above(0);
      expect(res.body[0]).to.exist();
      expect(res.body[0]).to.be.a('object');
      done();
    });
  });

  it('GET invalid path', function it(done) {
    request(server)
    .get('/null')
    .expect(404, done);
  });
});
