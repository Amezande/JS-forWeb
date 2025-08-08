//Estructuras de control

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//arreglo de objetos
const carrito = [
    { nombre: 'Producto0', precio: 50 },
    { nombre: 'Producto1', precio: 100 },
    { nombre: 'Producto2', precio: 56 },
    { nombre: 'Producto3', precio: 200 },
];

//foreach
meses.forEach(function(mes) {
    //Queremos ver si marzo se encuentra en este arreglo
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});

//includes, no funciona con objetos //let para poer reasignarlo
let resultado = meses.includes('Enero');
console.log(resultado);
//usar some para objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Producto8'
})
console.log(resultado)


//Reduce , suma de todo 
resultado = carrito.reduce(function(total,producto){
    return total + producto.precio
},0); //colocar el valor inicial en cero 

console.log(resultado)

// filter trae los menores a 200 
resultado = carrito.filter(function(producto) {
    return producto.precio < 200
});

console.log(resultado);
