/*Desafíos:

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/
alert("Que dia de la semana es? ");
let diaSemana= prompt(" Di el dia de la semana: ");
if (diaSemana== "Sábado") {
    alert("¡Buen fin de semana!");
 } else {
  
 if (diaSemana=="Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!")}}

// Mejor solución es con un solo condicional usando el Or en JS es ||
  let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}