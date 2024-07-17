let precioUsuario = parseInt(prompt('Precio original?'));
let descUsuario = parseInt(prompt('descuento del producto?'));

let descAplicado = (a,b) => {
    return a * b / 100;
}

document.getElementById('PFinal').innerHTML = `El precio original es: ${precioUsuario} <br>
El % de descuento es: ${descUsuario} <br>
El precio del producto con el descuento aplicado es: ${precioUsuario - descAplicado(precioUsuario, descUsuario)}`;