const withoutend = () => {
    while (true) {
        console.log('nunca para de aprender');
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'es un string';
    } else if (Array.isArray(input)) {
        return 'en un array';
    }
    return fail('not match');
}

console.log(example('hola'));
console.log(example([1,2,3,4]));
console.log(example(1234)); //aqui se detiene porque es un fail, osea un nunca. 
console.log(example('hola despues del fail'));

