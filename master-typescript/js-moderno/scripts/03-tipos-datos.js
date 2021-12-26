
//string

let nombre = 'Victor Robles';

//Number
let numero = 14;
let decimal = 3.2;

//booleans
let mayor_edad = true;
let menor_edad = Boolean(0); //convertir una variable numérica en booleana

//Arrays
var paises = ['Colombia', 'España', 'Argentina'];

///Null
let vacio = null;

//Undefined
let no_definido = undefined;

/*
console.log(typeof nombre, 
            typeof numero, 
            typeof decimal,
            typeof mayor_edad,
            typeof menor_edad,
            typeof paises,
            typeof vacio,
            typeof no_definido); //el typeof me permite examinar el tipo de dato que es cada variables
*/

// JSON = Javascript Object Notation = Objetos Literales
let pelicula = {
    titulo: 'Harry Potter',
    genero: 'Suspense',
    anio:2013,
    director: 'James Cameron',
    mostrar: function(){
        return  `
            *********************************
                LA PELICULA DE LA SEMANA
            *********************************
            Título de la pelicula: ${this.titulo}
            Género: ${this.genero}
            Año: ${this.anio}
            Director: ${this.director}
        `;
    }
}

pelicula.pais = 'Estados Unidos'; //Formas de agregar propiedades a un objeto JSON
pelicula['protagonista'] = 'Daniel Radcliff'; // //Formas de agregar propiedades a un objeto JSON

delete pelicula.protagonista; //Formas de eliminar propiedades a un objeto JSON
//pelicula.genero = null; //Dar valor null a una propieda de un objeto JSON

//console.log('titulo' in pelicula); //Comprobar si una propiedad está dentro de un objeto JSON
//console.log(pelicula.mostrar());
//console.log(typeof pelicula.mostrar);

//Recorrer un objeto JSON

for(let propiedad in pelicula){
    let dato_actual = pelicula[propiedad];
    if (dato_actual != null && typeof(dato_actual) != 'function'){
        //console.log(dato_actual);
    }
}

//Symbol - Identificador Único - Ocultar propiedades

//let animal = Symbol('Tigre');
//let animal2 = Symbol('Tigre');

let user = {
    id:1,
    nombre:'Adrian Landazuri',
    profesion: 'Ingeniero de Software'
};

let id = Symbol('id')
user[id] =  7;

console.log(user.id, user[id]);

