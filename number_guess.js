let num = Math.floor(Math.random() * 10)
let guess = 3;
if(isNaN(guess)){
    alert("number is invalid")
}
else if(num<guess){
    alert("number is too low")
}else if(guess>num){
    alert("number is high")
}else {
    alert("right.....")
}

