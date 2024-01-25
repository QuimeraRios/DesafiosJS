/*Desafíos:

Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.*/
alert('Verificación de numeros');
let tipoNumero=prompt('Seleccione un numero con su signo (+ o -)');
if (tipoNumero<0){
    alert('el numero seleccionado: '+ tipoNumero +' es Negativo');
} else {
    alert('el numero seleccionado: '+ tipoNumero +'es Positivo');
}
