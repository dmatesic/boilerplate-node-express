/* eslint-env node, mocha */
import chai from 'chai';
import dirtyChai from 'dirty-chai'; // Extends Chai with lint-friendly terminating assertions
import { start, close } from '../src/server';

chai.use(dirtyChai);

export function expressTestingSuite(name, tests) {
  describe(name, () => {
    beforeEach((done) => {
      const opts = {}; // use default host and port
      start(opts, done);
    });

    afterEach(() => {
      close();
    });

    tests();
  });
}
