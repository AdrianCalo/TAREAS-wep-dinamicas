// Crear un proyecto
// Crear dos archivos con funcionalidades diferentes
// Definir las tareas asociadas y ejecutarlas

//importar paquetes readlineSync


/* ejer altura persona a modificar:

const readlineSync= require("readline-sync");

let alturaPersona= readlineSync.question("indique altura de la persona: ");
console.log("la altura de la persona es: ", alturaPersona);*/



//modificar el primer script de "altura persona" para:
//preguntar el nombre de la persona.

//verificar si la persona es mas alta de 1.78cm
//en caso afirmativo informar "es mayor que el promedio".
// de lo contrario, "es menor que el promedio"

const readlineSync= require("readline-sync");
let nombre= readlineSync.question("indique el nombre de la persona: ");
let alturaPersona= readlineSync.question("indique altura de la persona: ");

function comparar():void{
    if(alturaPersona> 1.78){
        console.log(nombre," es mayor al promedio")
    }else{
        console.log(nombre," es menor que el promedio")
    }
}

comparar()