/*Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
Insertar/eliminar/buscar/actualizar una palabra del listado
*/

let palabras:string[]= [ "lorenzo ","pablo","jimena","silvio"];

function PalabrasFuncion(palabra:string, accion:string, array:string[],actualizacion?:string){
    switch(accion){
        case "insertar":
            array.push(palabra);
            console.log(array);
            break
        case "eliminar":
            var index:number= array.indexOf(palabra);//indexof si no existe devulve -1 no false
            if(index !== -1){// entonces para buscar tenes que preguntar si no es -1
                array.splice(index,1)}
                console.log(array);
                break;
        case "buscar":
            var index:number= array.indexOf(palabra);
            if(index){
                console.log(palabra," fue encontrada")
            }else{
                console.log(palabra," no fue encontrada")}
            break;
        case "actualizar":
            var index:number= array.indexOf(palabra);
            if(index !== -1){
                array[index]= actualizacion!;
            }
            console.log(array);
        default: console.log("no se reconoce esa acccion");

        
    }
    
}
    console.log(PalabrasFuncion("adrian","insertar",palabras));
    console.log(PalabrasFuncion("pablo","buscar",palabras,));
    console.log(PalabrasFuncion("adrian","actualizar",palabras,"ramon"));
    console.log(PalabrasFuncion("ramon","eliminar",palabras));

    /*NOTAS:
Uso del método .splice()
Este método recibe varios argumentos, entre los cuales están:
Inicio
El primer argumento, de tipo numérico que le podemos dar a nuestro método es el index del cual se empezará a modificar el array.
En caso de introduzcamos un valor negativo, entonces contará desde el final del array.
Cuenta de borrado
El segundo número, también de tipo numérico, indicará el numero de elementos que queremos eliminar de nuestro array arrancando por el valor especificado en inicio.
En el caso de que este argumento sea 0 o negativo, ningún elemento de nuestro array será eliminado.
item1, item2, … itemN
Estos son los elementos que serán añadidos a partir de inicio. En caso de no especificar nuevos elementos para agregar al array, solo eliminara la cantidad de elementos especificada en el parámetro anterior.

Ejemplo
Supomgamos que tenemos un array número al cual queremos agregar los número faltantantes:
const arr = [1, 2, 6];
arr.splice(2, 0, 3, 4, 5);
console.log(arr) // output esperado: [1, 2, 3, 4, 5, 6]; */

//actualizacion! *porque se utiliza !*
// El símbolo de exclamación (!) en la línea 30 es un operador de aserción no nulo en TypeScript.
// Se utiliza para indicarle al compilador que la variable actualizacion no es nula ni indefinida,
// a pesar de que su tipo pueda permitir esos valores.