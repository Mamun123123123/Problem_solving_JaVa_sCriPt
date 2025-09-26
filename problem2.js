// Prefix sum ///
let arr = [2,4,1,5,10],i=1,j=3
let result = arr.map((s=>x=>s+=x)(0)) // 12,2+4=6, aivabe sum koreeee.......
let result1 = result[j] - (i>0?result[i-1]:0) // subarray sum
console.log(result);
