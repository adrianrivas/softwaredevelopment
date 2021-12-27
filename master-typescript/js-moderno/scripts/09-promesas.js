let productos = [
    {
        nombre: 'Ordenador',
        marca: 'ASUS',
        precio: 1200
    },
    {
        nombre: 'Impresora',
        marca: 'EPSON',
        precio: 550
    }
];

function conseguirProductos (){

    return new Promise((resolve, reject) => { //Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
        setTimeout(() => {
            resolve(productos);
        }, 10000)
    });
}

conseguirProductos().then((items) => { //Con el método then recojo los datos devueltos de la promesa en la variable resolve
    console.log(items);
});
