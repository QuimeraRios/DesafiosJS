/*Resolución de los desafíos del curso de lógica de programación
Practicar la lógica de programación, que incluye conceptos como variables, condicionales (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear iteraciones controladas e interactuar eficazmente con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde el principio es fundamental para construir una base sólida y exitosa en el campo de la programación.

Desafíos - Respuestas
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.*/

let contador1 = 1;
while (contador1 <= 10) {
console.log(contador1);
contador1++;
}

/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/

let contador2 = 10;
while (contador2 >= 0) {
console.log(contador2);
contador2--;
}

/*Crea un programa de cuenta regresiva. Pide un número 
y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}

/*Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando 
un bucle 'while' en la consola del navegador.*/

let numeroMaximo1 = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo1) {
console.log(contador);
contador++
}