import {prefixFunc} from '../prefixFunc/prefixFunc';

export const KMP = (str: string, pattern: string): Array<number> | -1 => {
  const prefixArray: Array<number> = prefixFunc(pattern);
  const result: Array<number> = [];
  let strIndex = 0;
  let patternIndex = 0;

  while (strIndex < str.length) {
    if (str[strIndex] === pattern[patternIndex]) {
      ++strIndex;
      ++patternIndex;
      if (patternIndex === pattern.length) {
        result.push(strIndex - pattern.length)
      }
    }
    else if (patternIndex === 0) {
      ++strIndex;
    }
    else {
      patternIndex = prefixArray[patternIndex-1];
    }
  }

  return result.length > 0 ? result : -1;
};