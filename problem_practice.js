// let arr = [1,2,3,4,5,6]
// let result = arr.filter(item => item % 2 === 0)
// console.log(result);

// let ar = ["apple","banana","apple","orange","banana"]
// let resul = [...new Set(ar)]
// console.log(resul);

let ar = ["apple","banana","apple","orange"]
let freq = {}
for (const food of ar) {
    freq[food] = (freq[food]|| 0 ) + 1
}   
let s = []
for (const item in freq) {
    if(freq[item] === 1)
        s.push(item)
        
}
let resul = s.toString().split("").filter(item => item.match(/[aeiouAEIOU]/g))
console.log(resul);




    
