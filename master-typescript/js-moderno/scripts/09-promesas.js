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
    },
    {
        nombre:'Iphone',
        marca: 'Apple',
        precio: 2550
    },
    {
        nombre:'Samsung',
        marca: 'A21',
        precio: 3550
    }
];

function conseguirProductos (){

    return new Promise((resolve, reject) => { //Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
        console.log("Cargando productos...")
        setTimeout(() => {
            resolve(productos);
            //reject(Error("Ha ocurrido un error"))
        }, 3000)
    });
}

function productoComprado(nombreProducto, comprador){
    return new Promise((resolve, reject) => {
        console.log("Generando compra del producto: ", nombreProducto)
        setTimeout(() => {
            resolve({
                producto: nombreProducto,
                cliente: comprador
            });
        }, 2000)
    });
}

function procesarVenta(venta){
    if(productos.length >= 1){
        console.log("Producto comprado: " + venta.producto + " por el cliente: " + venta.cliente); //Muestro el resultado obtenido
        productos = productos.filter(producto => producto.nombre != venta.producto); //Elimino de mi array productos el producto que fue comprado
    }else{
        console.log("No se puede procesar la compra, no hay productos disponibles!!!")
    }
}

conseguirProductos()
    .then((items) => { //Con el método then recojo los datos devueltos de la primera promesa en la variable resolve
        if(items >= 1){
            console.log("Productos Disponibles:", items); //Muestro los productos obtenidos en el array items por el resolve
        }
        return productoComprado("Ordenador", "Adrian Landazuri"); //Lanzo la segunda promesa
    })
    .then(venta => {    //Recibo el resultado de la segunda promesa en el array venta
        procesarVenta(venta);
        return productoComprado("Impresora", "Fernando Bedoya"); //Lanzo la tercera promesa
    })
    .then(venta => {  //Recibo el resultado de la tercera promesa en el array venta
        procesarVenta(venta);
        return productoComprado("Iphone", "Carlos Rivas"); //Lanzo la cuarta promesa
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("Samsung", "Yisel Romaña"); //Lanzo la cuarta promesa
    })
    .then(venta => {
        procesarVenta(venta);
        //return productoComprado("Samsung", "Yisel Romaña"); //Lanzo la cuarta promesa
    })
    .catch(error => console.log(error.message)) //Agarra el error enviado por la variable reject de la promesa
    .finally(() => {
        console.log(`
                ***************************************
                            COMPRA FINALIZADA
                ***************************************
        `);
    });
;

// Promise.all([conseguirProductos(), productoComprado("Ordenador", "Adrian Landazuri"), productoComprado("Impresora", "Fernando Bedoya")]) //Ejecuta todas las promesas una tras otra
//     .then(venta => {
//         console.log(venta);
//     });
// ;
