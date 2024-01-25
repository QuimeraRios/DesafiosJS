/* Desafíos:
1 Crear una función que muestre "¡Hola, mundo!" en la consola.
2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6 Crear una función que reciba un número como parámetro y 
devuelva el resultado de multiplicar ese número por sí mismo.*/

// 1. hola mundo funcion

function textoConsola(){
    console.log('¡Hola, mundo!');
}

textoConsola;

//2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function mostrarNombre(nombre){
    console.log(`nombre: , ${nombre}!`);
}

mostrarNombre('Victoria');

// 3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleDelNumero(numero){
    return numero*2;
}

let devuelveDoble= dobleDelNumero(4);
console.log(devuelveDoble);

//4 Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedioNumeros(numero1,numero2,numero3){
    return (numero1+numero2+numero3)/3;
}

let devuelvePromedio=promedioNumeros(8,9,3);
console.log(devuelvePromedio);

//5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayorNumero(a,b){
    if (a>b)
    return a > b ? a : b;
}

let devuelveMayor = mayorNumero(7,5);
console.log(devuelveMayor);


//6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo

function multiplicarSimismo(numerobase){
    return numerobase*numerobase;
}

let multiplicarNumero=multiplicarSimismo(9);
console.log(multiplicarNumero);