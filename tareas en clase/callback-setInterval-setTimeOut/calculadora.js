document.addEventListener('DOMContentLoaded',()=>{
//capturamos los elementos del HTML
//input
const pantalla=document.getElementById('pantalla');
const result=document.getElementById('resultado');
//const entrada2=document.getElementById('num2');
//numeros
const uno=document.getElementById('uno');
const dos=document.getElementById('dos');
const tres=document.getElementById('tres');
const cuatro=document.getElementById('cuatro');
const cinco=document.getElementById('cinco');
const seis=document.getElementById('seis');
const siete=document.getElementById('siete');
const ocho=document.getElementById('ocho');
const nueve=document.getElementById('nueve');
const cero=document.getElementById('cero');
const punto=document.getElementById('punto');
//reset
const reset=document.getElementById('AC');
//operaciones
const suma =document.getElementById('suma');
const resta =document.getElementById('resta');
const multiplica =document.getElementById('multiplica');
const divide =document.getElementById('divide');
//boton calcular 
const btnCal=document.getElementById('btn-cal');


//escucho los eventos de los numeros
uno.addEventListener("click", () =>{pantalla.value += "1"});
dos.addEventListener('click',()=>{pantalla.value+='2'});
tres.addEventListener('click',()=>{pantalla.value+='3'});
cuatro.addEventListener('click',()=>{pantalla.value+='4'});
cinco.addEventListener('click',()=>{pantalla.value+='5'});
seis.addEventListener('click',()=>{pantalla.value+='6'});
siete.addEventListener('click',()=>{pantalla.value+='7'});
ocho.addEventListener('click',()=>{pantalla.value+='8'});
nueve.addEventListener('click',()=>{pantalla.value+='9'});
cero.addEventListener('click',()=>{pantalla.value+='0'});
punto.addEventListener('click',()=>{pantalla.value+='.'});

let TomaValor='';
let selecOperacion='';

//funcion actualiza pantalla
function actualizaPantalla(){
    pantalla.value=TomaValor;
};

//escucho los eventos de los operadores
suma.addEventListener('click', ()=>{
    selecOperacion='+';
    TomaValor=pantalla.value;
    pantalla.value='';
});

resta.addEventListener('click',()=>{
    selecOperacion='-';
    TomaValor=pantalla.value;
    pantalla.value='';
});
multiplica.addEventListener('click',()=>{
    selecOperacion='*';
    TomaValor=pantalla.value;
    pantalla.value='';
});
divide.addEventListener('click',()=>{
    selecOperacion='/';
    TomaValor=pantalla.value;
    pantalla.value='';
});
//evento click de boton calcular
btnCal.addEventListener('click',()=>{
    const segundoValor= pantalla.value;
    
    switch(selecOperacion){
        case '+':
            resultado= calcular(Number(TomaValor),Number(segundoValor),sumar);
            break;
        case '-':
            resultado= calcular(Number(TomaValor),Number(segundoValor),restar);
            break;
        case '*':
            resultado= calcular(Number(TomaValor),Number(segundoValor),multiplicar);
            break;
        case '/':
            resultado= calcular(Number(TomaValor),Number(segundoValor),dividir);
            break;
        default:'hola que ase!'
            break;
    }
//mostramos resultado por pantalla.
    result.innerHTML=resultado;
})
//escuchamos evento del boton AC
reset.addEventListener('click',()=>{
    pantalla.value='';
    TomaValor='';
    selecOperacion='';
    result.innerHTML='';
})

});

//funciones
function sumar(a,b){return a+b}

function restar(a,b){return a-b}

function dividir(a,b){
    if(a===0){
        return 0;
    }else if(b===0){
        return 'no podes dividir por 0 capo!'
    }else{
        return a/b;
}};

function multiplicar(a,b){
    return a*b
};

function calcular(num1,num2,cb){
    let resultado=0;
       resultado= cb(num1,num2);
     return resultado;
}
//console.log(calcular(5,0,dividir));

