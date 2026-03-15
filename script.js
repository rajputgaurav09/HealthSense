document.getElementById("predictionForm").addEventListener("submit", async function(e){

e.preventDefault()

let age=document.getElementById("age").value
let bp=document.getElementById("bp").value
let glucose=document.getElementById("glucose").value

let response=await fetch("http://127.0.0.1:5000/predict",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
age:age,
bp:bp,
glucose:glucose
})

})

let data=await response.json()

document.getElementById("result").innerText="Prediction: "+data.prediction

})
