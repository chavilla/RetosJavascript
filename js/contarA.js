/*
    Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
*/

const input = prompt('Dame una frase').split('');
let a=0;

for (let index = 0; index < input.length; index++) {
    if (input[index] ==='a') a++;
}

console.log('Las A son', a);