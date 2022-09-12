// Cris => [C,r,i,s] => string => string[]
// [C,r,i,s] => Cris => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

/* export function parseStr(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join(''); //string
    } else {
        return input.split(''); //string[]
    }
} */

export function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join(''); //string
    } else if  (typeof input === 'string'){
        return input.split(''); //string[]
    }
    else if  (typeof input === 'number'){
        return true; //boolean
    }
}

const rtaArray = parseStr ('Cris');
rtaArray.reverse(); 
//if (Array.isArray(rtaArray)){ 
//  rtaArray.reverse();
//}
console.log('rtaArray','Cris =>', rtaArray);

const rtaStr = parseStr(['C','r','i','s']);
rtaStr.toLowerCase(); 
//if (typeof rtaStr === 'string'){
//  rtaStr.toLowerCase();
//}
console.log('rtaStr',"['C','r','i','s']=>",rtaStr); 

const rtaBoolean = parseStr(12);
console.log('rtaBoleean',"12",rtaBoolean); 