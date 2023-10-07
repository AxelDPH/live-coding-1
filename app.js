function palabraMasLarga(entradaString, palabrasEnArray) {
    // Filtrar las palabras del array que sean más largas que el inputString
    const resultadoArray = palabrasEnArray.filter(word => word.length > entradaString.length);
    return resultadoArray;
}

// Ejemplo de uso:
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const entradaString = 'pizzas';
const outputArray = palabraMasLarga(entradaString, myArray);
console.log(outputArray); // Debería imprimir ['insecto', 'bootcamp', 'escritorio']

/*
Notas para axel.

Explicó bien el problema a resolver.

Creo bien los archivos que necesita.

Olvidó declarar variables.

Realizó primer función.
Se trabó y fue honesto en decir que no podía resolverlo.

Falta estudiar manipulación del DOM para tener mas fresco el tema, ya que son varios elementos y métodos los que maneja.
*/ 



//Este segundo ejercicio si no le entendi y lo saque de internet para poderlo enetenderlo y ahora creo que me ha quedado mas claro todo

function printArray(array) {
    const ul = document.getElementById("miLista"); // Obtén el elemento ul por su id

    array.forEach(item => {
        const li = document.createElement("li"); // Crea un elemento de lista (li)
        li.textContent = item; // Asigna el texto del elemento li al valor del array
        ul.appendChild(li); // Agrega el elemento li a la lista ul
    });
}

// Ejemplo de uso:
const miArray = ['insecto', 'bootcamp', 'escritorio'];
printArray(miArray);
