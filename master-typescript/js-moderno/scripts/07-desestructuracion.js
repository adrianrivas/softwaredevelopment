let frutas = ['manzana', 'pera', 'naranja', 'sandia'];

//Forma clásica
//let manzana = frutas[0];



//Desestructurar array

let[manzana, pera, naranja, sandia] = frutas;

console.log(pera);
console.log(naranja);

//Desestructurar Objetos
let persona = {
    nombre: 'Adrian Landazuri',
    edad: 24,
    altura: 190,
    pais: 'Colombia'
};

let {nombre, edad, altura, pais} = persona;
console.log(altura);

//Desestructurar Strings
let info_completa = 'Adrian Landazuri 10774750xx 06/05/1997 Bogotá';

let [nombre1, apellido1, cedula, fecha_nacimiento, ciudad_nacimiento] = info_completa.split(" "); //La función split divide una cadena por un caracter seperador

//Crear varias variables

let lenguaje = "PHP"
    framework = "Laravel", 
    editor = "Netbeans";

//Utilidad parámetros funciones
function mostrarUsuario({nombre, apellido = 'Unknown', ciudad = "Barcelona"}){
    console.log(nombre, apellido, ciudad);
}

mostrarUsuario({nombre: 'Adrian', apellido: 'Landazuri', ciudad: 'Quibdó'});