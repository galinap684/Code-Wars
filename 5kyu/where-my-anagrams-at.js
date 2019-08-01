/*
Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none.
*/


const factorialize = (num) => {
  for(i = num - 1; i >= 1; i--){
    num *= i;
  }
  return num;
}

const anagrams = (word, words) => {
  split = word.split('');
  num = factorialize(word.length);

  let arr =[];

  while (num > 0) {
    for (let i = split.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [split[i], split[j]] = [split[j], split[i]];
      }
      arr.push(split.join(''));
      num -= 1;
  }


  let uniq = [...new Set(arr.filter(word => words.includes(word)))];

  return words.filter(word => uniq.includes(word));

}
