let nombre='Victor';
let apellidos = 'Robles';
let profesion = 'Desarrollador Web';
let nombrecompleto = nombre + ' ' + apellidos + ' ' + profesion;
console.log(nombrecompleto);

//Template Strings

let plantilla = `${nombre} ${apellidos}
${profesion}
`;

//console.log(plantilla);
function ficha(nombre, apellidos, profesion){
    let fichaTecnica = `
        <div class='ficha'>
            <h2>${nombre} ${apellidos}</h2>
            <h3>${profesion}</h3>
            <p>Forma parte del equipo de Desarrollo Web </p>    
        </div>
    `;
    return fichaTecnica;
}

var nombres = ['Adrian', 'Fernando', 'Roberto'];
var apellidosarray = ['Landazuri', 'Bedoya', 'Salazar'];
var profesiones = ['Desarrollador Web', 'Psicólogo', 'Profesor']
let cajaFicha = document.createElement('section');

for (var i = 0; i < nombres.length; i++ ){
       cajaFicha.innerHTML += ficha(nombres[i], apellidosarray[i], profesiones[i]);
}

//let cajaFicha = document.createElement('section'); //creo elemento html

//cajaFicha.innerHTML = fichaTecnica; //inserto el contenido html creado en la variable fichaTecnica en el elemento creado en la variable cajaFicha
//cajaFicha.innerHTML += fichaTecnica; //concateno el contenido de la variable con otro contenido
//cajaFicha.innerHTML += fichaTecnica;
//document.body.appendChild(cajaFicha); //agrego el elemento creado al body del DOM (Document Object Model) de la pagina html
document.querySelector('#contenedor').appendChild(cajaFicha); //agrego el elemento creado a un elemento html del DOM
/*document.addEventListener('DOMContentLoaded', function(){ //pregunto con el evento DOMContentLoaded si mi DOM ya cargo completamente y ejecuto el codigo dentro de la funcion
    document.body.appendChild(cajaFicha); //agrego el elemento creado al body del DOM (Document Object Model) de la pagina html
}, false);*/




