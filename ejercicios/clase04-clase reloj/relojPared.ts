//piensen en un objeto de la vida real, construyan 
//una clase basadda en este objeto y escriban las propiedades
//y funcionalidades

let readlinesync = require("readline-sync");
class reloj{
    estaEncendido:boolean= false;
    alarma:boolean=false;
    bateria:boolean=true;
    //hora:number=;
    material:string;
    tipo:string;
    asignarTipo: any;
    asignarMaterial: any;
    horario: any;
    cargar: any;
}

function encendido():void{
    if(this.estaEncendido === false){
        this.estaEncendido= true
        console.log("el reloj esta funcionando")
    }else{
        this.estaEncendido= false
        console.log("el reloj esta apagado")
    }
}

function despertar():void{
    if(this.alarma=== false){
        this.alarma=true;
        let ponerAlarma:number=readlinesync.question("hora a despertar: ")
        console.log(ponerAlarma);
    }else{
        this.alarma=false
        console.log("alarma desactivada")
    }
}

function cargar():void{
    if(this.bateria===true){
        this.bateria= false
        console.log("la bateria se va gastando")
    }else{
        this.bateria=false
        console.log("la bateria no tiene carga")
    }
}

//function horario():void{
    

function asignarMaterial(material):void{
    this.material=material
    console.log(`el material del reloj es ${this.material}`)
}

function asignarTipo(tipo):void{
    this.tipo= tipo;
    console.log(`el tipo de reloj es ${tipo}`)
}

/* instanciamos una clase reloj llamada relojPared */
let relojPared= new reloj;

relojPared.asignarTipo("Pared");
relojPared.asignarMaterial("metal");
//relojPared.horario();

console.log(relojPared.bateria);
relojPared.cargar();
console.log(relojPared.bateria);

console.log(relojPared.alarma);
despertar();
console.log(relojPared.alarma);
