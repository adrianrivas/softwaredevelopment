
//SPREAD
let peliculas = ["Batman", "Spiderman", "Superman", "Avengers"];

peliculas.forEach(pelicula => {
    console.log(pelicula);
})

console.log(...peliculas) //El Spread ... expande los elementos del array para luego utilizarlos como parametros de una funcion o como elementos de un nuevo array

function mostrarHeroes(heroe1, heroe2, heroe3, heroe4){
    console.log(`
        **************** MIS HEROES FAVORITOS *************
        - ${heroe1}
        - ${heroe2}
        - ${heroe3}
        - ${heroe4}
        ***************************************************
        Fin.
    `);
}

mostrarHeroes(...peliculas);

let superheroes = ['Flash', 'Catwoman', ...peliculas];
console.log(superheroes);

//REST
function peliculas1(pelicula1, pelicula2, ...restoDePeliculas){ //El Rest representa un número indefinido de parametros que pueden integrarse en una función
    console.log(pelicula1);
    console.log(pelicula2);
    for(let pelicula of restoDePeliculas){
        console.log(pelicula);
    }
}

peliculas1('Harry Potter', 'Fast&Furious', 'Batman vs Superman', 'Gran Torino');
