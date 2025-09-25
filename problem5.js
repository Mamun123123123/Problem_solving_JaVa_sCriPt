let arr = [1,2,2,3,4,5,6,2,7,3]
let freq={}
arr.forEach(x => {
    freq[x] = (freq[x] || 0) + 1
});

console.log(freq);
