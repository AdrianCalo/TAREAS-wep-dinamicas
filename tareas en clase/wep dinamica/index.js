import datos from "./listado.json" assert{type:"json"}

//datos es un nombre cualquiera.
/*hay que agregar assert: permite poder acceder a los 
datos locales(en el cpu). basicamente da un permiso para 
acceder a los archivos*/

//escuchamos la carga en la pantalla de la pagina.
//y a partir de ahi ejecuta la funcion
window.addEventListener("load",() =>{
    //obtenemos el contenedor de la card.
    //esta son todas las tarjetas
    let container = document.getElementById('cards-container');//como captura el elemento con ID no es necesario aclararlo. 
    //obtenemos la plantilla de la card.
    //esta es cada tarjeta
    let cardTemplate = document.querySelector("#card-template");//va el punto porque habla de una clase. si fuera un ID habria que poner un # 
        
    //iterar sobre los datos y crear una card para cadda uno
    datos.forEach(dato =>{
        //clona la plantilla de la card
        const card =cardTemplate.content.cloneNode(true)
        
        //agrego los datos a la card
        card.querySelector('.card-title').textContent= dato.nombre;
        card.querySelector('.apellido').textContent= dato.apellido;
        card.querySelector('.edad').textContent= dato.edad;
        card.querySelector('.sexo').textContent= dato.sexo;
        card.querySelector('.email').textContent= dato.email;
                      
        //agregar la card al contenedor
        container.appendChild(card)
        //con esto guarde cara datos en la tarjeta
    });    
})
