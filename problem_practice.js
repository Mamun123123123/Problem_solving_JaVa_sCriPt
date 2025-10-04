// let arr = [1,2,3,4,5,6]
// let result = arr.filter(item => item % 2 === 0)
// console.log(result);

// let ar = ["apple","banana","apple","orange","banana"]
// let resul = [...new Set(ar)]
// console.log(resul);

// let ar = ["apple","banana","apple","orange"]
// let freq = {}
// for (const food of ar) {
//     freq[food] = (freq[food]|| 0 ) + 1
// }   
// let s = []
// for (const item in freq) {
//     if(freq[item] === 1)
//         s.push(item)
        
// }
// let resul = s.toString().split("").filter(item => item.match(/[aeiouAEIOU]/g))
// console.log(resul);

// let arr = [10,20,30,40,50]
// let resul = arr.reduce((sum,item)=>sum+item,0)
// console.log(resul);

// let str = "levelef"
// let pstr = str.split("").reverse().join("")
// console.log(pstr);
// if(pstr === str)
// {
//     console.log("palindrom");
    
// }else{
//     console.log("not palindrom");
    
// }

// let str = "javascript is fun"
// let result = str.split(" ").map(item=>item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
// console.log(result);

// let student = {
//     name:"Mamun",marks:{
//         math:80,eng:70,sci:90
//     }
// }
// let resul = Object.values(student.marks).reduce((a,b)=>a+b,0)

// console.log(resul);


let ob =[
    {name:"A",age:20},{name:"B",age:25},{name:"C",age:22}

]
  
let maxAge = Math.max(...ob.map(item => item.age));
console.log("Max Age:", maxAge);