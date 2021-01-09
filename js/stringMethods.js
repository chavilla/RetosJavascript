const phrase = 'Vamos a programar en javascript';

console.log(phrase.anchor('jesus'));
// devuelve el caracter en la posicion indicada
console.log(phrase.charAt(4));

// concatena dos string
console.log(phrase.concat(' mañana'));

// devuelve true si el carcater dado está en la posicion especifica (No posicion de array)
console.log(phrase.endsWith('a',2));

// devuelve true si la cadena contiene las letras en regExp
console.log(phrase.includes('pr'));

// devuelve la posicion en la que está el caracter indicado
console.log(phrase.search('j'));