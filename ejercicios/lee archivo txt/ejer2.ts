//lee un archivo txt y guarda sus palabras en un array de string  

import * as fs from 'fs';
let texto:string=fs.readFileSync('abc.txt', 'utf8');
let palabras:string[]= texto.split(' ');
console.log(palabras);