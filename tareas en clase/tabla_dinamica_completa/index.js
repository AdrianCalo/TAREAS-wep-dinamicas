import datos from './datosUsers.json' assert{type: 'json'};

const tabla= document.getElementById('tabla');

datos.forEach(data =>{
    let fila=document.createElement('tr'); //creamos la fila

    let celda_nombre=document.createElement('td');//creamos la celda que formara la columna nombre
    celda_nombre.textContent=`${data.name.first} ${data.name.last}`;//cargamos en la celda los datos que necesitamos del archivo json
    fila.appendChild(celda_nombre);//cargamos en la celda los datos que necesitamos del archivo json


    let celda_domicilio=document.createElement('td');//creamos la celda que formara la columna domicilio
    celda_domicilio.textContent=`${data.location.street.number} ${data.location.street.name}`;//cargamos en la celda los datos que necesitamos del archivo json
    fila.appendChild(celda_domicilio);//cargamos en la celda los datos que necesitamos del archivo json

    let celda_pais =document.createElement('td');//creamos la celda que formara la columna pais
    celda_pais.textContent=`${data.location.city},${data.location.country}`;//cargamos en la celda los datos que necesitamos del archivo json
    fila.appendChild(celda_pais);//cargamos en la celda los datos que necesitamos del archivo json

    let celda_email=document.createElement('td');//creamos la celda que formara la columna email
    celda_email.textContent=`${data.email}`;//cargamos en la celda los datos que necesitamos del archivo json
    fila.appendChild(celda_email);//cargamos en la celda los datos que necesitamos del archivo json

    let celda_fotos=document.createElement('td');//creamos la celda que formara la columna fotos
    let fotos= document.createElement('img');//creamos el elemento imagen
    fotos.src=data.picture.thumbnail;//accedemos a la "propiedad SRC de la etiqueta img" y cargamos la urc de la imagen que queremos mostrar en la tabla
    celda_fotos.appendChild(fotos)//cargamos en la celda la foto que necesitamos del archivo json
    fila.appendChild(celda_fotos);//cargamos en la celda los datos que necesitamos del archivo json


    tabla.appendChild(fila);//creamos la tabla con los datos que hay en cada fila.
});