// Cris => [C,r,i,s] => string => string[]
// [C,r,i,s] => Cris => string[] => string

function parseStr(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join(''); //string
    } else {
        return input.split(''); //string[]
    }
}

const rtaArray = parseStr ('Cris');
// rtaArray.reserve(); // primero debo indicarle que tipo de dato va a transformar para que ts no se confunda. 
if (Array.isArray(rtaArray)){
    rtaArray.reverse();
}
console.log('rtaArray','Cris =>', rtaArray);

const rtaStr = parseStr(['C','r','i','s']);
// rtaStr.toLowercase(); // primero debo indicarle que tipo de dato va a transformar para que ts no se confunda.
if (typeof rtaStr === 'string'){
    rtaStr.toLowerCase();
}
console.log('rtaStr',"['C','r','i','s']=>",rtaStr); 