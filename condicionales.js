// Estructuras condicionales

// Estructura condicional if
// Sintaxis
// if (<expresión-condicional>) {
//    // Código a ejecutar si se cumple la expresión
// }

let nombre = 'Lucía';
let edad = 21;
let mayorEdad;

if (edad >= 18) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

// if (edad >= 18)
//     console.log(nombre + ' es mayor de edad'); // Alivio de llaves poco utilizado

// Estructura condicional if else
// if (<expresión-condicional>) {
//    // Código a ejecutar si se cumple la expresión
// } else {
//    // Código a ejecutar si no se cumple la expresión
// }

let a = 10;
let b = 20;

if (a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor o igual que b');
}

// Estructura if else if
// if (<expresión-condicional-1>) {
//    // Código a ejecutar si se cumple la 1º expresión
// } else if (<expresion-condicional-n) {
//    // Código a ejecutar si no se cumple la n expresión
// } else {
//    // Código a ejecutar por defecto si no se cumple ninguna de las anteriores    
//}

a = b;

if (a > b) {
    console.log('a es mayor que b');
} else if (a === b) {
    console.log('a es igual a b')
} else {
    console.log('a es menor que b');
}
