/* eslint-env node, mocha */
import { expect } from 'chai';
import request from 'supertest';
import { expressTestingSuite } from './../helper';
import { server } from '../../src/server';

expressTestingSuite('server routes', () => {
  let contactLocation;

  it('get all contacts', (done) => {
    request(server)
    .get('/api/contacts')
    .expect(200)
    .end((err, res) => {
      expect(err).to.not.exist();
      expect(res).to.exist();
      expect(res.body).to.exist();
      expect(Object.keys(res.body)).to.exist();
      expect(Object.keys(res.body).length).to.exist();
      expect(Object.keys(res.body).length).to.equal(10);

      done();
    });
  });

  it('create a contact', (done) => {
    request(server)
    .post('/api/contacts')
    .send({
      firstName: 'Test',
      lastName: 'Contact',
      phoneNumber: '201-987-1234',
    })
    .expect(201)
    .end((err, res) => {
      expect(err).to.not.exist();
      expect(res).to.exist();
      expect(res.headers).to.exist();
      expect(res.headers.location).to.exist();

      contactLocation = res.headers.location;

      done();
    });
  });

  it('get a contact', (done) => {
    request(server)
    .get(contactLocation)
    .expect(200)
    .end((err, res) => {
      expect(err).to.not.exist();
      expect(res).to.exist();
      expect(res.body).to.exist();
      expect(res.body.firstName).to.exist();
      expect(res.body.firstName).to.equal('Test');

      done();
    });
  });

  it('update a contact', (done) => {
    request(server)
    .put(contactLocation)
    .send({
      firstName: 'Test2',
      lastName: 'Contact',
      phoneNumber: '201-987-1234',
    })
    .expect(204, done);
  });

  it('get a contact after update', (done) => {
    request(server)
    .get(contactLocation)
    .expect(200)
    .end((err, res) => {
      expect(err).to.not.exist();
      expect(res).to.exist();
      expect(res.body).to.exist();
      expect(res.body.firstName).to.exist();
      expect(res.body.firstName).to.equal('Test2');

      done();
    });
  });

  it('delete a contact', (done) => {
    request(server)
    .delete(contactLocation)
    .expect(204, done);
  });

  it('get a contact after delete', (done) => {
    request(server)
    .get(contactLocation)
    .expect(404, done);
  });
});
