
//Data Structure Set: El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.

//Crear un set
let gadgets = new Set(["movil", "table", "laptop"]);

console.log(gadgets);


//Agregar elementos al set
gadgets.add(12);
gadgets.add(["Hello", "You're Welcome"]);

//eliminar datos del set
gadgets.delete(["Hello", "You're Welcome"]);
gadgets.delete(["Hello", "You're Welcome"]);
gadgets.delete(["Hello", "You're Welcome"]);
gadgets.delete("movil");

//Comprobar existencia de un elemento en el set
console.log(gadgets.has(12), gadgets.has("movil"));

//Sacar el tamaño del set
console.log(gadgets.size)

//Recorrer un set
gadgets.forEach(gadget => {
    console.log(gadget);
});

//Limpiar todo el set
gadgets.clear();
console.log(gadgets);