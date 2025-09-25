//  let str = "Mamun"
//  console.log(str);
//  let str2=`Hi ${str}`
//  let str3="2hi" - 12
//  let s=12+"hi"
//  console.log(str3,typeof str2);
 
// let str = new String("hi \"mamun")//output is object ar moto
// console.log(str);

// let str = "        maMun"
// let str2 = str.toUpperCase()
// let str3 = str.toLowerCase()
// console.log(str.trim());
// console.log(str2);
// console.log(str3);
// let str = "AAAal mamun"
// let result = str.includes("m")
// let resultt = str.indexOf("m")// first index show kore ,na thakle -1 dibe
// let resulttt= str.charAt(0) 
// let result = str.replace("a","u")
// let result = str.replace("a","u")
// let result = str.split()
// let result1 = str.split("")
// let result2 = str.split(" ")
// let result3 = str.split("m")


// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// let str1=str.toLowerCase()
// let str2=str1.length
// let result = `@${str1.trim().replaceAll(" ","")}_${str2}`
// console.log(result);
// let f = {}
// for (const el of str) {
//     f[el] = (f[el]||0) + 1
// }
// let result = Object.entries(f).sort((a,b)=>b[1]-a[1])
// let ans = {}
// for (const [k,v] of result) {
//     ans[k]=v
// }
// console.log(ans);

////////////// Arrayyyyyyyyyy
// let arr = [2,1,2,3,1]
// let result = arr.every((item,index)=> {
//     if(arr.indexOf(item) !== index){
//               return true
//         }else return false

// })
// let arr = [2,1,2,3,1] //"mamun" 
// // let result = arr.filter((item,index) =>arr.indexOf(item) !== index).reduce((sum,item)=>sum+item,0) 
// let f = {}
// for (const e of arr) {
//     f[e] = (f[e] || 0) + 1
// }
// let sum = 0
// for (const num in f) {
//     if (f[num]=== 1) {
//        sum+=Number(num) * f[num]
//     } 
    
    
// }
// console.log(f);
// console.log(sum);


// let obj = [
//     {name:"mamun",age:23,city:"Dhaka"},
//     {name:"maria",age:77,city:"Khulna"},
//     {name:"prity",age:34,city:"china"},
//     {name:"nusrat",age:17,city:"England"},
//     {name:"Israt",age:30,city:"Dhaka"},
//     {name:"maria",age:27,city:"England"},
//     {name:"faraz",age:25,city:"china"},
//     {name:"abdullah",age:12,city:"Dhaka"},
//     {name:"masum",age:20,city:"India"}
// ]
// function f(obj) {
//     let group_by_city ={}
//     obj.forEach(item => {
//         if(group_by_city.hasOwnProperty(item.city)){
//         group_by_city[item.city].push(item)
//     }else{
//         group_by_city[item.city] = [item]
//     }
//     });
//     return group_by_city
    
// }

// console.log(f(obj));


// let n=1094584983430943094384384984349309430943094304930489
// function f(num) {
//     // let result = [...Array(num).keys()].map(x=>x+1).reduce((sum,item)=>sum+item,0)
//     let result= (num * (num + 1)/2)
//      return result
    
// }
// console.log(f(n));

let str = "mamun"
let result= str.includes("aeiou")
console.log(result);
