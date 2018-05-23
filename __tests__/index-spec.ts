/// <reference path='../node_modules/@types/mocha/index.d.ts' />

import index = require('../src/index');
import * as chai from 'chai';

const expect = chai.expect;
describe('index - MyClient', () => {
  it('should provide MyClient', () => {
    expect(index.MyClient).to.not.be.undefined;
  });
});
