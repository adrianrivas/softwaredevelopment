
function imprimirArray(datos){
    datos.forEach(elemento => {
        console.log(elemento)
    });

    return datos;
}

function saludo(nombre){
    let saludar = "Hola: " + nombre

    return saludar;
}

export default {
    imprimirArray,
    saludo
};