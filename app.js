import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
//Una disculpa, no sabía como concatenar la variable con el contador random de math y use DeepSeek para entender la sintaxis para que lo tomará como palabra y no número entero únicamente. Prometo estudiar más y prácticar.

function generarexcusa() {
    let randomwho = who[Math.floor(Math.random() * who.length)];
    let randomaction = action[Math.floor(Math.random() * action.length)];
    let randomwhat = what[Math.floor(Math.random() * what.length)];
    let randomwhen = when[Math.floor(Math.random() * when.length)];
    return randomwho+ " " +randomaction+ " " +randomwhat+" "+ randomwhen;
}

function proyectar(){
    document.getElementById("excuse").innerHTML = generarexcusa();   
}
proyectar()
  console.log("Hello Rigo from the console!");
};
