/*Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

/* 1 contador hasta 10
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.*/
let cuenta=1;
while (cuenta<10){
    cuenta++;
    alert('valor contador es: '+cuenta)
}

/* 2 Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/
let cuentaregresiva=10;
while (cuentaregresiva>0){
    cuentaregresiva--;
    alert('valor del numero es: '+cuentaregresiva)
}

/*3 Crea un programa de cuenta regresiva. 
Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.*/
let control =0;
let numerohasta=prompt('valor deseado para contar? : ');
while (control<numerohasta){
    control++;
    alert('valor del control esta en: '+ control)
}

/*4 Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.*/

contadorn=0;
let numeroProgresivo=parseInt(promt('numero preferido es: '));
while (contadorn<numeroProgresivo){
    contadorn++;
    alert('valor del contador es: '+ contadorn)
}