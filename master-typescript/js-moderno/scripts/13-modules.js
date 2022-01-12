import utilidades from './14-mymodule.js'

console.log("Project Main File");
//document.body.style = "Background:red";

let nombres = ["Adrian", "Fernando", "Oscar"];
utilidades.imprimirArray(nombres);

let nombre = "Federico Gutiérrez";
console.log(utilidades.saludo(nombre));