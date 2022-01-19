function modalCloseInQR() {
    $('#InfoTraModal').modal('hide')
}

function modalOpenSugerencia() {
    $('#sugerencia').appendTo("body").modal('show');
}

function modalOpenSugerenciaSitio() {
    $('#sugerenciaSitio').appendTo("body").modal('show');
}

export {
    modalCloseInQR,
};