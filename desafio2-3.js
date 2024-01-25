/*
1.	Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2.	Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3.	Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4.	Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5.	Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6.	Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

/*1.	Crea una función que calcule el índice de masa corporal (IMC)
 de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

 function calcularImc(altura,peso){
    let IMC= peso/(altura*altura);
    return IMC;
 }

 let resultadoImc=calcularImc(1.59,62);
 console.log(resultadoImc);

 /*2.	Crea una función que calcule el valor del factorial
  de un número pasado como parámetro.*/
  function factorialNumero(numero) {
   let factorial = 1;
   for (let i = numero; i > 0; i--) {
       factorial *= i;
   }
   document.write(factorial);
   return factorial;
}

let resultadoFactorial = factorialNumero(4);
console.log(resultadoFactorial);


/*3.	Crea una función que convierta un valor en dólares, 
pasado como parámetro, y devuelva el valor equivalente 
en reales(moneda brasileña,si deseas puedes hacerlo con 
el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.*/
function valorDivisa(reales) {
   let tipoCambio = 1.5; // Supongamos un tipo de cambio de 1 real = 1.5 dólares
   let dolares = reales * tipoCambio;

   return dolares;
}

let resultadoDivisa = valorDivisa(4.8);
console.log(resultadoDivisa);

/*4.	Crea una función que muestre en pantalla el área 
y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán 
como parámetros.*/
function calculoArea(altura,ancho){
   let area= altura *ancho;
   return area;
}
function calculoPerimetro(altura,ancho){
   let perimetro = 2*ancho + 2*altura;
   return perimetro;
}

let resultado1=calculoArea(3,5);
let resultado2=calculoPerimetro(3,5);
console.log(`reusultado de area ${resultado1} 
y resultado del perimetro es ${resultado2}`);


/*5.	Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su 
radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function calcularAreaYPerimetroCirculo(radio) {
   // Considerando Pi = 3.14
   const pi = 3.14;

   // Calcular el área del círculo: A = π * r^2
   const area = pi * Math.pow(radio, 2);

   // Calcular el perímetro del círculo: P = 2 * π * r
   const perimetro = 2 * pi * radio;

   // Mostrar los resultados en la consola o en la página
   console.log(`Área del círculo: ${area}`);
   console.log(`Perímetro del círculo: ${perimetro}`);

   // También puedes mostrar los resultados en la página HTML si estás trabajando en un entorno web
   // document.getElementById('resultado').innerHTML = `Área del círculo: ${area}<br>Perímetro del círculo: ${perimetro}`;
}

// Ejemplo de uso
calcularAreaYPerimetroCirculo(5);

/*6.	Crea una función que muestre en pantalla la
 tabla de multiplicar de un número dado como parámetro.
*/
// supondre que es una tabla de multiplicar del 1 al 12
function tablaMultiplicar(numero){
   let i=1;
   while (i<=12){
      let valorMultiplicado= i*numero;
      console.log(`Valor de ${i} multiplicado por ${numero} es ${valorMultiplicado}`);
      i++;
   }
}

let valoresTablaMultiplicar=tablaMultiplicar(4);
// esto tienen error $ console.log(`valor de ${i} multiplicado por ${numero} es tablaMultiplicar() `);
