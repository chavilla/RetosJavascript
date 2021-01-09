const america = ['Colombia', 'Perú', 'Uruguay'];

// Elimina el primer elemento de un array y retorna dicho elemento (Colombia) string
const delereFirst = america.shift();
console.log(delereFirst);
console.log(america);

// Añade un elemento al final del arreglo y retorna el nuevo tamaño del array (3) int
const addElement = america.push('Venezuela');
console.log(addElement);
console.log(america);

const europe = ['Alemania', 'Austria', 'Polonia', 'Italia', 'Francia'];

// une dos arrays
const countries = america.concat(europe);
console.log(countries); 

// Elimina el ultimo elemento de un array y retorna dicho elemento Francia
const deleteLast = countries.pop();
console.log(deleteLast);
console.log(countries);

// añade un nuevo elemento al principio del array y retorna el largo de dicho array 
const addElementAtStart = countries.unshift('Noruega');
console.log(addElementAtStart);
console.log(countries);

// Hace reversa a un array
const reverse = countries.reverse();
console.log(reverse);
console.log(countries);

//["Noruega", "Perú", "Uruguay", "Venezuela", "Alemania", "Austria", "Polonia", "Italia"]
//(8) ["Italia", "Polonia", "Austria", "Alemania", "Venezuela", "Uruguay", "Perú", "Noruega"]

//Elimina elementos. Primer param la posicion, segundo la cantidad de elementos a eliminar, tercero si queremos insertar
const splice =countries.splice(2,1);
console.log(countries);

// Ordena un array
const sort = countries.sort();
console.log(sort);

// indexOf: retorna el indice del elemento dado. Si no existe retorna -1
console.log(countries.indexOf('Perú'));



