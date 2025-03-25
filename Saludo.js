console.log("hola mundo");


function sumar(sum1, sum2) {
    let res = sum1 + sum2;
    return res;
}
console.log("la suma de 4 + 10= "+ sumar(4,10) );

function saludo(){
    let tiempo = new Date();
    let hora, cad="Son las ";
    with (tiempo){
        hora = getHours();
        cad += hora + ":" + getMinutes() + ":" + getSeconds();
    }

    if (hora < 12 && hora > 6)
        cad = "Buenos días, "+ cad;
    else if (hora < 18)
        cad = "Buenas tardes, "+ cad;
    else 
        cad ="Buenas noches, "+ cad;
    return cad 
}
console.log(saludo());
