const multiples = (m, n) => {
  arr = [];
  i = 1;

  while (i <= m){
    arr.push(n * i);
    i++
  }
  return arr;
}
