/* eslint-env node, mocha */
import { expect } from 'chai';
import request from 'supertest';
import app from '../src/index';

describe('server routes', () => {
  it('GET /', function it(done) {
    // NOTE: Sometimes the first request(app) call fails with 404.. not sure why, this little hack fixes the issue
    request(app)
    .get('/')
    .expect(200, done);
  });

  it('GET favicon', function it(done) {
    request(app)
    .get('/favicon.ico')
    .expect(204, done);
  });

  it('GET test data', function it(done) {
    request(app)
    .get('/testData')
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
    request(app)
    .get('/null')
    .expect(404, done);
  });

  it('POST log message', function it(done) {
    request(app)
    .post('/log')
    .send({
      message: 'testing the log',
    })
    .expect(200, done);
  });

  it('POST log message with missing request param', function it(done) {
    request(app)
    .post('/log')
    .send({ })
    .expect(500, done);
  });
});
