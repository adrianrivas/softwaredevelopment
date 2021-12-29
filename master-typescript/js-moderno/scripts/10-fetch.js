let contenedor = document.querySelector("#contenedor"); //Selecciono el div con id contenedor del DOM
contenedor.innerHTML = "Cargando...";

//Petición Ajax Moderna
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(datos => {
      //console.log(datos);
      contenedor.innerHTML = "";
      mostrar(contenedor, datos);
    })
    .catch(error => {
      console.log(error.message)
    })
    .finally (() => {
        console.log("Datos seleccionados con éxito")
    })
;

//Función Mostrar
function mostrar(contenedor, elementos){
    elementos.forEach(elemento => {
        let datosMostrados = `
        <article>
            <h2>${elemento.title}</h2>
            <p>${elemento.body}</p>
        </article>
        <hr/>
        `;
        contenedor.innerHTML += datosMostrados;
    });

    return elementos
}