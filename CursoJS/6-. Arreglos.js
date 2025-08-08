//arreglos

//crear 2
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const numeros = [10,20,30,40,50];
console.table(numeros);

//acceder a los valores de un arreglo
console.log(numeros[4])

//elementos de un arreglo
console.log(numeros.length);

//iteracion de los elementos
numeros.forEach( function(numero){
    console.log(numero);
})

//metodos para los arreglos
//agregar al final
numeros.push(60,70);
console.table(numeros);

//agregar al inicio
numeros.unshift(0);
console.table(numeros);

//eliminar el ultimo elemento del arreglo
//meses.pop();
//eliminar el primer elemento del arreglo
//meses.shift();
//eliminar selectivamene
meses.splice(2,1); //desde la posicion 2 elimina hacia adelante 1 mas

//rest operator mejor sintaxis como push

const nuevoArreglo = [...meses, 'junio'];
console.log(nuevoArreglo);

//rest operator mejor sintaxis como unshift
const nuevoArreglo1 = ['diciembre', ...meses];
console.log(nuevoArreglo);
