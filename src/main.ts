import {KMP} from './KMP/KMP';

let argumentsAmount = 0;
const inputArray: Array<string> = [];
process.stdin.on('data', (data) => {
  argumentsAmount += 1;
  inputArray.push(data.toString().trim());
  if (argumentsAmount === 2) {
    console.log(KMP(inputArray[1], inputArray[0]).toString() + '\n');
    process.exit();
  }
});