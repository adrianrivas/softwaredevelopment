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

nombres.forEach(nombre => {
    //console.log(nombre);
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
let frutas = {
    nombre: 'Manzana',
    color:'verde',
    estacion: 'Verano'
}

for(let fruta in frutas){
   //console.log(frutas[fruta]);
}

let vehiculos = {
    marcas: ['Ferrari', 'Lamborghini'],
    colores:['verde', 'amarillo'],
    modelos: ['2017', '2018']
}

for(let vehiculo in vehiculos){
    //console.log(vehiculo);
    let vehiculo_array = vehiculos[vehiculo];
    vehiculo_array.forEach((v, index, array) => {
        //console.log(array[0]);
    });
}

const mi_iterable = nombres[Symbol.iterator]();
//console.log(typeof(mi_iterable));
for (let i = 0; i <= nombres.length; i++){
    console.log(mi_iterable.next().value);
}

// for(let propiedad of fruta){
//     //console.log(propiedad);
// }
//reccorrer string
/* sitioweb = 'sanpachobendito.org';
for (let letra of sitioweb){
    console.log(letra);
} */

frutas[Symbol.iterator] = function(){
    let clave = 0;
    let valores = Object.values(this);
    //console.log(clave, valores);
    return {
        next(){
            if(clave >= valores.length){
                return {
                    done: true,
                    value: undefined
                };
            }

            return {
                done: false,
                value: valores[clave++]
            };
        }
    };
}

for (let propiedad of frutas){
    console.log(propiedad);
}