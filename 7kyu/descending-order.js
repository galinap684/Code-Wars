//Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = n => parseInt(((""+n).split("").sort((a,b ) => b - a)).join(''))
