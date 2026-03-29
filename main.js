let total = 0;
let totalDisplay = '';
let detalleDisplay = '';

document.addEventListener("DOMContentLoaded", function(event) {
        totalDisplay = document.getElementById('total');
        detalleDisplay = document.getElementById('detalle');
    });

function sumar(num) {
    total += num;
    totalDisplay.innerHTML = total;
}

function reiniciar() {
    total = 0;
    totalDisplay.innerHTML = total;
    detalleDisplay.innerHTML = '';
}

function agregarDetalle(texto) {
    detalleDisplay.innerHTML += texto + '<br>';
    detalleDisplay.scrollTop = detalleDisplay.scrollHeight;
}