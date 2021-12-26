//Ecmascript 2021 / ES12 / ES.NEXT // Ultima version de Javascript

//Tipos de variables: var, let, const

//Variables var - Variables Globales

var nombre = "Adrian Andres"; //variable global, su uso es en todo el documento

function mostraNombre(nombre){
    var nombre = 'Junior';  //variable local, su uso solamente es para la función
    var apellidos = 'Rodriguez';  //variable local
    console.log('Dentro:', nombre);
    console.log('Dentro:', apellidos);
}


mostraNombre(nombre);
console.log(nombre);


//variables let - variables de bloque
let pais = 'España';

//console.log(pais);

function mostrarPais(){
    console.log(pais); //puede accederse a la variable pais desde una función sin parametrizar la funcion
}

mostrarPais();

if(pais == 'España'){
    let continente = 'Europa'; //variable de bloque let, solo funciona para el bloque donde fue declarada
    console.log(continente);
}

//variable continente no accesible fuera del bloque
//console.log(continente);

for(contador = 0; contador <=5; contador++){ //si no se define la variable, automaticamente se toma como una variable de tipo var
    console.log(contador);
}

console.log('CONTADOR', contador)


//variables const - variables de tipo constantes, no pueden ser modificadas posteriormente

const edad = 18; //Se utilizan para valores que no se van a estar cambiano a menudo

console.log(edad);

edad = 12;

console.log(edad);