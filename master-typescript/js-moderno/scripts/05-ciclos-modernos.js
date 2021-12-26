let nombres = [
    'Adrian',
    'Fernando',
    'Gabriel',
    'Jorge',
    'Pedro'
];

/* for(var i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
} */

//For of - Accede al contenido del Array

for(let nombre of nombres){
    //console.log(nombre);
}

//For in - Accede al indice del Array

for(let indice in nombres){
    //console.log(indice, nombres[indice]);
}

nombres.forEach((nombre, indice) => {
    //console.log(indice, nombre);
});


//Iterables
// const mi_iterable = nombres[Symbol.iterator]();
// //console.log(mi_iterable);
// console.log(mi_iterable.next());
// console.log(mi_iterable.next());
// console.log(mi_iterable.next());
// console.log(mi_iterable.next());
// console.log(mi_iterable.next());
// console.log(mi_iterable.next());

//JSON
let fruta = {
    nombre: 'Manzana',
    color:'verde',
    estacion: 'Verano'
}

const mi_iterable = fruta[Symbol.iterator]();

for(let propiedad of fruta){
    console.log(propiedad);
}
//reccorrer string
/* sitioweb = 'sanpachobendito.org';
for (let letra of sitioweb){
    console.log(letra);
} */