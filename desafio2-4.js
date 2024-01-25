// 1 Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];

//2 Crea una lista de lenguajes de programación llamada
// "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
//let lenguagesDeProgramacion=[];
let lenguagesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin' ,'Python'];

//3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
/* 
lenguagesDeProgramacion.push("Java");
lenguagesDeProgramacion.push("Ruby");
lenguagesDeProgramacion.push("GoLang");*/

// version mejorada es:
lenguagesDeProgramacion.push('Java','Ruby','GoLang');


//4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos(){
    i=0;
    console.log(`elemento de la lista ${lenguagesDeProgramacion[i]}`);
    i++;
}
/*5 Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.*/
let totalLista = lenguajesDeProgramacion.length;
let i=totalLista;
while (i!=0){
    console.log(`elemento de ${lenguajesDeProgramacion[i]}`);
    i--;

}

//6 Crea una función que calcule el promedio de los elementos en una lista de números.

function calcularPromedio(listaElementos){
    let totalSumaElementos=0;
    for (let i=0; i< listaElementos.length;i++){
        totalSumaElementos+= listaElementos[i];

    }
    return totalSumaElementos/listaElementos.length;
}

//7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorYMenor(listaElementos) {
    if (listaElementos.length === 0) {
        console.log("La lista está vacía.");
        return;
    }

    let elementoMayor = listaElementos[0];
    let elementoMenor = listaElementos[0];

    for (let i = 1; i < listaElementos.length; i++) {
        if (listaElementos[i] > elementoMayor) {
            elementoMayor = listaElementos[i];
        }

        if (listaElementos[i] < elementoMenor) {
            elementoMenor = listaElementos[i];
        }
    }

    console.log("Número más grande:", elementoMayor);
    console.log("Número más pequeño:", elementoMenor);
}

// Ejemplo de uso
//let listaNumeros = [5, 2, 9, 1, 7];
//encontrarMayorYMenor(listaNumeros);


//8 Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(listaElementos){
    let totalSumaElementos=0;
    for (let i=0; i< listaElementos.length;i++){
        totalSumaElementos+= listaElementos[i];

    }
    return totalSumaElementos;
}
/*9 Crea una función que devuelva la posición en la lista donde se encuentra 
un elemento pasado como parámetro, o -1 si no existe en la lista.*/
function encontrarPosicionEnLista(elemento, lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Devuelve la posición si el elemento se encuentra en la lista
        }
    }
    return -1; // Devuelve -1 si el elemento no se encuentra en la lista
}


/*10 Crea una función que reciba dos listas de números del mismo tamaño
 y devuelva una nueva lista con la suma de los elementos uno a uno.*/

 function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.error("Las listas deben tener la misma longitud.");
        return null;
    }

    let resultado = [];

    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }

    return resultado;
}

// Ejemplo de uso
let listaA = [1, 2, 3];
let listaB = [4, 5, 6];

let resultadoSuma = sumarListas(listaA, listaB);

if (resultadoSuma !== null) {
    console.log("Resultado de la suma:", resultadoSuma);
} else {
    console.log("Error en las listas, no tienen la misma longitud.");
}

/*11 Crea una función que reciba una lista de números y 
devuelva una nueva lista con el cuadrado de cada número.*/
function calcularCuadrados(listaNumeros) {
    let listaCuadrados = [];

    for (let i = 0; i < listaNumeros.length; i++) {
        listaCuadrados.push(listaNumeros[i] ** 2);
    }

    return listaCuadrados;
}

// Ejemplo de uso
let listaNumeros = [2, 4, 6, 8];
let listaCuadrados = calcularCuadrados(listaNumeros);

console.log("Lista original:", listaNumeros);
console.log("Lista de cuadrados:", listaCuadrados);
