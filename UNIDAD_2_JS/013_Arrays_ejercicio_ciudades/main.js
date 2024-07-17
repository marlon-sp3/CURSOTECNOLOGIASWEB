// Accedemos al <ol> (la lista ordenada)
const elemento = document.getElementById('lista');
// Creamos el array para insertar las ciudades
let ciudades = [];

// Bucle para mostrar el formulario 4 veces al usuario
for (i = 0; i<4; i++){
   // Se le pide el nombre de la ciudad y se guarda el nombre en la variable ciudad
   let ciudad = prompt("introduce el nombre de la ciudad " + (i+1));
   // Comprobamos si el usuario introdujo algún valor
   if (!ciudad){
       i--;
       continue;
   }
   // Añadimos la ciudad al array
   ciudades.push(ciudad);
   // Imprimimos el array en la consola
   console.log(ciudades);
   // Añadimos a la lista ordenada la nueva ciudad.
   elemento.innerHTML= elemento.innerHTML + `<li>${ciudad}</li>`;
}

// Se llama desde el evento onclick de un botón en el body del html
function elimina(){
   // Vaciamos la lista ordenada
   elemento.innerHTML="";
   // Mostramos el formulario para elegir el número de la ciudad a eliminar
   let ciudadEliminar = prompt("introduce el nombre de la ciudad que quieres eliminar");
   // Eliminamos la ciudad de la lista
   ciudades.splice(ciudadEliminar-1,1);
   // imprimimos las ciudades resultantes en la lista ordenada con forEach
   ciudades.forEach(function(c){
       elemento.innerHTML= `${elemento.innerHTML}<li>${c}</li>`;
   })
   console.log(ciudades);
}
