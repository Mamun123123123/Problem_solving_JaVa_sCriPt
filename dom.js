let data = document.querySelector("h1")
data.innerHTML="How are you??? 🧑‍🦳..............."
data.style.backgroundColor = "red"
data.style.color = "white"
console.log(data);
data.addEventListener("click",()=>{
  data.style.backgroundColor ="green"
  data.innerHTML = "what are you doing ?😠 ........"
    
})

let btn = document.querySelector("#btn")
let p = document.getElementById("demo")
btn.addEventListener("click",()=>{
  let count =0
  setInterval(() => {
    count++
    p.textContent = count
  }, 1000);
}) 

let button = document.getElementById("button")
let p1 = document.querySelector("#d")
button.addEventListener("click",()=>{
  let data1 = prompt("Enter your Number")
  if(data1 % 2 === 0){
    return p1.textContent = "even"
  }else{
    return p1.textContent = "Odd" 
  }
})