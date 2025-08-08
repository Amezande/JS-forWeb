//Modificacion de objetos

"Use strict"; //ejecuta buenas practicas de js
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Un objeto se puede modificar, aunque una const no se pueda
//con freeze queda bloqueado
Object.freeze(producto); //previene agregar, borrar y eliminar nuevas propiedades
Object.seal(producto); //previene agregar, borrar y eliminar , si modifica

console.log(Object.isFrozen(producto)); //verifica si el objeto esta bloqueado
console.log(Object.isSealed(producto)); //verifica si el objeto esta bloqueado
producto.imagen = 'imagen.jpg' ;

// Union de clases de objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto); 
