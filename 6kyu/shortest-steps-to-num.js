/*
Given a number, num,
return the shortest amount of steps it would take from 1,
to land exactly on that number.
*/



const shortestStepsToNum = (num) => {
  let count = 0;

  while (num > 1){
    if(num % 2 === 0){
     num = num / 2;
     count++;
    }  else{
      num --;
      count++;
    }
  }
  return count;
}
