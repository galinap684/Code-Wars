/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
*/

const sortArray = (array) => {
  oddNums = [];
  array.forEach(function(item){
    if(item % 2 == 1){
      pos = array.indexOf(item)
      array[pos] = '_'
      oddNums.push(item);
    }
  })

  oddNums.sort(function(a, b){return a-b});

  array.forEach(function(item){
    if(item === '_'){
     for(i = 0; i < oddNums.length; i++){
       pos = array.indexOf(item)
       array[pos] = oddNums[i];
     }
    }
  })
  return array;


}
