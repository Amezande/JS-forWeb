//funciones

//Declaracion de funcion 

function sumar() {
    console.log(10+10);
}
sumar();
//expresion de la funcion

const sumar2 = function() {
    console.log(20+20);
}
sumar2();

//IIFE Se mandan llamar ellas mismas
//proteje las variables, para que no se puedan llamar desde otro archivo
(function() {
    console.log('esto es una funcion');
})();
