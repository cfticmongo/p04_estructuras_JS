// Estructuras iterativas o bucles (clásicas)

// Ciclo for

// for (<variable>;<expresion-condicional>;<expresión-actualización> ) {
//      // Código a ejecutar en cada iteración del ciclo   
// }

for (i = 0; i < 10; i++) {
    console.log('Hola');
    console.log('En cada iteración el valor de i sera ' + i);  
}

// Ciclo while
// while (<expresión-condicional>) {
//  Código a ejecutar mientras se cumpla esa condición    
// }

let inputPassword;
let userPassword = '1234';

while (inputPassword !== userPassword) {
    inputPassword = prompt('Escriba su contraseña');
}

// Ciclo do while
// do {
//  Código a ejecutar mientras se cumpla esa condición    
// } while (<expresión-condicional>)