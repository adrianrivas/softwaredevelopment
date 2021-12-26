

let persona=['Adrian Landazuri', 70];

//condición clásica

/* if(persona[1] >= 18){
    console.log('Es mayor de edad');
}else{
    console.log('Es menor de edad');
} */

//Operador Ternario
let validacion_edad = (persona[1] >= 18) ? 'Es mayor de edad' : 'Es menor de edad';
//console.log(validacion_edad);

let existencia_persona = persona ? 'La persona existe' : 'La persona no existe'; //condicion ternaria, condicion ? que hacer si se cumple: que hacer si no
//console.log(existencia_persona);

//Diferencia entre == y === y != y !==

let edad1 = 80;
let edad2 = '80';

if(edad1 === edad2){ //El doble igual solo compara los valores, el triple igual compara los valores y el tipo de dato
    console.log('Edades iguales');
}else{
    console.log('Edades distintas');
}

if(edad1 !== edad2){ //El != compara si los valores son diferentes y el !== compara si los valores y el tipo de dato son diferentes
    console.log('Edades distintas');
}else{
    console.log('Edades iguales');
}