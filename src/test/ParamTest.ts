/* src/__test__/hello-test.ts */
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    expect(1).to.equal('Hello World!');
  });
});