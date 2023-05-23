//adaptar el ejercicio de coundown para que luego de unos 5 segundos 
//inicie la cuenta regresiva

function coundown(){
    let i =10;
    const interval= setInterval(()=>{//los parametros de SetInterval son una funcion (en este caso anonima)
                                    // y..los milisegundos en los que se hara el intervalo
        if(i===0){
            clearInterval(interval);
            console.log("pimba!");
        }else{
            console.log(`la bomba hara pimba en ${i} ${i===1? 'segundo': 'segundos'} `)
            i--
        }
    },1000)//milisegundos de intervalo
}

//coundown();
setTimeout(()=>{coundown()},5000);
//setTimeOut funciona igual que el setInterval, como parametros tiene una callback(una funcion la cual se pasa como parametro)
// y un numero en este caso un tiempo de espera, ya que setTimeout lo que hace es ejecutar por unica vez la funcion que se paso como parametro
//luego de un tiempo de espera expresado en milisegundos