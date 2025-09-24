//     sum of first n numbers ///
let n = 10
let ar = [...Array(n).keys()].map(x=>x+1).join(" ") // list of 1 to n
let arr = [...Array(n).keys()].map(x=>x+1).reduce((sum,item)=> item + sum) // sum of 1 to n
let r = [...Array(n).keys()].map(x=>x+1).filter(item => item % 2 === 0)  // show even number 1 to n

console.log(r);
