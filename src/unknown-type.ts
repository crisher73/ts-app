let anyVar: any;
anyVar = true;
anyVar = 1;
anyVar = null;

// por ser tipo any, deja ingresar cualquier tipo de valor. 

let isNew: boolean = anyVar;

anyVar.dosomenthing();
anyVar.touppercase();

let unknownVar: unknown;
unknownVar = true;
unknownVar = 1;
unknownVar = null;


if(typeof unknownVar==='string') {
    unknownVar.toLocaleUpperCase();
}

// el unknown me evita cometer errores, como pasa con el any y me obliga a tipificar para poder encontrar oras opciones de uso. 
//es una mejor forma de any. 

