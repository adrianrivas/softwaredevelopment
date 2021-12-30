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
            reject(Error("Ha ocurrido un error"))
        }, 3000)
    });
}

function conseguirNombre(){

    return new Promise((resolve, reject) => { //Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
        //console.log("Cargando productos...")
        setTimeout(() => {
            //resolve("Adrian Landazuri");
            reject(Error("Ha ocurrido un error"))
        }, 3000)
    });
}

// conseguirProductos().then(items => {
//     console.log("Productos Disponibles: ", items);
// });

async function getMisproductos(){  //las funciones síncronas solo funcionan con promesas
    try{                            //Pruebo el código
        let mis_productos = await conseguirProductos(); //Await es similar al then, pero solo funciona dentro de funciones asíncronas
        console.log(mis_productos);  //imprimo los productos guardados en el array misProductos
    }catch(error){                     //Capturo el error si el código no funciona
        console.log(error.message);
    }
    console.log("Promesa finalizada"); //función finally
}

//getMisproductos(); //invoco la función creada;

async function getAll(){  //las funciones síncronas solo funcionan con promesas
    try{                            //Pruebo un trozo de código
        console.log("Cargando información...");

        let getInfo = await Promise.all([conseguirProductos(), conseguirNombre()]); //Ejecuto todas las promesas de forma síncrona, reduzco los tiempos de ejecución de los awaits
        //let misProductos = await conseguirProductos(); //Await es similar al then, pero solo funciona dentro de funciones asíncronas
        //let miNombre = await conseguirNombre(); //Await es similar al then, pero solo funciona dentro de funciones asíncronas
        console.log(getInfo[0], getInfo[1]);  //imprimo los productos guardados en el array misProductos
    }catch(error){                     //Capturo el error si el código no funciona
        //console.log(error.message);
        throw error;
    }
    console.log("Promesa finalizada"); //función finally
}

getAll();