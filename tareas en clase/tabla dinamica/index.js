//crear una tabla que muestra dinamicamente
//contenido almacenado en un JSON
//debera tener al menos 4 columnas y 5 filas (sin contar el header)


import {data} from "./user.js" 

const user=JSON.parse(data);//pase data a objeto json y lo guardo en variable user 
const list=document.querySelector('ul')//capturo la lista
user.forEach(el => {

    
    const usr=`
    <li>${el.name.first} ${el.name.last} / ${el.location.street.number} ${el.location.street.name} /${el.location.city} ${el.location.country}/${el.email} <img src=${el.picture.thumbnail}></li>`;
    list.innerHTML += usr;
   
});
