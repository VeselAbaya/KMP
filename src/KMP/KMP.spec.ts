import {expect} from 'chai';

import {KMP} from './KMP';

describe('KMP algorithm', () => {
  it('should find all entries of patter', () => {
    const entriesArray: Array<number> | -1 = KMP('abab', 'ab');
    expect(entriesArray).to.deep.equal([0, 2]);
  });

  it('should return -1', () => {
    const entriesArray: Array<number> | -1 = KMP('abcef', 'abcd');
    expect(entriesArray).to.equal(-1);
  });
});