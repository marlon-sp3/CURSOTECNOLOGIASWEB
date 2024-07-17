
const numCorrecto = 14;

let resUsuario = parseInt(prompt('Introduce la suma de 5+9'));

if (resUsuario == numCorrecto) {
    document.write('<h1>¡Enhorabuena máquina!<h1>');
}
else if (isNaN(resUsuario)) {
    alert('debes introducir un número');
    window.location.reload();
}
else {
    alert('La suma no es correcta: intenta de nuevo.')
    window.location.reload();
}


 