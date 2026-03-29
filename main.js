let total = 0;
let totalDisplay = '';
let detalleDisplay = '';
let paginas;
let esColor;
let esFull;
let esDuplex;

document.addEventListener("DOMContentLoaded", function(event) {
        totalDisplay = document.getElementById('total');
        detalleDisplay = document.getElementById('detalle');
        paginas = document.getElementById('paginasPersonalizadas');
        esColor = document.getElementById('checkboxColor').checked;
        esFull = document.getElementById('checkboxFull').checked;
        esDuplex = document.getElementById('checkboxDuplex').checked;
    });

function sumar(num) {
    total += num;
    totalDisplay.innerHTML = total;
}

function reiniciar() {
    total = 0;
    totalDisplay.innerHTML = total;
    detalleDisplay.innerHTML = '';
    paginas.value = '';
    esColor.checked = false;
    esFull.checked = false;
    esDuplex.checked = false;
}

function agregarDetalle(texto) {
    detalleDisplay.innerHTML += texto + '<br>';
    detalleDisplay.scrollTop = detalleDisplay.scrollHeight;
}

function agregarPaginasPersonalizadas() {
    let precio = esColor ? (esFull ? 300 : 150) : (esFull ? 200 : 100);
    if (esDuplex) {
        precio = (precio * 2) * 0.75;
        precio = Math.round(precio);
    }
    let totalPaginas = paginas.value * precio;
    agregarDetalle(`Páginas Personalizadas (${paginas.value} ${esColor ? 'Color' : 'BN'}${esFull ? ' Full' : ''}${esDuplex ? ' Duplex' : ''}): $${totalPaginas}`);
    sumar(totalPaginas);
}