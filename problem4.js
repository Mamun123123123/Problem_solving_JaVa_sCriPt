// find max subarray sum  
let arr = [-2,1,-3,4,-1,2,1,-5,4]
let maxSum = -Infinity

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        maxSum = Math.max(maxSum, sum)
    }
}

console.log(maxSum) 
