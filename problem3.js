// count of numbers divisible by x 
let n =100,x=5
let num = [...Array(n).keys()].map(x=>x+1).filter(item => item % x === 0) // show
let result = Math.floor(n/x) // ocunt
console.log((num));
console.log(result);
