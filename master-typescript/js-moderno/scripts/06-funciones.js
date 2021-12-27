//Funciones con parámetros por defecto
function saludo(persona = 'Adrian Landazuri', year = 2022){
    return "Hola te mando un saludo " + persona + ", Feliz año: " + year;
}

console.log(saludo('Zacarias Romaña', 2023));

//Funciones de Flecha Arrow Functions
let saludo_dos = function(nombre){
    return "Hola, te mando un saludo " + nombre;
}

console.log(saludo_dos('Fernanda Machado'));

let saludo_tres = nombre => "Hola, te mando un saludo " + nombre;

console.log(saludo_tres('Juan Gonzáles'));

let saludo_cuatro = (nombre, pais) => "Hola, te mando un saludo " + nombre + ", Tu eres de: " + pais;

console.log(saludo_cuatro('Juan Gonzáles', 'Colombia'));

// function multiplicacion(n1, n2){
//     console.log(n1*n2);
// }

let multiplicacion = (n1, n2) => console.log(n1*n2);

multiplicacion(2, 5);

// JSON

let tienda = {
    nombre: 'GAME',
    videojuegos: ['GTA', 'PES', 'FIFA'],
    mostrar: function(){
        console.log(this.nombre);
        this.videojuegos.forEach(videojuego => { //El operador this no funciona con funciones de flecha
            if (videojuego == 'GTA'){
                console.log(this.nombre + " " + videojuego + ': Juego de Misiones');
            }else if (videojuego == 'PES'){
                console.log(this.nombre + " " + videojuego + ': Juego de Fútbol');
            }else{
                console.log(this.nombre + " " + videojuego + ': Otro juego de Fútbol');
            }
        });
    }
}

tienda.mostrar();