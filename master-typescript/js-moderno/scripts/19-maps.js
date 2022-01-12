
//Data Structure Map: Los elementos a nivel de key deben ser únicos y se almacenan en formato de clave y valor
const antiguos_gadgets = {
    seis: "Avión",
    siete: "Bus",
    ocho:"Avioneta"
}
//Creo mi map
const gadgets = new Map(Object.entries(antiguos_gadgets));

//Agregar elemenmtos al map
gadgets.set(1, "PC");
gadgets.set(2, "Escritorio");
gadgets.set(3, "Portatil");
gadgets.set(4, "Movil");
gadgets.set(5, "Moto");

//Comprobar si existe un elemento en el map
console.log(gadgets.has("seis"));

//Eliminar un elemento del Map
gadgets.delete("seis");
console.log(gadgets.has("seis"));

//Obtener elementos del Map con get
console.log(gadgets.get("seis"));

