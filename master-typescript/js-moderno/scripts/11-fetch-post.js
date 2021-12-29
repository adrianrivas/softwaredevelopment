let nuevo_post = JSON.stringify({ //Convierto el objeto JSON a una cadena que contiene un JSON
    title: "Programación JavaScript",
    body: "Es muy chévere",
    userId: 32
});

fetch('https://jsonplaceholder.typicode.com/posts',{ //Realizo mi petición AJAX
    method:"POST",  //Envío el método HTTP mediante el cual se ejecutara mi petición
    body: nuevo_post, //Envío el contenido de la petición
    headers: {
        "Content-Type" : "application/json; charset=UTF-8" //establezco las cabeceras de la petición
    }
})
.then(response => response.json())  //Recibo la respuesta de mi petición
.then(data => {                     //Muestro mi registro guardado
    console.log("El post ha sido guardado con éxito", data)
});