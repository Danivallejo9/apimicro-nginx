const validarCliente = (req) => {
    const validaciones = [];

    if (!req.body.nombre) {
        validaciones.push('Nombre requerido');
    }

    if (!req.body.email) {
        validaciones.push('Email requerido');
    }

    if (!req.body.fechaCreacion) {
        validaciones.push('Fecha de creación requerida');
    }

   
    return validaciones;
}

module.exports = {
    validarCliente,
}