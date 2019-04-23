const fs = require('fs');
const path = require('path');

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

describe('KMP algorithm (stepik tests)', () => {
  let filesName: string[] = fs.readdirSync(path.resolve(__dirname, '../../stepik_tests'));
  filesName = filesName.filter((fileName) => !fileName.includes('.clue'));
  filesName.forEach((fileName) => {
    const testFilePath = path.resolve(__dirname, '../../stepik_tests', fileName);
    const answerFilePath = path.resolve(__dirname, '../../stepik_tests', `${fileName}.clue`);

    const inputArgs = fs.readFileSync(testFilePath).toString().trim().split('\n');
    it(`should pass stepik test #${fileName}`, () => {
      const entriesArray: Array<number> | -1 = KMP(inputArgs[1], inputArgs[0]);

      const testAnswer = fs.readFileSync(answerFilePath).toString().trim();
      expect(entriesArray.toString()).to.deep.equal(testAnswer);
    });
  })
});
