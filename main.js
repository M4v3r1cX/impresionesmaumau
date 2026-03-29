let total = 0;
let totalDisplay = '';
let detalleDisplay = '';
let paginas;

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
    document.getElementById('checkboxColor').checked = false;
    document.getElementById('checkboxFull').checked = false;
    document.getElementById('checkboxDuplex').checked = false;
}

function agregarDetalle(texto) {
    detalleDisplay.innerHTML += texto + '<br>';
    detalleDisplay.scrollTop = detalleDisplay.scrollHeight;
}

function agregarPaginasPersonalizadas() {
    let esColor = document.getElementById('checkboxColor').checked;
    let esFull = document.getElementById('checkboxFull').checked;
    let esDuplex = document.getElementById('checkboxDuplex').checked;
    let precio = esColor ? (esFull ? 300 : 150) : (esFull ? 200 : 100);
    if (esDuplex) {
        console.log('es duplex');
        precio = precio * 0.75;
    }

    let totalPaginas = paginas.value * precio;
    agregarDetalle(`Páginas Personalizadas (${paginas.value} ${esColor ? 'Color' : 'BN'}${esFull ? ' Full' : ''}${esDuplex ? ' Duplex' : ''}): $${totalPaginas}`);
    sumar(totalPaginas);
}