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

// Estructura switch
// switch (<valor>) {
//      case <opcion>:
//          // Código a ejecutar cuando el valor sea igual a esa opción
//      break;    
//      case <opcion>:
//          // Código a ejecutar cuando el valor sea igual a esa opción
//      break; 
//      ...
//      default:
//          // Código a ejecutar si el valor no coincide con ninguna opción   
// }

let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;
    case 3:
        console.log('Hoy es miércoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;
    case 5:
        console.log('Hoy es viernes');
        break;
    case 6:
        console.log('Hoy es sábado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
    default:
        console.log('Día de la semana no válido');
        break;
}

let mes = 8;

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log('Estamos en el primer trimestre');
    break;
    case 4:
    case 5:
    case 6:
        console.log('Estamos en el segundo trimestre');
    break;
    case 7:
    case 8:
    case 9:
        console.log('Estamos en el tercer trimestre');
    break;
    case 10:
    case 11:
    case 12:
        console.log('Estamos en el cuarto trimestre');
    break;
    default:
        console.log('Mes no válido');
}
