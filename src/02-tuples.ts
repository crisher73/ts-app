const prices: (number | string)[] = [1,3,5,7,'cris']; //array normal
prices.push(8);
prices.push('hey');

//typando una tupple
let user:[string,number,boolean] = ['crisher73',15,false] // por ser fuertemente tipada, solo me permite ingresar 2 valores. 


// user = []; // incorrecto
// user = ['cris']; //incorrecto
// user = ['cris',12]; //incorrecto
user = ['cris',12,true]; //correcto 

// destructuracion : Hacer que a traves de mi array pueda elegir que valores imprimir. 

user = ['crisher73',29,true];
const [username,age] = user;
console.log(username);
console.log(age);

