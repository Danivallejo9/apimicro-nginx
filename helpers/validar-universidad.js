const validarUniversidad = (req) => {
    const validaciones = [];

    if (!req.body.nombre) {
        validaciones.push('Nombre requerido');
    }

    if (!req.body.direccion) {
        validaciones.push('Dirección requerida');
    }

    if (!req.body.telefono) {
        validaciones.push('Teléfono requerida');
    }

    if (!req.body.fechaCreacion) {
        validaciones.push('Fecha de creación requerida');
    }

   
    return validaciones;
}

module.exports = {
    validarUniversidad,
}