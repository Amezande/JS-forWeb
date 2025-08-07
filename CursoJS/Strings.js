//strings

const producto = "Monitor de 50 pulgadas";
const producto2 =('Monitor de 60 pulgadas');    //Ya no soporta string

console.log(producto)
console.log(producto2)

console.log(typeof producto)
console.log(typeof producto2)

console.log(producto.length);   //caracteres de cadena de texto

console.log(producto.indexOf('pulgadas'));  //Posiscion de lo que buscamos
console.log(producto.indexOf('Monitor'));
console.log(producto.indexOf('Multiport')); //Si es menor a 0 no existe

console.log(producto.includes('Monitor')); // con expresiones booleanas true
console.log(producto.includes('Multiport'));  //con false
