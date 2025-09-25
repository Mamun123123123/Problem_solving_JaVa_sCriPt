// // let arr = [12,32,41]
// let arr = 1234
// let ar = arr.toString().split("").reduce((sum,item)=>sum+Number(item),0)
// // let ar = arr.flatMap(num=>num.toString().split("").map(item=>Number(item)))
// console.log(ar);

// let arr = [2,3,4,5,6,9]
// let result = arr[arr.length - 1] // find last element
// console.log(result);
// let arr2 = [3,5,7,0]
// let r = [...arr,...arr2].sort((a,b)=>a-b).join(" ")
// let r = Math.floor(Math.random()* 19)
// console.log(r);

// let arr = [1,2,3,"m"]
// let result = arr.filter(item =>{
//     // if(typeof item === "number"){
//     //     return true
//     // }else return false
//     return typeof item === "number"
//     })
//     console.log(result);

// let arr = [3,1,4,6,2,7,4,9,1,9]
// let result = Math.max(...arr)
// console.log(result);
// let obj = [
//     {name: "mamun",age:21},{name: "mamun",age:22},{name: "mamun",age:23}
// ]
// let result = obj.map(item=> Object.values(item))
// let result = obj.map(item=> item.age ).reduce((sum,i)=>sum+i,0)

// console.log( result);

// let arr = ["a",2,1,2,3,"a"]
// let result = arr.every(item => typeof item === "number")
// console.log(result);
//  let str = "mamun 123 mamun"
//  let r = str.match(/[0-9]/g).join("")
//  let result = str.split("").filter(item => !isNaN(item)).join(" ").trim()
//  console.log(r);

// function isPrime(num){
//     for (let i = 2; i <=Math.sqrt(num); i++) {
//         if(num % i === 0 ) return false
        
//     }
//     return true
// }
// console.log(isPrime(5))

// let str = "mmaunn"
// console.log(str.slice(2,4));
// slice use for string and array its return substring from given string but split use for array it use for add ,modify,delete
//slice not change orginal array but splice change original array...

// let arr = [1,2,3,4,"a"]    
// let sum=0
// let result = arr.forEach(item=> {

//     if(typeof item === "number"){
//         sum+=item
//     }

//     })
//     console.log(sum)

// let result = arr.reduce((sum,item)=>typeof item === "number"?sum+item:sum,0)
// console.log(result);


// let num = 1234
// let r = num.toString().split("").reduce((a,b)=>a+Number(b),0)
// console.log(r);
// let ob = [
//     {name:"mamun",age:22,mark:30},{name:"k",age:34,mark:70},{name:"l",age : 44,mark:56}
// ]
// let result = ob.map(item=>item.mark).reduce((sum,item)=>sum+item,0)
// let r = ob.map(item=>item.mark)
// let rr= r.sort((a,b)=>b-a)
// console.log(rr[0]);

// let n = 20
// let result = [...Array(n).keys()].map(x=>x+1)
// let r= result.filter(item=>item%2===0)
// console.log(r);


function f(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Good Morning!......😃")
        }, 1000);
    })
}
function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("How are you???...... ")
        }, 2000);
    })
}
f()
.then(msg=>console.log(msg))
f1() 

.then(msg=>console.log(msg))





