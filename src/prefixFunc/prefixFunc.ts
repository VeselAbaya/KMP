export const prefixFunc = (str: string): Array<number> => {
  let prefix: Array<number> = new Array(str.length).fill(0);
  for (let i = 1; i !== str.length; ++i) {
    let j = prefix[i-1];
    while (j > 0 && str[i] != str[j]) {
      j = prefix[j-1];
    }

    if (str[i] === str[j]) {
      j += 1
    }

    prefix[i] = j;
  }

  return prefix;
};