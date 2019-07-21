/*Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

const findSum = (num) => {
let totalSum = 0;
let i = 0;

  while (i <= num) {
    if(i % 3 === 0 || i % 5 === 0){
      totalSum += i;
    }
    i += 1;
  }
  return totalSum;
}


findSum(10);
