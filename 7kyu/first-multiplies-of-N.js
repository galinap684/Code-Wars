/*Implement a function, multiples(m, n),
which returns an array of the first m multiples of the real number n.
Assume that m is a positive integer.
*/

const multiples = (m, n) => {
  arr = [];
  i = 1;

  while (i <= m){
    arr.push(n * i);
    i++
  }
  return arr;
}
