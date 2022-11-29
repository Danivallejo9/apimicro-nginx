const validarProyecto = (req) => {
    const validaciones = [];

    if (!req.body.numero) {
        validaciones.push('Numero requerido');
    }

    if (!req.body.titulo) {
        validaciones.push('Titulo requerido');
    }

    if (!req.body.fechaIniciacion) {
        validaciones.push('Fecha de iniciación requerida');
    }

    if (!req.body.fechaEntrega) {
        validaciones.push('Fecha entrega requerido');
    }

    if (!req.body.valor) {
        validaciones.push('Valor requerido');
    }

    if (!req.body.fechaCreacion) {
        validaciones.push('Fecha de creación requerida');
    }

    if (!req.body.cliente) {
        validaciones.push('Cliente requerido');
    }

    if (!req.body.tipoProyecto) {
        validaciones.push('Tipo proyecto requerido');
    }

    if (!req.body.universidad) {
        validaciones.push('Universidad requerida');
    }

    if (!req.body.etapaProyecto) {
        validaciones.push('Etapa proyecto requerida');
    }

    return validaciones;
}

module.exports = {
    validarProyecto,
}