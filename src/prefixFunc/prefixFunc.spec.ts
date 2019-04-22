import {expect} from 'chai';

import {prefixFunc} from './prefixFunc';

describe('Prefix function', () => {
  it('should return correctly calculated prefix array', () => {
    const prefix = prefixFunc('efefeftef');
    expect(prefix).to.deep.equal([0, 0, 1, 2, 3, 4, 0, 1, 2]);
  })
});