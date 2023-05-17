// Armar una base de datos de libros
// • Hacer el planteo de las clases necesarias
// • Implementar la clase Libro
// • Implementar la clase GestorLibros → debe
// soportar insertar/consultar/modificar/eliminar
// libros (la entrada de información por teclado)
// • Luego incorporar en donde se crea necesario un
// mecanismo para leer libros desde un archivo de
// texto
// • Subir las cosas a GitHub y avisar por Slack


//definimos nuestra clase libro
class libro {
    nombre:string;
    genero:string;
    cant: number;
    autor:string;

constructor(nombre:string,genero:string,cant:number,autor?:any){
this.nombre=nombre;    
this.genero=genero;
this.cant=cant;
this.autor=autor;
}

}
//Implementar la clase GestorLibros → debe
// soportar insertar/consultar/modificar/eliminar
// libros (la entrada de información por teclado)

class gestorLibros{
    todo(array){
        console.log('libros: ',array);
    }

    insertar(libro:libro, array:libro[]){
        if(array.push(libro)){
            console.log('se ha añadido ',libro.nombre,' a la base de datos ',array)
        }else{
            console.log('el libro ',libro,' no se ha podido añadir a la biblioteca ')
        }
    }

    consultar(nombre:string, array:libro[]){
        let libroEncontrado= array.find(libro => libro.nombre===nombre)
        if(libroEncontrado){
            console.timeLog(nombre,' existe en biblioteca')
            return libroEncontrado
        }else{
            console.log(nombre,' no existe en biblioteca');
        }
    }

    

}
