
const numCorrecto = 14;
let a = 0;
while (a < 3) {

    let resUsuario = parseInt(prompt('Introduce la suma de 5 + 9'));


    if (resUsuario == numCorrecto) {
        document.write('<h1 style="color:red">¡Enhorabuena Amalia!');
        break;

        // Si no: 
    } else if (isNaN(resUsuario)) {
        alert('Debes introducir un número');
        window.location.reload();
    } else {
        // Alerta de error
        alert('La suma introducida no es correcta: Prueba de nuevo');
        // recargamos página
        window.location.reload();
    }
    a++;
    
    if (a==3){
        alert('La policía tomara este caso a partir de ahora');
        window.location.href="https://mossos.gencat.cat/ca/inici";
    }
    
}
