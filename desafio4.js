/*Desafíos finales:

1 Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.*/

console.log('Este es un mensaje de bienvenida');

/*2 Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador*/
let nombre='Victoria';
console.log(' !Hola, ' +nombre);

/*3 Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/

let miNombre = "Victoria";
alert(`!Hola, ${miNombre}!`);

/*4 Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.*/

let lenguajeMas=prompt('¿Cual es el lenguaje que mas te gusta? ');
console.log(`El lenguaje que mas te gusta es: ${lenguajeMas}`);

/*5 Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. 
Luego, realiza la suma de estos dos valores 
y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." 
en la consola.*/

let valor1=10;
let valor2=20;
let resultado=valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);


/*6 Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena 
el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] 
es igual a [resultado]." en la consola.*/

let valor3=15;
let valor4=5;
let resultado2=valor3-valor4;
console.log(`La diferencia entre ${valor3} y ${valor4} es igual a ${resultado2}`);


/*7 Pide al usuario que ingrese su edad con prompt. 
Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad 
y muestra un mensaje apropiado en la consola.*/
console.log('Desafio 4 ejercicio 7');
let edad=parseInt(prompt('Cual es su edad?'));
if (edad >=18){
    console.log('es mayor de edad');
} else {
    console.log('es menor de edad');
}


/*8 Crea una variable "numero" y solicita un valor con prompt. 
Luego, verifica si es positivo, negativo o cero utilizando un if-else y
 muestra el mensaje correspondiente.*/
 console.log('Desafio 4 ejercicio 8');
 let numero1=parseInt(prompt('Diga un numero con su signo (+/-)?'));
if (numero1 >0){
    console.log(numero1 +' es un numero positivo¡');
} else if (numero1<0){
    console.log('es un numero negativo');
    } else {
    console.log('es igual a cero');
}


/* 9 Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.*/
console.log('Desafio 4 ejercicio 9');
let cuenta =1;
while (cuenta<=10);
    console.log('numero es:'+cuenta);
    alert('cuenta' + cuenta);
    cuenta++;

/*10 Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 
y muestra "Aprobado" o "Reprobado" en la consola.*/
console.log('Desafio 4 ejercicio 10');

let nota=8;
if (nota<=5){
    console.log('esta Reprobado');
} else {
    console.log('Aprobado');
}
/*11 Utiliza Math.random para generar cualquier número aleatorio
 y muestra ese número en la consola.*/

 let aleatorio=math.floor(Math.ramdom())*10;
 console.log('numero aleatorio: '+ aleatorio);


/*12 Utiliza Math.random para generar un número entero entre 1 y 10 
y muestra ese número en la consola.*/
let numeroAleatorio1a10 = parseInt(Math.random() * 10) + 1;
alert('muestre el numero: '+ numeroAleatorio1a10);

/*13 Utiliza Math.random para generar un número entero entre 1 y 1000 
y muestra ese número en la consola.*/
let numeroAleatorio1a1000 = parseInt(Math.random() * 1000) + 1;
alert('muestre el numero: '+ numeroAleatorio1a1000);